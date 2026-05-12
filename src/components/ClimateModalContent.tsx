import { useState } from 'react';
import { useEntity } from '@hakit/core';
import { Icon } from '@iconify/react';
import * as styles from '../styles/ClimateModal.styles';

export const ClimateModalContent = () => {
  const climate = useEntity('climate.nest_thermostat');
  const { current_temperature, temperature, target_temp_low, target_temp_high, hvac_action } = climate.attributes;
  const mode = climate.state;

  // 'both' | 'low' | 'high'
  const [activeTarget, setActiveTarget] = useState<'both' | 'low' | 'high'>('both');

  // Logic to see if it's currently active
  const isHeating = hvac_action === 'heating' || mode === 'heat';
  const isCooling = hvac_action === 'cooling' || mode === 'cool';

  const adjustTemp = (amount: number) => {
    if (mode === 'heat_cool') {
      const newLow = (target_temp_low ?? current_temperature) + (activeTarget !== 'high' ? amount : 0);
      const newHigh = (target_temp_high ?? current_temperature) + (activeTarget !== 'low' ? amount : 0);

      climate.service.setTemperature({
        serviceData: {
          target_temp_low: newLow,
          target_temp_high: newHigh,
        },
      });
    } else {
      const newTemp = (Number(temperature) || Number(current_temperature)) + amount;
      climate.service.setTemperature({
        serviceData: { temperature: newTemp },
      });
    }
  };

  const toggleTarget = (target: 'low' | 'high') => {
    setActiveTarget(prev => (prev === target ? 'both' : target));
  };

  return (
    <div style={styles.modalInnerWrapperStyle}>
      <div style={styles.targetTempLabelStyle}>{mode === 'heat_cool' ? 'Target Range' : 'Target Temperature'}</div>

      {/* BIG HERO TEMPERATURE */}
      <div style={styles.mainTempStyle}>
        {mode === 'heat_cool' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span
              onClick={() => toggleTarget('low')}
              style={{
                color: activeTarget === 'high' ? 'rgba(255, 87, 34, 0.3)' : '#ff5722',
                cursor: 'pointer',
                transition: 'color 0.2s, opacity 0.2s',
                opacity: activeTarget === 'high' ? 0.5 : 1,
              }}
            >
              {target_temp_low?.toFixed(1)}°
            </span>
            <span style={{ opacity: 0.2, color: '#fff' }}>|</span>
            <span
              onClick={() => toggleTarget('high')}
              style={{
                color: activeTarget === 'low' ? 'rgba(3, 169, 244, 0.3)' : '#03a9f4',
                cursor: 'pointer',
                transition: 'color 0.2s, opacity 0.2s',
                opacity: activeTarget === 'low' ? 0.5 : 1,
              }}
            >
              {target_temp_high?.toFixed(1)}°
            </span>
          </div>
        ) : (
          <>
            {Number(temperature).toFixed(1)}
            <span style={{ fontSize: '2rem', opacity: 0.5 }}>°</span>
          </>
        )}
      </div>

      <div style={styles.currentTempStyle}>
        <Icon icon='mdi:thermometer' style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.3)' }} />
        Current: {current_temperature}°
      </div>

      {/* ADJUSTMENT CONTROLS */}
      <div style={styles.controlButtonGroupStyle}>
        <div style={styles.roundButtonStyle} onClick={() => adjustTemp(-0.5)}>
          <Icon icon='mdi:minus' style={{ fontSize: '1.8rem' }} />
        </div>

        {/* CENTER STATUS ICON (Glows based on state) */}
        <div
          style={{
            ...styles.roundButtonStyle,
            width: '70px',
            height: '70px',
            backgroundColor: isHeating ? 'rgba(255, 87, 34, 0.2)' : isCooling ? 'rgba(3, 169, 244, 0.2)' : 'rgba(0,0,0,0.25)',
            border: isHeating ? '1px solid #ff572280' : isCooling ? '1px solid #03a9f480' : '1px solid rgba(255,255,255,0.05)',
            boxShadow: isHeating ? '0 0 20px rgba(255, 87, 34, 0.2)' : isCooling ? '0 0 20px rgba(3, 169, 244, 0.2)' : 'none',
          }}
        >
          <Icon
            icon={isHeating ? 'mdi:fire' : isCooling ? 'mdi:snowflake' : 'mdi:power'}
            style={{ fontSize: '2.2rem', color: isHeating ? '#ff5722' : isCooling ? '#03a9f4' : '#fff' }}
          />
        </div>

        <div style={styles.roundButtonStyle} onClick={() => adjustTemp(0.5)}>
          <Icon icon='mdi:plus' style={{ fontSize: '1.8rem' }} />
        </div>
      </div>
    </div>
  );
};
