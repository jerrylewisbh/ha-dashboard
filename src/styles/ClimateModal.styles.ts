import React from 'react';

export const modalInnerWrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
  width: '100%',
};

export const targetTempLabelStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  fontWeight: 800,
  color: 'rgba(255,255,255,0.4)',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

export const mainTempStyle: React.CSSProperties = {
  fontSize: '5rem',
  fontWeight: 900,
  color: '#fff',
  lineHeight: 1,
  margin: '1rem 0',
  textShadow: '0 10px 20px rgba(0,0,0,0.3)',
};

export const currentTempStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 700,
  color: 'rgba(255,255,255,0.6)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '2rem',
};

export const controlButtonGroupStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
};

export const roundButtonStyle: React.CSSProperties = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  border: '1px solid rgba(255, 255, 255, 0.02)',
  color: '#fff',
  transition: 'transform 0.1s active, background-color 0.2s',
};
