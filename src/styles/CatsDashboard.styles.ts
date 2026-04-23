import React from 'react';

// --- MAIN LAYOUT ---
export const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  padding: '1rem 1.5rem', // Reduced top/bottom padding
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflowY: 'auto', // Keep just in case, but it shouldn't trigger now
};

// --- HEADER ---
export const headerContainerStyle: React.CSSProperties = {
  marginBottom: '0.5rem', // Reduced margin
  flexShrink: 0,
};

export const headerSubtitleStyle: React.CSSProperties = {
  fontSize: '0.7rem', // Slightly smaller
  fontWeight: 800,
  color: '#03a9f4',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

export const headerTitleStyle: React.CSSProperties = {
  fontSize: '1.6rem', // Scaled down from 1.8rem
  fontWeight: 900,
  color: '#ffffff',
  textTransform: 'uppercase',
  lineHeight: '1.1',
};

// --- GRID & COLUMNS ---
export const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
  flex: 1,
  minHeight: 0, // Allows content to compress correctly
};

export const columnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px', // Reduced gap between items in the column
  padding: '0', // Slightly tighter inner padding
  boxSizing: 'border-box',
};

export const columnTitleStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  fontWeight: 800,
  color: 'rgba(255,255,255,0.6)',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  marginBottom: '0.2rem', // Tighter spacing under the title
};

// --- CAMERAS ---
export const cameraWrapperStyle: React.CSSProperties = {
  width: '100%',
  aspectRatio: '16/9',
  borderRadius: '12px', // Slightly tighter corners
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  flexShrink: 0, // Prevents the camera from getting squished
};

export const cameraStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

// --- DATA ROWS (Compacted) ---
export const dataGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

export const dataRowWrapperStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5px 10px', // Tighter top/bottom padding on the rows
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  border: '1px solid rgba(255, 255, 255, 0.02)',
  borderRadius: '10px',
  boxSizing: 'border-box',
};

export const dataRowLeftStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px', // Closer icons
};

export const iconStyle: React.CSSProperties = {
  fontSize: '1.2rem', // Icons look better slightly larger than emojis
  display: 'inline-block',
  verticalAlign: 'middle',
};

export const nameStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: '#b0bec5',
  fontWeight: 600,
};

export const valueStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  fontWeight: 800,
  color: '#fff',
};

// --- SLIDER SPECIFIC ---
export const sliderWrapperStyle: React.CSSProperties = {
  ...dataRowWrapperStyle,
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '4px',
};

export const sliderHeaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const sliderInputStyle: React.CSSProperties = {
  width: '100%',
  margin: 0,
  accentColor: '#03a9f4',
  cursor: 'pointer',
};

// --- BUTTONS ---
export const buttonGroupStyle: React.CSSProperties = {
  display: 'flex',
  gap: '8px',
  marginTop: 'auto', // Pushes buttons to the bottom naturally
};

export const buttonFlex1Style: React.CSSProperties = {
  flex: 1,
};

export const buttonTitleStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  fontWeight: 700,
  color: '#fff',
};

export const getActionButtonStyle = (color: string): React.CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  backgroundColor: color,
  borderRadius: '10px',
  height: '36px', // Shaved 4px off the button height
  cursor: 'pointer',
  width: '100%',
  boxSizing: 'border-box',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'opacity 0.2s',
});

// --- MISC ---
export const catNameStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: 'rgba(255,255,255,0.7)', // Softened the label color
  fontWeight: 800,
  textTransform: 'uppercase',
  paddingLeft: '4px',
  display: 'flex',
  alignItems: 'center',
};

export const dividerStyle: React.CSSProperties = {
  height: '1px',
  background: 'rgba(255,255,255,0.05)',
  margin: '4px 0', // Reduced divider spacing
};

export const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  backdropFilter: 'blur(10px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999,
};

export const modalContentStyle: React.CSSProperties = {
  position: 'relative',
  width: '90%',
  maxWidth: '1000px',
  aspectRatio: '16/9',
  backgroundColor: '#1c1c1e',
  borderRadius: '24px',
  boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
};

export const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-16px',
  right: '-16px',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#f44336',
  color: '#ffffff',
  border: '2px solid #2c2c2e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 1000,
  boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
};
