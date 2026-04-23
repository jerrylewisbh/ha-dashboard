import { useEntity } from '@hakit/core';
import { Icon } from '@iconify/react';
import * as styles from '../styles/HouseOperations.styles';

type BasicSensor = { state: string | number };

interface HouseOperationsWidgetProps {
  onClick: () => void;
}

const formatUtility = (val: string | number | undefined, decimals: number = 1) => {
  if (!val || val === 'unknown' || val === 'unavailable') return '--';
  const num = parseFloat(String(val));
  return isNaN(num) ? '--' : num.toFixed(decimals);
};

export function HouseOperationsWidget({ onClick }: HouseOperationsWidgetProps) {
  // --- GARBAGE LOGIC ---
  const blackDays = useEntity('sensor.days_to_black_cart_2');
  const blueDays = useEntity('sensor.days_to_blue_cart_2');
  const greenDays = useEntity('sensor.days_to_green_cart_2');

  const numBlack = !isNaN(Number(blackDays.state)) ? Number(blackDays.state) : 999;
  const numBlue = !isNaN(Number(blueDays.state)) ? Number(blueDays.state) : 999;
  const numGreen = !isNaN(Number(greenDays.state)) ? Number(greenDays.state) : 999;

  const allCarts = [
    { name: 'Waste', icon: 'mdi:trash-can', days: numBlack, color: '#9e9e9e' },
    { name: 'Recycle', icon: 'mdi:recycle', days: numBlue, color: '#2196f3' },
    { name: 'Organic', icon: 'mdi:leaf', days: numGreen, color: '#4caf50' },
  ];

  allCarts.sort((a, b) => a.days - b.days);
  const upcoming = allCarts.slice(0, 2);

  // --- UTILITIES LOGIC ---
  const electricity = useEntity('sensor.energy_monitor_energy_today' as never) as unknown as BasicSensor;
  const water = useEntity('sensor.house_water_daily' as never) as unknown as BasicSensor;
  const gas = useEntity('sensor.house_gas_daily' as never) as unknown as BasicSensor;

  // This size stays the same for the top utilities row
  const iconSize = '1.2rem';

  return (
    <div onClick={onClick} style={styles.containerStyle} className='glass-card'>
      {/* UTILITIES SECTION */}
      <div>
        <div style={styles.sectionTitleStyle}>Usage Today</div>
        <div style={styles.utilitiesRowStyle}>
          {/* ELECTRICITY */}
          <div style={styles.utilityItemStyle}>
            <Icon icon='mdi:flash' style={{ fontSize: iconSize, color: '#FFD700' }} />
            <div style={styles.utilityValueStyle}>
              {formatUtility(electricity?.state, 1)}
              <span style={styles.utilityUnitStyle}>kWh</span>
            </div>
          </div>

          {/* WATER */}
          <div style={styles.utilityItemStyle}>
            <Icon icon='mdi:water' style={{ fontSize: iconSize, color: '#00d4ff' }} />
            <div style={styles.utilityValueStyle}>
              {formatUtility(water?.state, 0)}
              <span style={styles.utilityUnitStyle}>L</span>
            </div>
          </div>

          {/* GAS */}
          <div style={styles.utilityItemStyle}>
            <Icon icon='mdi:fire' style={{ fontSize: iconSize, color: '#ff5722' }} />
            <div style={styles.utilityValueStyle}>
              {formatUtility(gas?.state, 2)}
              <span style={styles.utilityUnitStyle}>m³</span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.dividerStyle} />

      {/* GARBAGE SECTION (Horizontal Pills) */}
      <div style={styles.garbageRowStyle}>
        {upcoming.map(cart => {
          const isUrgent = cart.days <= 1;
          const timeText = cart.days === 0 ? 'Today' : cart.days === 1 ? 'Tmrw' : `${cart.days}d`;

          return (
            <div key={cart.name} style={styles.getGarbagePillStyle(cart.color, isUrgent)}>
              <Icon icon={cart.icon} style={{ fontSize: '1.4rem', color: isUrgent ? '#fff' : cart.color }} />
              <span style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 800 }}>
                {cart.name} <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>• {timeText}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
