import { useEntity } from '@hakit/core';
import { Icon } from '@iconify/react';
import * as styles from '../styles/MainDashboard.styles';
import { CelestialArch } from './CelestialArch.tsx';

interface Flight {
  id: string;
  callsign: string;
  from: string;
  to: string;
  model: string; // Added model to the interface
}

type BasicSensor = { state: string };

export const CustomEnvironmentCard = ({ onClick }: { onClick: () => void }) => {
  const weather = useEntity('weather.openweathermap');
  const uv = useEntity('sensor.calgary_uv_index');
  const pressure = useEntity('sensor.calgary_barometric_pressure');
  const feelsLike = useEntity('sensor.openweathermap_apparent_temperature');

  const flightSensor = useEntity('sensor.current_flights_overhead');
  const activeFlights = (flightSensor.attributes.flights as Flight[]) || [];

  const zones = [
    {
      label: 'Outdoor',
      t: useEntity('sensor.indoor_outdoor_meter_6287_temperature' as never) as unknown as BasicSensor,
      h: useEntity('sensor.indoor_outdoor_meter_6287_humidity' as never) as unknown as BasicSensor,
    },
    {
      label: 'Indoor',
      t: useEntity('sensor.indoor_outdoor_meter_0d29_temperature' as never) as unknown as BasicSensor,
      h: useEntity('sensor.indoor_outdoor_meter_0d29_humidity' as never) as unknown as BasicSensor,
    },
    {
      label: 'Garage',
      t: useEntity('sensor.garage_meter_temperature' as never) as unknown as BasicSensor,
      h: useEntity('sensor.garage_meter_humidity' as never) as unknown as BasicSensor,
    },
    {
      label: 'Basement',
      t: useEntity('sensor.indoor_outdoor_meter_4f23_temperature' as never) as unknown as BasicSensor,
      h: useEntity('sensor.indoor_outdoor_meter_4f23_humidity' as never) as unknown as BasicSensor,
    },
  ];

  const getWeatherIcon = (state: string) => {
    const s = (state || '').toLowerCase();
    if (s.includes('cloudy') || s.includes('partly')) return 'mdi:weather-partly-cloudy';
    if (s.includes('rain') || s.includes('pour')) return 'mdi:weather-pouring';
    if (s.includes('snow')) return 'mdi:weather-snowy';
    return 'mdi:white-balance-sunny';
  };

  return (
    <div
      onClick={onClick}
      style={{ ...styles.envCardContainerStyle, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
      className='glass-card'
    >
      <style>
        {`
          @keyframes ticker {
            0% { left: 100%; transform: translateX(0); }
            100% { left: 0; transform: translateX(-100%); }
          }
        `}
      </style>

      {/* 1. FLIGHT TICKER WITH MASK FADE */}
      <div
        style={{
          position: 'absolute',
          top: '6px',
          left: 0,
          width: '100%',
          height: '16px',
          pointerEvents: 'none',
          zIndex: 10,
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        {activeFlights.length > 0 && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
              whiteSpace: 'nowrap',
              animation: 'ticker 20s linear infinite',
            }}
          >
            {activeFlights.map(flight => (
              <div key={flight.id} style={{ display: 'flex', alignItems: 'center' }}>
                <Icon icon='mdi:airplane' style={{ fontSize: '11px', transform: 'rotate(90deg)', color: 'rgba(255, 255, 255, 0.6)' }} />
                <span style={{ marginLeft: '6px', fontSize: '9px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)' }}>
                  {flight.callsign} ({flight.model}) {/* Added Model Here */}
                </span>
                <span style={{ marginLeft: '4px', fontSize: '9px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  {flight.from} ➔ {flight.to}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2. TOP ROW */}
      <div style={styles.envTopRowStyle}>
        <div style={styles.envWeatherGroupStyle}>
          <Icon
            icon={getWeatherIcon(weather.state)}
            style={{ fontSize: '48px', color: weather.state === 'sunny' ? '#ffeb3b' : '#03a9f4' }}
          />
          <div>
            <div style={styles.envTempStyle}>{Math.round(Number(weather.attributes.temperature))}°C</div>
            <div style={styles.envStateStyle}>{weather.state}</div>
          </div>
        </div>

        <CelestialArch />

        <div style={styles.envStatsContainerStyle}>
          <div style={styles.envStatRowStyle}>
            <Icon icon='mdi:sun-wireless' style={styles.envSmallIconStyle} />
            UV: <span style={styles.envStatValueStyle}>{uv.state}</span>
          </div>
          <div style={styles.envStatRowStyle}>
            <Icon icon='mdi:gauge' style={styles.envSmallIconStyle} />
            Pres: <span style={styles.envStatValueStyle}>{pressure.state}</span>
          </div>
          <div style={styles.envStatRowStyle}>
            <Icon icon='mdi:thermometer-lines' style={styles.envSmallIconStyle} />
            Feels: <span style={styles.envStatValueStyle}>{feelsLike.state}°</span>
          </div>
        </div>
      </div>

      {/* 3. DIVIDER */}
      <div style={styles.envDividerStyle} />

      {/* 4. BOTTOM ROW */}
      <div style={{ ...styles.envBottomGridStyle, flexGrow: 1 }}>
        {zones.map(zone => (
          <div key={zone.label} style={styles.envZoneItemStyle}>
            <span style={styles.envZoneLabelStyle}>{zone.label}</span>
            <span style={styles.envZoneValueStyle}>
              {zone.t.state || '--'}° <span style={styles.envZoneHumidityStyle}>{zone.h.state || '--'}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
