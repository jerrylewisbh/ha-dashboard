import React, { type CSSProperties } from 'react';

export const THEME = {
  bg: '#0b0d14', // Deep futuristic slate
  glassBg: 'rgba(255, 255, 255, 0.03)',
  glassBorder: 'rgba(255, 255, 255, 0.08)',
  textMain: '#ffffff',
  textSub: '#8b949e',
  accent: '#3b82f6', // Modern Blue
};
// --- MAIN LAYOUT ---
export const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '100vh',
  padding: '0.4rem',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  backgroundColor: 'var(--ha-custom-colors-app-bg)',
  overflow: 'hidden',
};

export const glassCardStyle: React.CSSProperties = {
  backgroundColor: 'rgba(255, 255, 255, 0.06)', // Changed from dark slate to milky white
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.04)',
  borderTop: '1px solid rgba(255, 255, 255, 0.12)', // Stronger top reflection
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)', // Slightly stronger shadow to separate from background
  overflow: 'hidden',
};

export const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.4rem',
  height: '36px',
  flexShrink: 0,
  overflow: 'hidden',
};

export const mainGridStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  gap: '0.4rem',
  minHeight: 0,
};

// --- LEFT COLUMN ---
export const leftColumnStyle: React.CSSProperties = {
  width: '310px',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  height: '100%',
  minHeight: 0,
};

export const autoWrapperStyle: React.CSSProperties = {
  flex: '0 0 auto',
  width: '100%',
};

export const fullWidthStyle: React.CSSProperties = {
  width: '100%',
};

export const climateCardStyle: React.CSSProperties = {
  ...glassCardStyle,
  width: '100%',
  cursor: 'pointer',
};

// --- RIGHT COLUMN ---
export const rightColumnStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  height: '100%',
  minHeight: 0,
};

export const cameraWrapperStyle: React.CSSProperties = {
  flex: 1,
  minHeight: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
};

export const cameraCardStyle: React.CSSProperties = {
  ...glassCardStyle,
  width: '100%',
  height: '100%',
};

// --- POPUPS & MODALS ---
export const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  zIndex: 9999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backdropFilter: 'blur(5px)',
};

export const modalContentStyle: React.CSSProperties = {
  backgroundColor: 'rgba(30, 33, 40, 0.75)',
  backdropFilter: 'blur(32px)',
  WebkitBackdropFilter: 'blur(32px)',
  borderRadius: '28px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
  boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  minWidth: '50vw',
  maxWidth: '95vw',
  maxHeight: '95vh',
  overflowY: 'auto',
  position: 'relative',
};

export const weatherModalContentStyle: React.CSSProperties = {
  ...modalContentStyle,
  width: '95vw',
  maxWidth: '1200px',
};

export const modalCloseButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  zIndex: 10,
};

export const modalTitleStyle: React.CSSProperties = {
  color: 'white',
  margin: '0 0 1rem 0',
};

export const getBadgeStyle = (color: string, shouldPulse?: boolean): React.CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem', // Slightly wider gap between icon and text
  padding: '0 1.25rem', // More horizontal padding to maintain the pill shape
  height: '36px', // Slightly taller pill
  borderRadius: '18px', // Half of the new height to keep it a perfect pill
  backgroundColor: `${color}1A`,
  border: 'none',
  color: color,
  fontSize: '0.9rem', // Increased from 0.75rem
  fontWeight: 900, // Maximum boldness so numbers like "1691" really pop
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  whiteSpace: 'nowrap',
  animation: shouldPulse ? 'alert-pulse 2s infinite ease-in-out' : 'none',
});

