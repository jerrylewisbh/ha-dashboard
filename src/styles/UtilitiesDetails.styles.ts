import React from 'react';

// --- MAIN LAYOUT ---
export const popupContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // Keep 3 columns
  gap: '0.75rem', // Reduced gap
  width: '100%',
  minWidth: 0, // REMOVED the 800px floor to stop the scroll
  boxSizing: 'border-box',
};

export const columnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem', // Tighter vertical gap
  padding: '0.8rem', // Reduced padding
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  minWidth: 0, // Allows column to shrink
};

// --- HEADERS ---
export const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  marginBottom: '0.2rem',
};

export const headerTitleStyle: React.CSSProperties = {
  fontSize: '1rem', // Scaled down slightly
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: '#fff',
};

// --- DATA ROWS (Recessed Plates) ---
export const dataRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 10px', // Tighter padding
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  border: '1px solid rgba(255, 255, 255, 0.02)',
  borderRadius: '12px',
};

export const labelStyle: React.CSSProperties = {
  fontSize: '0.65rem', // Smaller label
  fontWeight: 800,
  color: 'rgba(255,255,255,0.5)',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

export const valueStyle: React.CSSProperties = {
  fontSize: '0.95rem', // Scaled down from 1.1rem
  fontWeight: 900,
  color: '#fff',
};

export const unitStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  fontWeight: 700,
  color: 'rgba(255,255,255,0.4)',
  marginLeft: '2px',
};

// --- CHARTS ---
export const graphWrapperStyle: React.CSSProperties = {
  height: '140px', // Lowered from 180px to ensure it fits vertically too
  width: '100%',
  marginTop: '0.4rem',
  padding: '8px',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  borderRadius: '14px',
  overflow: 'hidden',
};

export const chartLoadingStyle: React.CSSProperties = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(255,255,255,0.3)',
  fontSize: '0.75rem',
  textAlign: 'center',
};

export const chartLoadingSubStyle: React.CSSProperties = {
  fontSize: '0.6rem',
  marginTop: '2px',
  opacity: 0.7,
};
