import type { CSSProperties } from 'react';

export const THEME = {
  accent: '#00d1ff',
  bgCard: 'rgba(255, 255, 255, 0.02)',
  bgHover: 'rgba(255, 255, 255, 0.06)',
  border: 'rgba(255, 255, 255, 0.08)',
  textMain: '#ffffff',
  textSub: 'rgba(255, 255, 255, 0.45)',
};

export const globalCss = `
  .no-scrollbar::-webkit-scrollbar { display: none; } 
  .hg-theme-default { background-color: rgba(20, 20, 25, 0.98) !important; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; padding: 4px; } 
  .hg-theme-default .hg-button { background: rgba(255,255,255,0.08) !important; color: white !important; height: 32px !important; font-size: 0.85rem; border: none !important; border-radius: 6px !important; } 
  .hg-theme-default .hg-enter-btn { background: #00d1ff !important; color: #000 !important; font-weight: 700; height: 38px !important; }
  .chip { padding: 4px 12px; border-radius: 16px; font-size: 0.75rem; font-weight: 600; cursor: pointer; border: 1px solid transparent; transition: all 0.2s; }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  .spin { animation: spin 1s linear infinite; }
  
  .lyric-mask {
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
    mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
  }
  .sync-container {
    height: 100%; width: 100%; overflow-y: auto; padding: 45vh 40px; 
    display: flex; flex-direction: column; align-items: center; text-align: center;
    -ms-overflow-style: none; scrollbar-width: none; scroll-behavior: smooth;
  }
  .sync-container::-webkit-scrollbar { display: none; }
  
  .lyric-line {
    font-size: 2.2rem; font-weight: 700; color: rgba(255,255,255,0.3); margin: 18px 0; 
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; max-width: 800px;
  }
  .lyric-line.active {
    color: #fff; transform: scale(1.15); text-shadow: 0 0 24px rgba(255,255,255,0.4);
  }
  .plain-lyrics-container {
    height: 100%; width: 100%; overflow-y: auto; padding: 40px;
    display: flex; flex-direction: column; align-items: center;
  }
  .plain-lyrics-text {
    margin: auto 0; font-size: 2rem; font-weight: 700; color: #fff; line-height: 1.5; 
    white-space: pre-wrap; text-align: center; max-width: 800px;
  }
`;

export const layoutStyles = {
  container: (showPartyMode: boolean, showKeyboard: boolean): CSSProperties => ({
    display: 'grid',
    gridTemplateAreas: showPartyMode
      ? '"results results" "player player"'
      : showKeyboard
        ? '"search search" "results sidebar" "keyboard keyboard" "player player"'
        : '"search search" "results sidebar" "player player"',
    gridTemplateRows: showPartyMode ? '1fr 90px' : showKeyboard ? '48px 1fr auto 90px' : '56px 1fr 90px',
    gridTemplateColumns: showPartyMode ? '1fr' : '1fr 200px',
    gap: '12px 16px',
    height: '100%',
    width: '100%',
    padding: '12px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.4s ease',
  }),
  main: { gridArea: 'results', overflowY: 'auto', minHeight: 0, position: 'relative' } as CSSProperties,
  sidebar: { gridArea: 'sidebar', display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto', minHeight: 0 } as CSSProperties,
  keyboard: { gridArea: 'keyboard', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', overflow: 'hidden' } as CSSProperties,
};

export const headerStyles = {
  container: { gridArea: 'search', display: 'flex', gap: '10px' } as CSSProperties,
  partyToggle: (showKeyboard: boolean): CSSProperties => ({
    width: '48px',
    height: showKeyboard ? '40px' : '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: THEME.bgCard,
    borderRadius: '10px',
    border: `1px solid ${THEME.border}`,
    cursor: 'pointer',
  }),
  searchBox: (showKeyboard: boolean): CSSProperties => ({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: '0 14px',
    background: 'rgba(0,0,0,0.4)',
    borderRadius: '10px',
    border: `1px solid ${THEME.border}`,
    height: showKeyboard ? '40px' : '48px',
  }),
  input: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    color: '#fff',
    padding: '0 12px',
    outline: 'none',
    fontSize: '0.9rem',
  } as CSSProperties,
  iconGroup: { display: 'flex', alignItems: 'center', gap: '8px' } as CSSProperties,
};

export const listStyles = {
  tabsContainer: (showKeyboard: boolean): CSSProperties => ({
    display: 'flex',
    gap: '6px',
    paddingBottom: '8px',
    position: 'sticky',
    top: 0,
    background: 'rgba(20, 20, 25, 0.95)',
    zIndex: 10,
    borderBottom: showKeyboard ? 'none' : `1px solid ${THEME.border}`,
    marginBottom: '8px',
  }),
  tab: (isActive: boolean): CSSProperties => ({ background: isActive ? THEME.accent : THEME.bgCard, color: isActive ? '#000' : '#fff' }),
  queueHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px 6px 4px' } as CSSProperties,
  queueItem: (isFirst: boolean): CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px',
    borderRadius: '8px',
    background: isFirst ? 'rgba(0,209,255,0.05)' : THEME.bgCard,
    position: 'relative',
    marginBottom: '6px',
  }),
  itemInfo: { flex: 1, minWidth: 0, paddingRight: '24px' } as CSSProperties,
  itemTitle: (highlight: boolean): CSSProperties => ({
    fontSize: '0.8rem',
    fontWeight: 600,
    color: highlight ? THEME.accent : '#fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
  itemSubtitle: { fontSize: '0.65rem', color: THEME.textSub } as CSSProperties,
  resultItem: (isExpanded: boolean): CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '6px 10px',
    borderRadius: '8px',
    background: isExpanded ? THEME.bgHover : THEME.bgCard,
    marginBottom: '6px',
  }),
  resultHeader: { display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' } as CSSProperties,
  resultActions: {
    display: 'flex',
    gap: '6px',
    marginTop: '8px',
    paddingTop: '8px',
    borderTop: `1px solid ${THEME.border}`,
    justifyContent: 'flex-end',
  } as CSSProperties,
};