export const globalAnimationStyles = `
  @keyframes alert-pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
  
  /* --- APPLIANCE ANIMATIONS --- */
  
  
  @keyframes flyover {
 0% { transform: translateX(-120%); opacity: 0; }
 10% { opacity: 1; }
 90% { opacity: 1; }
 100% { transform: translateX(300%); opacity: 0; }
 }
 
  /* Vacuum: Sweeping side-to-side */
  @keyframes vacuumSweep {
    0%, 100% { transform: translateX(-3px) rotate(-10deg); }
    50% { transform: translateX(3px) rotate(10deg); }
  }
  .vacuum-anim {
    display: inline-block;
    animation: vacuumSweep 1.5s ease-in-out infinite;
  }

  /* Washer: Spinning */
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  .washer-anim { 
    display: inline-block; 
    animation: spin 2s linear infinite; 
  }

  /* Dryer: Tumbling */
  @keyframes tumble { 
    0%, 100% { transform: translateY(0) rotate(0); } 
    25% { transform: translateY(-2px) rotate(-10deg); } 
    75% { transform: translateY(1px) rotate(10deg); } 
  }
  .dryer-anim { 
    display: inline-block; 
    animation: tumble 1.5s ease-in-out infinite; 
  }

  /* Dishwasher: Pulsing */
  @keyframes pulse-grow { 
    0%, 100% { transform: scale(1); } 
    50% { transform: scale(1.2); } 
  }
  .dishwasher-anim { 
    display: inline-block; 
    animation: pulse-grow 2s ease-in-out infinite; 
  }

  /* --- TRAY STYLES --- */
  .badge-tray::-webkit-scrollbar { display: none; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes scaleUp { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
  @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
  @keyframes scaleDown { from { opacity: 1; transform: scale(1); } to { opacity: 0; transform: scale(0.95); } }
  
  .glass-card {
    background-color: rgba(30, 33, 40, 0.6) !important; /* Rich graphite instead of milky white */
    backdrop-filter: blur(24px) !important;
    -webkit-backdrop-filter: blur(24px) !important;
    border-radius: 24px !important;
    border: 1px solid rgba(255, 255, 255, 0.04) !important;
    border-top: 1px solid rgba(255, 255, 255, 0.1) !important; /* Nice top highlight */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5) !important; /* Deeper drop shadow */
    transition: background-color 0.2s ease, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .glass-card:hover {
    background-color: rgba(40, 44, 52, 0.7) !important; /* Slightly brighter on hover */
  }

  .glass-card:active {
    background-color: rgba(40, 44, 52, 0.8) !important;
    transform: scale(0.98) !important; 
  }
  .night-mode .glass-card {
    background-color: rgba(60, 0, 0, 0.6) !important;
    border-color: rgba(255, 0, 0, 0.1) !important;
    border-top-color: rgba(255, 0, 0, 0.2) !important;
    box-shadow: 0 10px 30px rgba(255, 0, 0, 0.05) !important;
  }
`;

export const badgeTrayStyle: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  minWidth: 0,
  gap: '0.4rem',
  marginRight: 'auto',
  height: '100%',
  overflowX: 'auto',
  paddingRight: '1rem',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  WebkitOverflowScrolling: 'touch',
};

export const weatherCardStyle: React.CSSProperties = {
  ...glassCardStyle,
  width: '100%',
  cursor: 'pointer',
};

export const cameraOverride = `
  && {
    .video-container, video, img {
      object-fit: contain !important;
      background: black !important;
    }
  }
`;

// ==========================================
// CUSTOM ENVIRONMENT CARD STYLES
// ==========================================
export const envCardContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1.2rem',
  cursor: 'pointer',
  height: '100%',
  boxSizing: 'border-box',
};

export const envTopRowStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  zIndex: 2, // Keeps text/icons on top
};
export const envWeatherGroupStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

export const envTempStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  fontWeight: 900,
  lineHeight: '1.1',
};

export const envStateStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#b0bec5',
  textTransform: 'capitalize',
};

export const envStatsContainerStyle: React.CSSProperties = {
  textAlign: 'right',
  fontSize: '0.8rem',
  color: '#b0bec5',
  lineHeight: '1.4',
};

export const envStatValueStyle: React.CSSProperties = {
  color: '#fff',
  fontWeight: 600,
};

export const envDividerStyle: React.CSSProperties = {
  height: '1px',
  backgroundColor: 'rgba(255,255,255,0.05)',
  margin: '12px 0',
};

export const envBottomGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',
  flex: 1,
};

export const envZoneItemStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '12px 14px', // Increased padding to give the larger text some breathing room
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  border: '1px solid rgba(255, 255, 255, 0.02)',
  borderRadius: '16px',
  boxShadow: 'none',
};

export const envZoneLabelStyle: React.CSSProperties = {
  fontSize: '.95rem',
  color: '#b0bec5',
  fontWeight: 700,
  textTransform: 'uppercase',
  marginBottom: '2px',
};

export const envZoneValueStyle: React.CSSProperties = {
  fontSize: '1.4rem', // MASSIVE bump from 0.85rem for across-the-room readability
  fontWeight: 900, // Maximum thickness
  display: 'flex',
  alignItems: 'baseline', // Keeps the % sign perfectly aligned with the bottom of the ° sign
};

export const envZoneHumidityStyle: React.CSSProperties = {
  fontSize: '1.1rem', // Made slightly smaller than the temp so they don't visually compete
  color: '#03a9f4',
  marginLeft: '8px', // Increased spacing between Temp and Humidity
  fontWeight: 800,
};

export const weatherSummaryStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--ha-primary-text-color, #e1e1e1)',
  marginBottom: '1.5rem',
  lineHeight: '1.5',
  padding: '1.2rem 1.5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  borderRadius: '16px',
  border: '1px solid var(--ha-divider-color, rgba(255, 255, 255, 0.1))',
};

export const envStatRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '0.8rem',
  color: 'rgba(255,255,255,0.7)',
};

export const envSmallIconStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'rgba(255,255,255,0.4)',
};

// --- CLOCK ---
export const clockContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  padding: '1.2rem',
  height: '100%',
  boxSizing: 'border-box',
};

