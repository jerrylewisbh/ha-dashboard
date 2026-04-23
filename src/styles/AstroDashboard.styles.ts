import React from 'react';

export type AstroTheme = {
  isNightMode: boolean;
  accent: string;
};

export const defaultTheme: AstroTheme = {
  isNightMode: false,
  accent: '#03a9f4',
};

export const nightModeTheme: AstroTheme = {
  isNightMode: true,
  accent: '#ff4444',
};
export const sectionHeaderStyle: React.CSSProperties = {
  fontSize: '0.7rem', // Slightly smaller
  fontWeight: 900,
  color: 'rgba(255,255,255,0.2)',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  marginBottom: '2px', // Tightened
};
// --- MAIN LAYOUT ---
export const getContainerStyle = (theme: AstroTheme): React.CSSProperties => ({
  width: '100%',
  height: '100%',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflow: 'hidden',
  backgroundColor: theme.isNightMode ? '#080000' : 'transparent',
  transition: 'background-color 0.5s ease',
});

// --- HEADER ---
export const headerContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginBottom: '0.75rem', // Reduced from 1.5rem
  flexShrink: 0,
};

export const getHeaderSubtitleStyle = (theme: AstroTheme): React.CSSProperties => ({
  fontSize: '0.7rem',
  fontWeight: 900,
  color: theme.accent,
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
});

export const getHeaderTitleStyle = (statusColor: string): React.CSSProperties => ({
  fontSize: '1.8rem', // Reduced from 2.2rem to save vertical space
  fontWeight: 900,
  color: statusColor,
  textTransform: 'uppercase',
  lineHeight: '1',
});

// --- GRID ---
export const mainContentStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1.5rem',
  flex: 1,
  minHeight: 0, // CRITICAL: Allows children to be smaller than their content
  overflow: 'hidden', // Keeps the main container from expanding
};

export const rightColumnStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem', // Tightened from 1rem
  overflowY: 'auto',
  paddingRight: '4px',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
};

// --- RECESSED DATA ROWS ---
export const getDataRowStyle = (isNight: boolean): React.CSSProperties => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '6px 12px', // Ultra-tight vertical padding
  backgroundColor: isNight ? 'rgba(255, 0, 0, 0.03)' : 'rgba(0, 0, 0, 0.25)',
  border: `1px solid ${isNight ? 'rgba(255, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.02)'}`,
  borderRadius: '12px',
});

export const getDataRowLabelGroupStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

export const getDataRowLabelStyle = (): React.CSSProperties => ({
  color: 'rgba(255, 255, 255, 0.4)',
  fontSize: '0.75rem',
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
});

export const dataRowValueStyle: React.CSSProperties = {
  fontWeight: 900,
  fontSize: '0.95rem',
  color: '#fff',
};

// --- CAMERA ---
export const getCameraWrapperStyle = (isNight: boolean): React.CSSProperties => ({
  height: 'auto', // Changed from 100% to auto
  maxHeight: '100%', // Ensures it doesn't push the page down
  aspectRatio: '1/1',
  borderRadius: '24px',
  overflow: 'hidden',
  backgroundColor: '#000',
  flexShrink: 1, // Allow the camera to shrink slightly if needed
  border: `1px solid ${isNight ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.05)'}`,
});
export const globalAstroStyles = `
  .astro-right-column::-webkit-scrollbar {
    display: none;
  }
`;
