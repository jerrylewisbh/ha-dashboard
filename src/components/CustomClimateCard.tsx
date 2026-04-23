import { useEntity } from '@hakit/core';
import { Icon } from '@iconify/react';
import * as styles from '../styles/MainDashboard.styles';

interface CustomClimateCardProps {
  onClick: () => void;
}

export const CustomClimateCard = ({ onClick }: CustomClimateCardProps) => {
  const climate = useEntity('climate.nest_thermostat');
  const currentTemp = climate.attributes.current_temperature;
  const targetTemp = climate.attributes.temperature;
  const mode = climate.state;

  const setMode = (e: React.MouseEvent, newMode: string) => {
    e.stopPropagation(); // ✋ This stops the popup from opening when clicking buttons
    climate.service.setHvacMode({ serviceData: { hvac_mode: newMode } });
  };

  return (
    <div onClick={onClick} className='glass-card' style={styles.climateContainerStyle}>
      <div style={styles.climateHeaderStyle}>
        <div style={styles.climateIconWrapperStyle}>
          <Icon icon='mdi:nest-thermostat' style={{ fontSize: '1.8rem', color: '#fff' }} />
        </div>
        <div>
          <div style={styles.climateTitleStyle}>Nest Thermostat</div>

          {/* UPDATED: Split the values into a highly readable flex row */}
          <div style={styles.climateStatusContainerStyle}>
            <span style={styles.climateCurrentValueStyle}>{currentTemp}°</span>
            <span style={styles.climateTargetLabelStyle}>Target</span>
            <span style={styles.climateTargetValueStyle}>{targetTemp}°</span>
          </div>
        </div>
      </div>

      <div style={styles.climateControlRowStyle}>
        {['off', 'heat', 'cool', 'heat_cool'].map(m => {
          const isActive = mode === m;
          const icons: Record<string, string> = { off: 'mdi:power', heat: 'mdi:fire', cool: 'mdi:snowflake', heat_cool: 'mdi:autorenew' };
          const colors: Record<string, string> = { off: '#fff', heat: '#ff5722', cool: '#03a9f4', heat_cool: '#4caf50' };

          return (
            <div key={m} onClick={e => setMode(e, m)} style={styles.getClimateButtonStyle(isActive, colors[m])}>
              <Icon icon={icons[m]} style={{ fontSize: '1.2rem' }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
