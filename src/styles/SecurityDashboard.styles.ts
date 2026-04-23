import React from 'react';

export const THEME = {
  bg: 'transparent',
  card: 'rgba(0, 0, 0, 0.25)',
  border: 'rgba(255, 255, 255, 0.03)',
  text: '#ffffff',
  header: 'rgba(255, 255, 255, 0.4)',
  muted: 'rgba(255, 255, 255, 0.4)',
  accent: '#03a9f4',
};

export const dashboardWrapperStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundColor: THEME.bg,
  color: THEME.text,
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  boxSizing: 'border-box',
};

export const headerWrapperStyle: React.CSSProperties = {
  marginBottom: '0.5rem',
  flexShrink: 0,
};

export const perimeterStatusStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  fontWeight: 900,
  color: THEME.accent,
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
};

export const mainTitleStyle: React.CSSProperties = {
  fontSize: '1.6rem',
  fontWeight: 900,
  color: '#ffffff',
  textTransform: 'uppercase',
  lineHeight: '1',
};

export const macroLayoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  flex: 1,
  minHeight: 0,
  width: '100%',
  overflow: 'hidden',
  boxSizing: 'border-box',
};

export const cameraGridStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  display: 'grid',
  // CRITICAL FIX: minmax(0, 1fr) stops the Hakit video players from blowing out the grid
  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
  gridTemplateRows: 'minmax(0, 1fr) minmax(0, 1fr)',
  gap: '8px',
  height: '100%',
};

export const cameraWrapperStyle: React.CSSProperties = {
  position: 'relative',
  height: '100%',
  width: '100%',
  minWidth: 0,
  minHeight: 0,
  cursor: 'zoom-in',
  borderRadius: '24px',
  overflow: 'hidden', // Keeps the camera safely inside its cell
  border: `1px solid ${THEME.border}`,
};

export const cameraCardStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  border: 'none',
};

export const clickCatcherStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,
};

export const controlsColumnStyle: React.CSSProperties = {
  width: '280px',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minHeight: 0,
  gap: '8px',
  position: 'relative',
  zIndex: 20, // Keeps the controls above any rogue grid elements
};

export const scrollAreaStyle: React.CSSProperties = {
  flex: 1,
  overflowY: 'auto',
  overflowX: 'hidden',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  minHeight: 0,
  paddingBottom: '12px',
};

export const entitiesCardStyle: React.CSSProperties = {
  background: THEME.card,
  border: `1px solid ${THEME.border}`,
  borderRadius: '24px',
  boxShadow: 'none',
  padding: '4px 0px',
  boxSizing: 'border-box',
  overflow: 'hidden',
  minWidth: '100%',
};

export const internalHeaderStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  fontWeight: 900,
  color: THEME.header,
  textTransform: 'uppercase',
  padding: '8px 16px 2px 16px',
  letterSpacing: '1px',
};

export const dividerStyle: React.CSSProperties = {
  height: '1px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  margin: '4px 16px',
};

export const compactRowProps = {
  style: {
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '2px',
    paddingBottom: '2px',
    minHeight: '38px',
    boxSizing: 'border-box' as const,
    backgroundColor: 'transparent',
    border: 'none',
  },
};

export const alarmoPillStyle = (state: string): React.CSSProperties => {
  const isTriggered = state === 'triggered';
  const isArming = state === 'arming' || state === 'pending';

  let bgColor = 'rgba(255, 255, 255, 0.05)';
  let borderColor = THEME.border;
  let shadow = 'none';

  if (isTriggered) {
    bgColor = '#ff4444'; // Red
    borderColor = '#fff';
    shadow = '0 0 20px rgba(255, 68, 68, 0.4)';
  } else if (isArming) {
    bgColor = 'rgba(255, 193, 7, 0.15)'; // Amber
    borderColor = 'rgba(255, 193, 7, 0.5)';
    shadow = '0 0 15px rgba(255, 193, 7, 0.2)';
  }

  return {
    padding: '12px 16px',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '12px',
    backgroundColor: bgColor,
    border: borderColor,
    boxShadow: shadow,
    animation: isTriggered || isArming ? 'pulse 1s infinite' : 'none',
    transition: 'all 0.3s ease',
    flexShrink: 0,
    width: '100%',
    boxSizing: 'border-box',
  };
};

export const alarmoIconStyle: React.CSSProperties = {
  fontSize: '1.5rem',
};

export const alarmoTextStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  color: '#fff',
};

// --- MODAL STYLES ---
export const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  animation: 'fadeIn 0.2s ease-out',
};

export const modalContentStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '1200px',
  aspectRatio: '16/9',
  backgroundColor: '#000',
  borderRadius: '24px',
  position: 'relative',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
  border: `1px solid rgba(255, 255, 255, 0.1)`,
  overflow: 'hidden',
  display: 'flex',
};

export const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '16px',
  right: '16px',
  width: '44px',
  height: '44px',
  borderRadius: '22px',
  backgroundColor: 'rgba(0,0,0,0.6)',
  border: '1px solid rgba(255,255,255,0.2)',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 10000,
  backdropFilter: 'blur(4px)',
  transition: 'all 0.2s ease',
};

// --- ALARM MODAL STYLES ---
export const alarmModalContentStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '420px', // Nice and compact
  backgroundColor: 'rgba(20, 22, 28, 0.95)', // Deep graphite glass
  borderRadius: '32px',
  padding: '2rem',
  position: 'relative',
  boxShadow: '0 40px 60px -15px rgba(0, 0, 0, 0.8)',
  border: `1px solid rgba(255, 255, 255, 0.1)`,
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

export const alarmModalHeaderStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  fontWeight: 900,
  color: '#ffffff',
  textTransform: 'uppercase',
  textAlign: 'center',
  marginBottom: '8px',
};

export const alarmButtonStyle = (type: 'arm' | 'disarm'): React.CSSProperties => ({
  padding: '18px',
  borderRadius: '20px',
  backgroundColor: type === 'arm' ? 'rgba(3, 169, 244, 0.1)' : 'rgba(255, 68, 68, 0.1)',
  color: type === 'arm' ? '#03a9f4' : '#ff4444',
  border: `1px solid ${type === 'arm' ? 'rgba(3, 169, 244, 0.3)' : 'rgba(255, 68, 68, 0.3)'}`,
  fontSize: '1rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  transition: 'all 0.2s ease',
});
