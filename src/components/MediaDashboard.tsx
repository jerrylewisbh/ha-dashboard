import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useEntity, useService, useHass } from '@hakit/core';
import type { EntityName } from '@hakit/core';
import { Icon } from '@iconify/react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import * as S from '../styles/MediaDashboard.styles';

// --- CONFIG ---
const MASS_URL = (import.meta.env.VITE_MASS_API_URL as string) || '/mass-api';
const MASS_TOKEN = import.meta.env.VITE_MASS_TOKEN as string;
const PARTY_URL = import.meta.env.VITE_MASS_PARTY_URL as string;

// --- INTERFACES ---
interface MassMediaItem {
  uri: string;
  name: string;
  media_type: string;
  image_url?: string;
  metadata?: { images?: { url?: string; path?: string }[] };
}

interface HaBrowseItem {
  title: string;
  media_content_type: string;
  media_content_id: string;
  thumbnail?: string | null;
  can_play: boolean;
  can_expand: boolean;
  children?: HaBrowseItem[] | null;
}

const mapBrowseItemToMass = (item: HaBrowseItem): MassMediaItem => ({
  uri: item.media_content_id,
  name: item.title,
  media_type: item.media_content_type.replace(/^music_assistant_(library_)?/, ''),
  image_url: item.thumbnail ?? undefined,
});

interface MassQueueItem {
  queue_item_id: string;
  media_title: string;
  media_artist?: string;
  media_album_name?: string;
  media_image?: string;
  media_content_id?: string;
}

interface GetQueueResponse {
  context: { id: string; parent_id: string | null; user_id: string };
  response: { [key: string]: MassQueueItem[] };
}

interface MassQueueService {
  get_queue_items: (args: { serviceData: { entity: string }; returnResponse: boolean }) => Promise<GetQueueResponse>;
  remove_queue_item: (args: { serviceData: { entity: string; queue_item_id: string } }) => void;
}

interface MusicAssistantService {
  play_media: (args: { target: { entity_id: string }; serviceData: { media_id: string; media_type: string; enqueue: string } }) => void;
}

interface MediaPlayerService {
  clear_playlist: (args: { target: { entity_id: string } }) => void;
  media_play_pause: (args: { target: { entity_id: string } }) => void;
  media_next_track: (args: { target: { entity_id: string } }) => void;
  media_previous_track: (args: { target: { entity_id: string } }) => void;
  volume_set: (args: { target: { entity_id: string }; serviceData: { volume_level: number } }) => void;
  media_seek: (args: { target: { entity_id: string }; serviceData: { seek_position: number } }) => void;
}

type LyricLine = { time: number; text: string };
interface LrcLibTrack {
  syncedLyrics?: string;
  plainLyrics?: string;
}

interface FullyWindow extends Window {
  fully?: {
    startApplication: (packageName: string) => void;
  };
}

const SpeakerCard = ({ entityId, isTarget, onSelect }: { entityId: EntityName; isTarget: boolean; onSelect: () => void }) => {
  const player = useEntity(entityId);
  if (!player) return null;
  return (
    <div onClick={onSelect} style={S.sidebarStyles.card(isTarget)}>
      <Icon
        icon={player.state === 'playing' ? 'mdi:speaker-wireless' : 'mdi:speaker'}
        style={{ fontSize: '1.2rem', color: isTarget ? S.THEME.accent : S.THEME.textSub }}
      />
      <div style={S.playerStyles.infoBox}>
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#fff',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {player.attributes.friendly_name
            ?.replace(/mass/gi, '')
            .replace(/speaker/gi, '')
            .trim()}
        </span>
      </div>
    </div>
  );
};