export const partyStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
  } as CSSProperties,
  backgroundBlur: (imgUrl?: string): CSSProperties => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: imgUrl ? `url(${imgUrl})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(60px) brightness(0.3)',
    zIndex: 0,
    transform: 'scale(1.2)',
  }),
  contentLayer: { position: 'relative', zIndex: 1, display: 'flex', width: '100%', height: '100%' } as CSSProperties,
  leftColumn: {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    background: 'rgba(0,0,0,0.5)',
    borderRight: `1px solid ${THEME.border}`,
    flexShrink: 0,
    overflowY: 'auto',
  } as CSSProperties,
  headerRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 } as CSSProperties,
  qrContainer: {
    background: '#fff',
    padding: '16px',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    flexShrink: 0,
    alignSelf: 'center',
  } as CSSProperties,
  queueSection: { flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', minHeight: 0 } as CSSProperties,
  queueList: { flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' } as CSSProperties,
  queueItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '10px',
    flexShrink: 0,
  } as CSSProperties,
  rightColumn: { flex: 1, position: 'relative', overflow: 'hidden' } as CSSProperties,
};

export const playerStyles = {
  container: {
    gridArea: 'player',
    background: THEME.bgCard,
    borderRadius: '12px',
    border: `1px solid ${THEME.border}`,
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    gap: '14px',
    overflow: 'hidden',
  } as CSSProperties,
  imageBox: { width: '50px', height: '50px', borderRadius: '6px', background: '#111', overflow: 'hidden', flexShrink: 0 } as CSSProperties,
  infoBox: { flex: 1, minWidth: 0 } as CSSProperties,
  controlsBox: { display: 'flex', alignItems: 'center', gap: '12px' } as CSSProperties,
  playBtn: {
    width: '48px',
    height: '48px',
    borderRadius: '24px',
    background: THEME.accent,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  } as CSSProperties,
  volumeBox: { width: '100px', display: 'flex', alignItems: 'center', gap: '6px' } as CSSProperties,
};

export const sidebarStyles = {
  card: (isTarget: boolean): CSSProperties => ({
    padding: '8px 10px',
    borderRadius: '10px',
    background: isTarget ? 'rgba(0, 209, 255, 0.08)' : THEME.bgCard,
    border: `1px solid ${isTarget ? THEME.accent : THEME.border}`,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }),
};
