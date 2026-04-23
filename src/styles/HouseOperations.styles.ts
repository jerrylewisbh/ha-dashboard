import React from 'react';

export const containerStyle: React.CSSProperties = {
  padding: '10px 12px', // 💥 Shaved pixels off the outer edge so the inside has more room
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // 💥 Distributes the elements perfectly top-to-bottom
  boxSizing: 'border-box',
  width: '100%',
  height: '100%', // 💥 Forces it to respect the master grid height
  minHeight: '180px',
};

// --- GARBAGE ---
export const garbageRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: '6px', // 💥 Reduced from 8px so the right pill doesn't get pushed out
  width: '100%',
};

export const getGarbagePillStyle = (color: string, isUrgent: boolean): React.CSSProperties => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  padding: '6px 4px', // 💥 Reduced horizontal padding to prevent right-edge clipping
  borderRadius: '12px',
  whiteSpace: 'nowrap',
  minWidth: 0, // 💥 CRITICAL: Prevents flex items from busting out of their container
  backgroundColor: isUrgent ? `${color}25` : 'rgba(0, 0, 0, 0.25)',
  border: isUrgent ? `1px solid ${color}50` : '1px solid rgba(255, 255, 255, 0.02)',
  boxShadow: isUrgent ? `0 0 12px ${color}20` : 'none',
});

// --- DIVIDER ---
export const dividerStyle: React.CSSProperties = {
  height: '1px',
  backgroundColor: 'rgba(255,255,255,0.06)',
  margin: '0', // 💥 Removed margin completely to save vertical space
};

// --- UTILITIES ---
export const sectionTitleStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  fontWeight: 800,
  color: 'var(--ha-secondary-text-color, #9e9e9e)',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  marginBottom: '4px', // 💥 Tightened
};

export const utilitiesRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '6px', // 💥 Tightened
};

export const utilityItemStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  padding: '8px 2px', // 💥 Shaved vertical padding to pull the divider up
  borderRadius: '12px',
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  border: '1px solid rgba(255, 255, 255, 0.02)',
  boxShadow: 'none',
};

export const utilityValueStyle: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 800,
  color: '#ffffff',
  marginTop: '2px',
};

export const utilityUnitStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  color: 'var(--ha-secondary-text-color, #9e9e9e)',
  fontWeight: 600,
  marginLeft: '2px',
};
