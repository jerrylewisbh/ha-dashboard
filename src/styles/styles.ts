// styles.ts
import React from 'react';

export const timeStyles = `
  /* --- THE GLASS EFFECT --- */
  background-color: rgba(255, 255, 255, 0.06) !important;
  backdrop-filter: blur(24px) !important;
  -webkit-backdrop-filter: blur(24px) !important;
  border-radius: 24px !important;
  border: 1px solid rgba(255, 255, 255, 0.03) !important;
  border-top: 1px solid rgba(255, 255, 255, 0.12) !important;
  box-shadow:0 8px 32px rgba(0, 0, 0, 0.4) !important;

  /* --- ORIGINAL SIZING (slightly adjusted for the curve) --- */
  padding: 16px !important; 
  min-height: unset !important;
  h1, h2, .time, .date { line-height: 1 !important; margin: 0 !important; }
  h1, .time { font-size: 1.4rem !important; }
  h2, .date { font-size: 0.8rem !important; }
`;
export const headerFabStyles = `
  border-radius: 12px !important; 
  background-color: var(--ha-custom-colors-fab-bg) !important; 
  border: 1px solid var(--ha-custom-colors-fab-border) !important; 
  svg { color: white !important; }
`;
// Add this to styles.ts
export const lockButtonStyles = `
  background-color: var(--ha-custom-colors-slider-track-bg) !important;
  border: 1px solid rgba(255,255,255,0.05) !important;
  .title { font-size: 0.85rem !important; font-weight: bold !important; }
  .description { font-size: 0.75rem !important; }
`;

export const roomGridStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  width: '100%',
};

export const roomCardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1.2rem',
  gap: '1rem',
  flex: 1,
  minWidth: '280px',
  borderRadius: '24px',
};

export const roomTitleStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 900,
  color: 'rgba(255, 255, 255, 0.5)', // Muted but bold
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  margin: '0 0 0.5rem 0',
};

export const recessedPlateStyle: React.CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  border: '1px solid rgba(255, 255, 255, 0.02)',
  borderRadius: '16px',
  boxSizing: 'border-box',
};
