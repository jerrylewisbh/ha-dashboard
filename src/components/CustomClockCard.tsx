import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import * as styles from '../styles/MainDashboard.styles';

export const CustomClockCard = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
  const dateStr = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className='glass-card' style={styles.clockContainerStyle}>
      <Icon icon='mdi:calendar-clock' style={styles.clockIconStyle} />
      <div>
        <div style={styles.clockTimeStyle}>
          {timeStr.split(' ')[0]} <span style={styles.clockAmPmStyle}>{timeStr.split(' ')[1]}</span>
        </div>
        <div style={styles.clockDateStyle}>{dateStr}</div>
      </div>
    </div>
  );
};
