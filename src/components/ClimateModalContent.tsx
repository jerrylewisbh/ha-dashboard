import { useEntity } from '@hakit/core';
import { Icon } from '@iconify/react';
import * as styles from '../styles/ClimateModal.styles';

export const ClimateModalContent = () => {
  const climate = useEntity('climate.nest_thermostat');
  const { current_temperature, temperature, hvac_action } = climate.attributes;

  // Logic to see if it's currently active
  const isHeating = hvac_action === 'heating' || climate.state === 'heat';
  const isCooling = hvac_action === 'cooling' || climate.state === 'cool';

  const adjustTemp = (amount: number) => {
    const newTemp = (Number(temperature) || Number(current_temperature)) + amount;
    climate.service.setTemperature({
      serviceData: { temperature: newTemp },
    });
  };

  return (
    <div style={styles.modalInnerWrapperStyle}>
      <div style={styles.targetTempLabelStyle}>Target Temperature</div>

      {/* BIG HERO TEMPERATURE */}
      <div style={styles.mainTempStyle}>
        {Number(temperature).toFixed(1)}
        <span style={{ fontSize: '2rem', opacity: 0.5 }}>°</span>
      </div>

      <div style={styles.currentTempStyle}>
        <Icon icon='mdi:thermometer' style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.3)' }} />
        Current: {current_temperature}°C
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
