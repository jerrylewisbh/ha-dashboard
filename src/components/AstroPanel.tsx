import { useState } from 'react';
import { useEntity, useHass } from '@hakit/core';
import { Icon } from '@iconify/react';
import { GlassCard, BigMetric } from './MetricUi.tsx';
import * as styles from '../styles/AstroDashboard.styles';

// 1. Made all properties optional (?) to satisfy the compiler
interface AstroWeatherAttributes {
  condition_plain?: string;
  condition_percentage?: number;
  deepsky_forecast_today_plain?: string;
  seeing?: number;
  transparency?: number;
  moon_phase?: number;
  moon_next_dark_night?: string;
  [key: string]: unknown;
}

export function AstroDashboard() {
  const { hassUrl } = useHass();
  const [isNightMode, setIsNightMode] = useState(false);

  const allSkyImage = useEntity('image.indi_allsky_indi_allsky_camera');
  const astroWeather = useEntity('weather.astroweather_backyard');
  const moonAlt = useEntity('sensor.astroweather_backyard_moon_altitude');
  const aurora = useEntity('sensor.indi_allsky_aurora_prediction');
  const cloudSensor = useEntity('sensor.astroweather_backyard_cloud_cover');

  // 2. The "Double Cast" (as unknown as ...) fixes TS2352
  const attrs = astroWeather.attributes as unknown as AstroWeatherAttributes;

  const conditionText = attrs.condition_plain || 'Unknown';
  const conditionPercent = attrs.condition_percentage || 0;

  const THEME = isNightMode ? styles.nightModeTheme : styles.defaultTheme;
  const statusColor = isNightMode ? '#ff4444' : conditionText.toLowerCase().includes('excellent') ? '#4caf50' : '#ffc107';

  // Helper for date formatting
  const nextDarkDate = attrs.moon_next_dark_night
    ? new Date(attrs.moon_next_dark_night).toLocaleDateString('en-CA', { month: 'short', day: 'numeric' })
    : 'N/A';

  return (
    <div style={styles.getContainerStyle(THEME)}>
      <div style={styles.headerContainerStyle}>
        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 800, color: THEME.accent, textTransform: 'uppercase' }}>
            Seeing Quality ({conditionPercent}%)
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 900, color: statusColor, textTransform: 'uppercase', lineHeight: 1 }}>
            {conditionText}
          </div>
        </div>

        <div
          onClick={() => setIsNightMode(!isNightMode)}
          style={{
            backgroundColor: isNightMode ? 'rgba(255, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${THEME.accent}`,
            padding: '8px 16px',
            borderRadius: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Icon icon={isNightMode ? 'mdi:eye-off' : 'mdi:white-balance-sunny'} style={{ color: THEME.accent }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: THEME.accent }}>{isNightMode ? 'NIGHT MODE' : 'DAY MODE'}</span>
        </div>
      </div>

      <div style={styles.mainContentStyle}>
        <div style={{ flex: 1.5, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div
            style={{
              width: '100%',
              aspectRatio: '1/1',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#000',
              border: isNightMode ? '2px solid #ff4444' : '1px solid rgba(255,255,255,0.05)',
              boxShadow: isNightMode ? '0 0 20px rgba(255, 68, 68, 0.1)' : 'none',
            }}
          >
            {allSkyImage.attributes?.entity_picture && (
              <img
                src={`${hassUrl}${allSkyImage.attributes.entity_picture}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: isNightMode ? 'sepia(1) saturate(5) hue-rotate(-50deg)' : 'none',
                }}
                alt='Sky'
              />
            )}
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0 }}>
          <GlassCard title='Atmospheric Forecast' nightMode={isNightMode}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <BigMetric
                icon='mdi:weather-night'
                label='Tonight'
                value={attrs.deepsky_forecast_today_plain || 'Fair'}
                color='#9c27b0'
                nightMode={isNightMode}
              />
              <BigMetric icon='mdi:cloud-percent' label='Clouds' value={`${cloudSensor.state}%`} color='#8e8e93' nightMode={isNightMode} />
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <BigMetric icon='mdi:eye-outline' label='Seeing' value={attrs.seeing || '--'} color='#4caf50' nightMode={isNightMode} />
              <BigMetric icon='mdi:blur' label='Transp.' value={attrs.transparency || '--'} color='#ffc107' nightMode={isNightMode} />
            </div>
          </GlassCard>

          <GlassCard title='Environment & Moon' nightMode={isNightMode}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <BigMetric
                icon='mdi:moon-waning-gibbous'
                label='Phase'
                value={`${attrs.moon_phase || 0}%`}
                color='#03a9f4'
                nightMode={isNightMode}
              />
              <BigMetric
                icon='mdi:format-vertical-align-top'
                label='Altitude'
                value={`${Math.round(Number(moonAlt.state))}°`}
                color='#ff9800'
                nightMode={isNightMode}
              />
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <BigMetric icon='mdi:aurora' label='Aurora' value={`${aurora.state}%`} color='#4caf50' nightMode={isNightMode} />
              <BigMetric icon='mdi:calendar-star' label='Next Dark' value={nextDarkDate} color='#9c27b0' nightMode={isNightMode} />
            </div>
          </GlassCard>

          {Number(cloudSensor.state) < 20 && (
            <div
              style={{
                backgroundColor: isNightMode ? 'rgba(255, 68, 68, 0.1)' : 'rgba(76, 175, 80, 0.1)',
                padding: '12px',
                borderRadius: '12px',
                border: `1px dashed ${THEME.accent}`,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Icon icon='mdi:telescope' style={{ color: THEME.accent, fontSize: '1.5rem' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: isNightMode ? '#ff4444' : '#fff' }}>
                CLEAR SKIES DETECTED. PREPARE MOUNT.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