export function MediaDashboard() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<MassMediaItem[]>([]);
  const [queueItems, setQueueItems] = useState<MassQueueItem[]>([]);
  const [viewMode, setViewMode] = useState<'search' | 'playlists' | 'albums' | 'tracks'>('search');
  const [showPartyMode, setShowPartyMode] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState<EntityName>('media_player.mass_living_room_speaker');
  const [expandedItemUri, setExpandedItemUri] = useState<string | null>(null);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const [lyricsData, setLyricsData] = useState<{ type: 'synced'; lines: LyricLine[] } | { type: 'plain'; text: string } | null>(null);
  const [playbackTime, setPlaybackTime] = useState(0);

  const keyboardRef = useRef<{ setInput: (input: string) => void } | null>(null);
  const lyricLineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const connection = useHass(state => state.connection);

  // Discover the real backend ingress URL for MASS via the authenticated WebSocket connection.
  // In dev the Vite proxy handles /app/d5369777_music_assistant so this stays null (falls back to MASS_URL).
  // In production the supervisor/api WS command returns the /api/hassio_ingress/{token}/ path which
  // HA proxies to MASS without any cross-origin restrictions.
  const massIngressRef = useRef<string | null>(null);
  useEffect(() => {
    if (!connection || import.meta.env.DEV) return;
    connection
      .sendMessagePromise<{ ingress_url?: string }>({
        type: 'supervisor/api',
        endpoint: '/addons/d5369777_music_assistant/info',
        method: 'get',
      })
      .then(data => {
        if (data?.ingress_url) massIngressRef.current = data.ingress_url;
      })
      .catch(() => {});
  }, [connection]);

  // Create/refresh the HA ingress session via the already-authenticated WebSocket connection.
  // The Supervisor creates the session (same as HA's own frontend does internally) and we
  // write the ingress_session cookie ourselves — it is not HttpOnly so JS can set it.
  const refreshIngressSession = useCallback(async (): Promise<boolean> => {
    if (!massIngressRef.current || !connection) return !massIngressRef.current;
    try {
      const data = await connection.sendMessagePromise<{ session?: string }>({
        type: 'supervisor/api',
        endpoint: '/ingress/session',
        method: 'post',
      });
      const sessionToken = data?.session;
      if (sessionToken) {
        document.cookie = `ingress_session=${sessionToken}; path=/api/hassio_ingress/; max-age=600; SameSite=Lax`;
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, [connection]);

  // Keep the ingress session alive — HA expires it after ~30 min, so refresh every 20 min.
  useEffect(() => {
    if (import.meta.env.DEV) return;
    const id = setInterval(
      () => {
        void refreshIngressSession();
      },
      20 * 60 * 1000
    );
    return () => clearInterval(id);
  }, [refreshIngressSession]);

  const massQueueService = useService('mass_queue' as never) as unknown as MassQueueService;
  const musicAssistantService = useService('music_assistant' as never) as unknown as MusicAssistantService;
  const mediaPlayerService = useService('media_player' as never) as unknown as MediaPlayerService;
  const activePlayer = useEntity(selectedEntity);

  const launchApp = useCallback((packageName: string) => {
    const targetWindow = window as unknown as FullyWindow;
    if (targetWindow.fully && typeof targetWindow.fully.startApplication === 'function') {
      targetWindow.fully.startApplication(packageName);
    } else {
      console.warn(`Fully Kiosk API not found. Would have launched: ${packageName}`);
    }
  }, []);

  const fetchQueue = useCallback(async () => {
    try {
      const res = await massQueueService.get_queue_items({ serviceData: { entity: selectedEntity as string }, returnResponse: true });
      setQueueItems(res.response[selectedEntity as string] || []);
    } catch (error) {
      console.error('Queue fetch failed:', error);
    }
  }, [selectedEntity, massQueueService]);

  useEffect(() => {
    const isHome = (viewMode === 'search' && !query) || showPartyMode;
    if (isHome) {
      const initialFetchTimeout = setTimeout(() => {
        void fetchQueue();
      }, 0);
      const intervalId = setInterval(() => {
        void fetchQueue();
      }, 5000);
      return () => {
        clearTimeout(initialFetchTimeout);
        clearInterval(intervalId);
      };
    }
  }, [viewMode, query, showPartyMode, fetchQueue]);

  useEffect(() => {
    let rafId: number;
    let lastUpdate = 0;

    const updateTime = (timestamp: number) => {
      if (timestamp - lastUpdate > 100) {
        if (activePlayer?.state === 'playing') {
          const position = activePlayer.attributes.media_position || 0;
          const updatedAtStr = activePlayer.attributes.media_position_updated_at;
          const updatedAt = updatedAtStr ? new Date(updatedAtStr).getTime() : null;
          const timeDiff = updatedAt ? (Date.now() - updatedAt) / 1000 : 0;
          setPlaybackTime(position + timeDiff);
        } else if (activePlayer) {
          setPlaybackTime(activePlayer.attributes.media_position || 0);
        }
        lastUpdate = timestamp;
      }
      rafId = requestAnimationFrame(updateTime);
    };

    if (showPartyMode) rafId = requestAnimationFrame(updateTime);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [activePlayer, showPartyMode]);

  // ------------------------------------------
  // LYRICS FETCHING - ESLINT FIX
  // ------------------------------------------
  useEffect(() => {
    if (!showPartyMode) return;
    const artist = activePlayer?.attributes.media_artist;
    const title = activePlayer?.attributes.media_title;
    let isMounted = true; // Safety flag for async operations

    if (artist && title) {
      // Defer state update to next tick
      setTimeout(() => {
        if (isMounted) setLyricsData({ type: 'plain', text: 'Loading lyrics...' });
      }, 0);

      lyricLineRefs.current = [];

      const cleanTitle = title
        .replace(/ - .*/, '')
        .replace(/\(.*\)/, '')
        .replace(/\[.*]/, '')
        .trim();
      const cleanArtist = artist.split(/, | & | feat/i)[0].trim();
      const queryStr = `${cleanArtist} ${cleanTitle}`;

      fetch(`https://lrclib.net/api/search?q=${encodeURIComponent(queryStr)}`)
        .then(res => {
          if (!res.ok) throw new Error('Not found');
          return res.json();
        })
        .then((data: LrcLibTrack[]) => {
          if (!isMounted) return; // Abort if component unmounted or changed track

          if (data && data.length > 0) {
            const track = data.find(t => t.syncedLyrics) || data[0];

            if (track.syncedLyrics) {
              const lines = track.syncedLyrics.split('\n');
              const parsedLines: LyricLine[] = [];
              const timeRegex = /\[(\d{2,}):(\d{2})(?:\.(\d{1,3}))?]/;

              for (const line of lines) {
                const match = line.match(timeRegex);
                if (match) {
                  const minutes = parseInt(match[1], 10);
                  const seconds = parseInt(match[2], 10);
                  const milliseconds = match[3] ? parseFloat(`0.${match[3]}`) : 0;
                  const time = minutes * 60 + seconds + milliseconds;
                  const text = line.replace(timeRegex, '').trim();
                  parsedLines.push({ time, text: text || '♪' });
                }
              }
              if (parsedLines.length > 0) setLyricsData({ type: 'synced', lines: parsedLines });
              else setLyricsData({ type: 'plain', text: track.plainLyrics || 'Lyrics are not available.' });
            } else if (track.plainLyrics) {
              setLyricsData({ type: 'plain', text: track.plainLyrics });
            } else {
              setLyricsData({ type: 'plain', text: 'Lyrics are not available for this track.' });
            }
          } else {
            setLyricsData({ type: 'plain', text: 'Lyrics not found in database.' });
          }
        })
        .catch(error => {
          console.error('Lyrics fetch error:', error);
          if (isMounted) setLyricsData({ type: 'plain', text: 'Error fetching lyrics.' });
        });
    } else {
      setTimeout(() => {
        if (isMounted) setLyricsData({ type: 'plain', text: 'Waiting for track...' });
      }, 0);
    }

    return () => {
      isMounted = false; // Cleanup flag when effect re-runs or unmounts
    };
  }, [activePlayer?.attributes.media_title, activePlayer?.attributes.media_artist, showPartyMode]);

  const activeLyricIndex = useMemo(() => {
    if (lyricsData?.type !== 'synced') return -1;
    let active = -1;
    for (let i = 0; i < lyricsData.lines.length; i++) {
      if (playbackTime >= lyricsData.lines[i].time) active = i;
      else break;
    }
    return active;
  }, [playbackTime, lyricsData]);

  useEffect(() => {
    if (activeLyricIndex !== -1 && lyricLineRefs.current[activeLyricIndex]) {
      lyricLineRefs.current[activeLyricIndex]!.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeLyricIndex]);

  const handleSearch = useCallback(
    async (q: string) => {
      if (viewMode !== 'search') return;
      if (q.length < 3) {
        setResults([]);
        return;
      }
      if (!connection) return;
      try {
        const res = await connection.sendMessagePromise<{ result: HaBrowseItem[] }>({
          type: 'media_player/search_media',
          entity_id: selectedEntity as string,
          search_query: q,
          media_content_type: 'music',
          media_content_id: '',
        });
        setResults((res.result || []).map(mapBrowseItemToMass));
      } catch (error) {
        console.error('Search failed:', error);
      }
    },
    [viewMode, connection, selectedEntity]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      void handleSearch(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query, handleSearch]);

  const fetchLibrary = useCallback(
    async (type: 'playlists' | 'albums' | 'tracks') => {
      setQuery('');
      setViewMode(type);
      setShowKeyboard(false);
      setShowPartyMode(false);
      if (keyboardRef.current) keyboardRef.current.setInput('');

      try {
        const base = massIngressRef.current;
        if (base) await refreshIngressSession();

        const url = base ? `${base.replace(/\/$/, '')}/api` : MASS_URL;
        const body = JSON.stringify({ message_id: Date.now().toString(), command: `music/${type}/library_items`, args: { limit: 100 } });
        let response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${MASS_TOKEN}` },
          body,
        });

        // Session cookie may have just expired — refresh and retry once.
        if (response.status === 401 && base) {
          await refreshIngressSession();
          response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${MASS_TOKEN}` },
            body,
          });
        }

        if (!response.ok) throw new Error(`Music Assistant: ${response.status} ${response.statusText}`);
        type LibraryResponse = MassMediaItem[] | { items?: MassMediaItem[]; result?: MassMediaItem[] | { items?: MassMediaItem[] } };
        const data = (await response.json()) as LibraryResponse;
        let items: MassMediaItem[] = [];
        if (Array.isArray(data)) items = data;
        else {
          const result = data.result;
          if (Array.isArray(result)) items = result;
          else if (result && Array.isArray(result.items)) items = result.items;
          else if (Array.isArray(data.items)) items = data.items;
        }
        setResults(items);
      } catch (error) {
        console.error('Library failed:', error);
      }
    },
    [refreshIngressSession]
  );

  const performAction = (item: MassMediaItem, action: 'play' | 'replace' | 'next' | 'add') => {
    setShowKeyboard(false);
    setExpandedItemUri(null);
    musicAssistantService.play_media({
      target: { entity_id: selectedEntity as string },
      serviceData: { media_id: item.uri, media_type: item.media_type, enqueue: action },
    });
    if (action !== 'replace')
      setTimeout(() => {
        void fetchQueue();
      }, 800);
  };

  const handleRemoveQueueItem = (queueItemId: string) => {
    massQueueService.remove_queue_item({ serviceData: { entity: selectedEntity as string, queue_item_id: queueItemId } });
    setQueueItems(prev => prev.filter(item => item.queue_item_id !== queueItemId));
    setTimeout(() => {
      void fetchQueue();
    }, 600);
  };

  const displayedResults = useMemo(() => {
    if (viewMode === 'search') return results;
    if (!query) return results;
    return results.filter(item => (item.name || '').toLowerCase().includes(query.toLowerCase()));
  }, [results, query, viewMode]);

  const isHome = viewMode === 'search' && !query && !showPartyMode;

  return (
    <div style={S.layoutStyles.container(showPartyMode, showKeyboard)}>
      <style>{S.globalCss}</style>

      {/* HEADER */}
      {!showPartyMode && (
        <header style={S.headerStyles.container}>
          <div
            onClick={() => {
              setShowPartyMode(true);
              setShowKeyboard(false);
            }}
            style={S.headerStyles.partyToggle(showKeyboard)}
            title='Start Party Mode'
          >
            <Icon icon='mdi:party-popper' style={{ fontSize: '1.4rem', color: '#fff' }} />
          </div>

          <div
            onClick={() => launchApp('com.google.android.youtube')}
            style={S.headerStyles.partyToggle(showKeyboard)}
            title='Open YouTube'
          >
            <Icon icon='mdi:youtube' style={{ fontSize: '1.6rem', color: '#ff0000' }} />
          </div>

          <div style={S.headerStyles.searchBox(showKeyboard)}>
            <Icon icon='mdi:magnify' style={{ fontSize: '1.2rem', color: S.THEME.textSub }} />
            <input
              style={S.headerStyles.input}
              placeholder={viewMode === 'search' ? 'Search...' : `Filter ${viewMode}...`}
              value={query}
              inputMode='none'
              onClick={() => {
                setShowKeyboard(true);
              }}
              onChange={e => {
                setQuery(e.target.value);
                setViewMode('search');
                if (keyboardRef.current) keyboardRef.current.setInput(e.target.value);
              }}
            />
            <div style={S.headerStyles.iconGroup}>
              {query.length > 0 && (
                <Icon
                  icon='mdi:close-circle'
                  onClick={() => {
                    setQuery('');
                    if (keyboardRef.current) keyboardRef.current.setInput('');
                  }}
                  style={{ fontSize: '1.1rem', color: S.THEME.textSub, cursor: 'pointer' }}
                />
              )}
              {showKeyboard && (
                <Icon
                  icon='mdi:keyboard-close'
                  onClick={() => setShowKeyboard(false)}
                  style={{ fontSize: '1.2rem', color: S.THEME.textSub, cursor: 'pointer' }}
                />
              )}
            </div>
          </div>
        </header>
      )}

      {/* MAIN CONTENT */}
      <main style={S.layoutStyles.main} className='no-scrollbar'>
        {!showPartyMode && (
          <div style={S.listStyles.tabsContainer(showKeyboard)}>
            <div
              onClick={() => {
                setViewMode('search');
                setResults([]);
                setQuery('');
              }}
              className='chip'
              style={S.listStyles.tab(isHome)}
            >
              Queue
            </div>
            <div onClick={() => fetchLibrary('playlists')} className='chip' style={S.listStyles.tab(viewMode === 'playlists')}>
              Playlists
            </div>
            <div onClick={() => fetchLibrary('albums')} className='chip' style={S.listStyles.tab(viewMode === 'albums')}>
              Albums
            </div>
            <div onClick={() => fetchLibrary('tracks')} className='chip' style={S.listStyles.tab(viewMode === 'tracks')}>
              Tracks
            </div>
          </div>
        )}

        {showPartyMode ? (
          <div style={S.partyStyles.wrapper}>
            <div style={S.partyStyles.backgroundBlur(activePlayer?.attributes.entity_picture)} />

            <div style={S.partyStyles.contentLayer}>
              <div style={S.partyStyles.leftColumn} className='no-scrollbar'>
                <div style={S.partyStyles.headerRow}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Icon icon='mdi:party-popper' style={{ fontSize: '1.4rem', color: S.THEME.accent }} />
                    <span style={{ fontSize: '0.9rem', fontWeight: 800, color: S.THEME.accent, letterSpacing: '1px' }}>PARTY MODE</span>
                  </div>
                  <Icon
                    icon='mdi:close-circle'
                    onClick={() => setShowPartyMode(false)}
                    style={{ fontSize: '1.6rem', color: S.THEME.textSub, cursor: 'pointer' }}
                  />
                </div>

                <div style={S.partyStyles.qrContainer}>
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(PARTY_URL)}`}
                    alt='QR'
                    style={{ width: '140px', height: '140px', objectFit: 'contain' }}
                  />
                  <span style={{ color: '#000', fontSize: '0.75rem', fontWeight: 900 }}>SCAN TO JOIN</span>
                </div>

                <div style={S.partyStyles.queueSection}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: S.THEME.textSub, letterSpacing: '0.5px' }}>
                    UPCOMING REQUESTS
                  </span>
                  <div style={S.partyStyles.queueList} className='no-scrollbar'>
                    {queueItems.slice(1, 20).map((item, i) => (
                      <div key={item.queue_item_id} style={S.partyStyles.queueItem}>
                        <span style={{ color: S.THEME.accent, fontWeight: 900, fontSize: '1rem', width: '16px', textAlign: 'center' }}>
                          {i + 2}
                        </span>
                        <img
                          src={item.media_image}
                          style={{ width: '36px', height: '36px', borderRadius: '6px', objectFit: 'cover' }}
                          alt=''
                        />
                        <div style={S.listStyles.itemInfo}>
                          <div style={S.listStyles.itemTitle(false)}>{item.media_title}</div>
                          <div style={S.listStyles.itemSubtitle}>{item.media_artist}</div>
                        </div>
                      </div>
                    ))}
                    {queueItems.length <= 1 && (
                      <div
                        style={{ fontSize: '0.8rem', color: S.THEME.textSub, fontStyle: 'italic', textAlign: 'center', marginTop: '10px' }}
                      >
                        Queue is empty.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div style={S.partyStyles.rightColumn} className='lyric-mask'>
                {lyricsData?.type === 'synced' ? (
                  <div className='sync-container no-scrollbar'>
                    {lyricsData.lines.map((line, i) => (
                      <div
                        key={i}
                        ref={el => {
                          lyricLineRefs.current[i] = el;
                        }}
                        className={`lyric-line ${i === activeLyricIndex ? 'active' : ''}`}
                        onClick={() => {
                          mediaPlayerService.media_seek({
                            target: { entity_id: selectedEntity as string },
                            serviceData: { seek_position: line.time },
                          });
                        }}
                      >
                        {line.text}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='plain-lyrics-container no-scrollbar'>
                    <div className='plain-lyrics-text'>{lyricsData?.text}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : isHome ? (
          <>
            <div style={S.listStyles.queueHeader}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: S.THEME.textSub }}>QUEUE</span>
              {queueItems.length > 0 && (
                <span
                  onClick={() => mediaPlayerService.clear_playlist({ target: { entity_id: selectedEntity as string } })}
                  style={{ color: S.THEME.accent, fontSize: '0.65rem', fontWeight: 700, cursor: 'pointer' }}
                >
                  CLEAR
                </span>
              )}
            </div>
            {queueItems.length > 0 ? (
              queueItems.map((item, i) => (
                <div key={item.queue_item_id || i} style={S.listStyles.queueItem(i === 0)}>
                  {item.media_image && (
                    <img src={item.media_image} alt='' style={{ width: '32px', height: '32px', borderRadius: '4px', objectFit: 'cover' }} />
                  )}
                  <div style={S.listStyles.itemInfo}>
                    <div style={S.listStyles.itemTitle(i === 0)}>{item.media_title}</div>
                    <div style={S.listStyles.itemSubtitle}>{item.media_artist}</div>
                  </div>
                  <Icon
                    icon='mdi:close'
                    onClick={() => handleRemoveQueueItem(item.queue_item_id)}
                    style={{ position: 'absolute', right: '8px', fontSize: '1rem', color: S.THEME.textSub, cursor: 'pointer' }}
                  />
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '20px', fontSize: '0.8rem', color: S.THEME.textSub }}>Queue Empty</div>
            )}
          </>
        ) : (
          displayedResults.map((item, i) => (
            <div key={`${item.uri}-${i}`} style={S.listStyles.resultItem(expandedItemUri === item.uri)}>
              <div style={S.listStyles.resultHeader} onClick={() => setExpandedItemUri(expandedItemUri === item.uri ? null : item.uri)}>
                <div style={S.playerStyles.imageBox}>
                  {(() => {
                    const imgSrc = item.image_url || item.metadata?.images?.[0]?.url || item.metadata?.images?.[0]?.path;
                    return imgSrc ? <img src={imgSrc} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='' /> : null;
                  })()}
                </div>
                <div style={S.listStyles.itemInfo}>
                  <div style={S.listStyles.itemTitle(false)}>{item.name}</div>
                  <div style={{ fontSize: '0.65rem', color: S.THEME.textSub, textTransform: 'uppercase' }}>{item.media_type}</div>
                </div>
              </div>
              {expandedItemUri === item.uri && (
                <div style={S.listStyles.resultActions}>
                  <button
                    onClick={() => performAction(item, 'replace')}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '4px',
                      background: S.THEME.accent,
                      color: '#000',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    PLAY
                  </button>
                  <button
                    onClick={() => performAction(item, 'next')}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '4px',
                      background: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    NEXT
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </main>

      {/* SIDEBAR */}
      {!showPartyMode && (
        <aside style={S.layoutStyles.sidebar} className='no-scrollbar'>
          <SpeakerCard
            entityId='media_player.mass_living_room_speaker'
            isTarget={selectedEntity === 'media_player.mass_living_room_speaker'}
            onSelect={() => setSelectedEntity('media_player.mass_living_room_speaker')}
          />
          <SpeakerCard
            entityId='media_player.mass_office_speaker'
            isTarget={selectedEntity === 'media_player.mass_office_speaker'}
            onSelect={() => setSelectedEntity('media_player.mass_office_speaker')}
          />
          <SpeakerCard
            entityId='media_player.mass_bedroom_speaker'
            isTarget={selectedEntity === 'media_player.mass_bedroom_speaker'}
            onSelect={() => setSelectedEntity('media_player.mass_bedroom_speaker')}
          />
        </aside>
      )}

      {/* KEYBOARD */}
      {showKeyboard && !showPartyMode && (
        <div style={S.layoutStyles.keyboard}>
          <Keyboard
            keyboardRef={r => (keyboardRef.current = r)}
            onChange={input => setQuery(input)}
            onKeyPress={b => b === '{enter}' && setShowKeyboard(false)}
            layout={{ default: ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m {backspace}', '{space} {enter}'] }}
            display={{ '{backspace}': '⌫', '{enter}': 'SEARCH', '{space}': ' ' }}
            buttonTheme={[{ class: 'hg-enter-btn', buttons: '{enter}' }]}
          />
        </div>
      )}

      {/* PLAYER */}
      <div style={S.playerStyles.container}>
        {activePlayer ? (
          <>
            <div style={S.playerStyles.imageBox}>
              {activePlayer.attributes.entity_picture && (
                <img src={activePlayer.attributes.entity_picture} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='' />
              )}
            </div>
            <div style={S.playerStyles.infoBox}>
              <div style={S.listStyles.itemTitle(false)}>{activePlayer.attributes.media_title || 'Idle'}</div>
              <div style={S.listStyles.itemSubtitle}>{activePlayer.attributes.media_artist || activePlayer.state}</div>
            </div>
            <div style={S.playerStyles.controlsBox}>
              <Icon
                icon='mdi:skip-previous'
                style={{ fontSize: '1.6rem', color: S.THEME.textSub, cursor: 'pointer' }}
                onClick={() => mediaPlayerService.media_previous_track({ target: { entity_id: selectedEntity as string } })}
              />
              <div
                onClick={() => mediaPlayerService.media_play_pause({ target: { entity_id: selectedEntity as string } })}
                style={S.playerStyles.playBtn}
              >
                <Icon icon={activePlayer.state === 'playing' ? 'mdi:pause' : 'mdi:play'} style={{ fontSize: '1.8rem', color: '#000' }} />
              </div>
              <Icon
                icon='mdi:skip-next'
                style={{ fontSize: '1.6rem', color: S.THEME.textSub, cursor: 'pointer' }}
                onClick={() => mediaPlayerService.media_next_track({ target: { entity_id: selectedEntity as string } })}
              />
            </div>
            <div style={S.playerStyles.volumeBox}>
              <input
                type='range'
                min='0'
                max='1'
                step='0.01'
                value={activePlayer.attributes.volume_level || 0}
                onChange={e =>
                  mediaPlayerService.volume_set({
                    target: { entity_id: selectedEntity as string },
                    serviceData: { volume_level: parseFloat(e.target.value) },
                  })
                }
                style={{ width: '100%', accentColor: S.THEME.accent }}
              />
            </div>
          </>
        ) : (
          <div style={{ width: '100%', textAlign: 'center', color: S.THEME.textSub }}>Offline</div>
        )}
      </div>
    </div>
  );
}
