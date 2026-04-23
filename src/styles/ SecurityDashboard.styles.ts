import React from 'react';

export const THEME = {
  bg: '#000000',
  card: 'rgba(255, 255, 255, 0.05)',
  border: 'rgba(255, 255, 255, 0.1)',
  text: '#ffffff',
  header: 'rgba(255, 255, 255, 0.5)',
};

export const dashboardWrapperStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundColor: THEME.bg,
  color: THEME.text,
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  boxSizing: 'border-box',
};

export const headerWrapperStyle: React.CSSProperties = {
  marginBottom: '16px',
  flexShrink: 0,
};

export const perimeterStatusStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  fontWeight: 800,
  color: THEME.header,
  textTransform: 'uppercase',
};

export const mainTitleStyle: React.CSSProperties = {
  fontSize: '1.4rem',
  fontWeight: 900,
  color: '#ffffff',
  textTransform: 'uppercase',
};

export const macroLayoutStyle: React.CSSProperties = {
  display: 'flex',
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
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gap: '12px',
  height: '100%',
};

export const cameraCardStyle: React.CSSProperties = {
  borderRadius: '16px',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
};

export const controlsColumnStyle: React.CSSProperties = {
  width: '300px',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minHeight: 0,
};

export const accessControlsHeaderStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  fontWeight: 800,
  color: THEME.header,
  textTransform: 'uppercase',
  marginBottom: '4px', // Reduced to 4px here, no longer needs inline override
  paddingLeft: '8px',
};

export const scrollAreaStyle: React.CSSProperties = {
  flex: 1,
  overflowY: 'auto',
  overflowX: 'hidden',
};

export const entitiesCardStyle: React.CSSProperties = {
  background: THEME.card,
  border: `1px solid ${THEME.border}`,
  borderRadius: '16px',
  boxShadow: 'none',
  padding: '2px 0px',
  boxSizing: 'border-box',
  overflow: 'hidden',
  minWidth: '300px',
};

export const internalHeaderStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  fontWeight: 800,
  color: THEME.header,
  textTransform: 'uppercase',
  padding: '8px 16px 2px 16px',
  letterSpacing: '0.5px',
};

export const dividerStyle: React.CSSProperties = {
  height: '1px',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  margin: '4px 16px',
};

export const compactRowProps = {
  style: {
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '0px',
    paddingBottom: '0px',
    minHeight: '38px',
    boxSizing: 'border-box' as const,
  },
};

// --- ALARMO STYLES ---

export const alarmoPillStyle = (isTriggered: boolean): React.CSSProperties => ({
  padding: '6px 12px',
  borderRadius: '12px',
  marginBottom: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  backgroundColor: isTriggered ? '#ff0000' : 'rgba(255, 255, 255, 0.05)',
  border: isTriggered ? '2px solid #fff' : '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: isTriggered ? '0 0 15px rgba(255, 0, 0, 0.6)' : 'none',
  animation: isTriggered ? 'pulse 1s infinite' : 'none',
  transition: 'all 0.3s ease',
  flexShrink: 0,
  width: '100%',
  boxSizing: 'border-box',
});

export const alarmoIconStyle: React.CSSProperties = {
  fontSize: '1rem',
};

export const alarmoTextStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  color: '#fff',
};