export const clockIconStyle: React.CSSProperties = {
  fontSize: '2.8rem',
  color: '#03a9f4', // That signature blue from your sidebar
  filter: 'drop-shadow(0 0 10px rgba(3, 169, 244, 0.3))',
};

export const clockTimeStyle: React.CSSProperties = {
  fontSize: '2.2rem',
  fontWeight: 900,
  lineHeight: 1,
  color: '#fff',
};

export const clockAmPmStyle: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 600,
  color: 'rgba(255,255,255,0.4)',
};

export const clockDateStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'rgba(255,255,255,0.6)',
  marginTop: '4px',
};

// --- CLIMATE ---
export const climateContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1.2rem',
  gap: '1rem',
  height: '100%',
  boxSizing: 'border-box',
  minHeight: '155px',
};

export const climateHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

export const climateIconWrapperStyle: React.CSSProperties = {
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  backgroundColor: '#e67e22', // Nest Orange
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 12px rgba(230, 126, 34, 0.4)',
};

export const climateTitleStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: 800,
  color: '#fff',
};

export const climateStatusContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'baseline', // Keeps the small 'Target' text aligned perfectly with the big numbers
  gap: '6px',
  marginTop: '2px', // Pushes it slightly away from the "Nest Thermostat" title
};

export const climateCurrentValueStyle: React.CSSProperties = {
  fontSize: '1.4rem', // Matches your massive new Environment card numbers
  fontWeight: 900,
  color: '#ffffff',
};

export const climateTargetLabelStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  fontWeight: 700,
  color: 'rgba(255,255,255,0.4)', // Muted gray so it doesn't distract
  textTransform: 'uppercase',
  marginLeft: '4px',
};

export const climateTargetValueStyle: React.CSSProperties = {
  fontSize: '1.4rem', // Massive size
  fontWeight: 900,
  color: '#ff9800', // Signature Nest Orange
};

export const climateControlRowStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '8px',
};

export const getClimateButtonStyle = (active: boolean, color: string): React.CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40px',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  backgroundColor: active ? `${color}33` : 'rgba(0, 0, 0, 0.25)',
  border: active ? `1px solid ${color}80` : '1px solid rgba(255, 255, 255, 0.02)',
  color: active ? color : 'rgba(255,255,255,0.4)',
});
// ==========================================
// FULLSCREEN CAMERA MODAL STYLES
// ==========================================
export const cameraModalOverlayStyle: React.CSSProperties = {
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
  zIndex: 9999, // Super high z-index to stay above the existing ModalManager
};

export const cameraModalContentStyle: React.CSSProperties = {
  position: 'relative',
  width: '90%',
  maxWidth: '1000px',
  aspectRatio: '16/9',
  backgroundColor: '#1c1c1e',
  borderRadius: '24px',
  boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
};

export const cameraCloseButtonStyle: React.CSSProperties = {
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
  zIndex: 10000,
  boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
};
export const flightLayerStyle: CSSProperties = {
  position: 'absolute',
  top: '70px',
  left: 0,
  width: '100%',
  height: '20px',
  pointerEvents: 'none',
  zIndex: 1,
};
export const planeContainerStyle = (index: number): CSSProperties => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
  animation: 'flyover 14s linear infinite', // Faster: 14s instead of 20s
  animationDelay: `${index * 5}s`, // Shorter gap between planes
  opacity: 0,
});

export const planeIconStyle: CSSProperties = {
  fontSize: '12px',
  transform: 'rotate(90deg)',
  color: 'rgba(255, 255, 255, 0.3)',
};

export const planeInfoStyle: CSSProperties = {
  marginLeft: '6px',
  fontSize: '8px',
  color: 'rgba(255, 255, 255, 0.4)',
  whiteSpace: 'nowrap',
};

export const planeCallsignStyle: CSSProperties = {
  fontWeight: 'bold',
  marginRight: '4px',
};

export const planeRouteStyle: CSSProperties = {
  opacity: 0.6,
};

// --- MAIN DASHBOARD MISC ---
export const fabGroupStyle: React.CSSProperties = {
  display: 'flex',
  gap: '0.4rem',
};

export const autoWrapperOverlayStyle: React.CSSProperties = {
  ...autoWrapperStyle,
  position: 'relative',
  zIndex: 1,
};

export const clickableCameraWrapperStyle: React.CSSProperties = {
  ...cameraWrapperStyle,
  cursor: 'pointer',
  position: 'relative',
};

export const clickCatcherStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  zIndex: 10,
};

export const closeIconStyle: React.CSSProperties = {
  fontSize: '1.5rem',
};

export const modalCameraCardStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  borderRadius: '24px',
};

// --- BADGE TRAY ---
export const badgeIconStyle: React.CSSProperties = {
  fontSize: '1.3rem',
};

export const animWrapperStyle: React.CSSProperties = {
  display: 'flex',
};
