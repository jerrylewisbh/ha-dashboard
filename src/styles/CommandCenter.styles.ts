import React from 'react';

// --- THEME ---
export const THEME = {
  bg: 'transparent',
  card: 'rgba(255, 255, 255, 0.05)', // White-based frosted glass
  border: 'rgba(255, 255, 255, 0.08)', // Crisper edge
  text: '#ffffff',
  header: 'rgba(255, 255, 255, 0.5)', // Brighter muted text
  accent: '#03a9f4',
};

// --- LAYOUT ---
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

// --- HEADERS ---
export const headerStyle: React.CSSProperties = {
  marginBottom: '0.75rem',
  flexShrink: 0,
};

export const subtitleStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  fontWeight: 900,
  color: THEME.accent,
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  marginBottom: '2px',
};

export const titleStyle: React.CSSProperties = {
  fontSize: '1.6rem',
  fontWeight: 900,
  color: '#ffffff',
  textTransform: 'uppercase',
  lineHeight: '1',
};

// --- MAIN CONTENT AREA ---
export const scrollAreaStyle: React.CSSProperties = {
  flex: 1,
  overflowY: 'auto',
  overflowX: 'hidden',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  minHeight: 0,
  paddingBottom: '0px', // Shaved for vertical space
};

// --- GRID & CARDS ---
export const roomGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '12px', // TIGHTENED gap
  width: '100%',
};

export const roomCardStyle: React.CSSProperties = {
  backgroundColor: THEME.card,
  borderRadius: '24px',
  border: `1px solid ${THEME.border}`,
  padding: '12px 16px', // TIGHTENED padding inside the card
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

export const roomHeaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginBottom: '8px', // TIGHTENED margin
  paddingBottom: '6px', // TIGHTENED padding
  borderBottom: `1px solid rgba(255, 255, 255, 0.05)`,
};

export const roomNameStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: 900,
  color: '#fff',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

export const roomSensorsStyle: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  fontSize: '0.75rem',
  fontWeight: 800,
  color: THEME.header,
};
