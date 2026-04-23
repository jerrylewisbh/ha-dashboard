// theme.ts
export const appTheme = {
  hue: 220, // Keeps your cool blueish base
  lightness: 54,
  saturation: 60,
  darkMode: true,
  customColors: {
    // --- APP BACKGROUND ---
    // Moving from flat black to a very deep, rich slate/black for depth
    appBg: '#0d0f14',
    modalOverlay: 'rgba(0,0,0,0.85)',

    // --- MODERN GLASS CARDS ---
    // Translucent dark colors for the frosted glass effect
    roomCardBg: 'rgba(28, 28, 32, 0.65)',
    roomCardBorder: 'rgba(255, 255, 255, 0.08)',
    cardBoxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', // Soft ambient shadow

    // --- TYPOGRAPHY & ACCENTS ---
    roomCardTitle: '#03a9f4', // Match the sleek blue from your running badges
    secondaryText: '#a0a0a8', // Soft grey for subtext
    accentColor: '#03a9f4',

    // --- CONTROLS & TOGGLES ---
    sliderTrackBg: 'rgba(255, 255, 255, 0.05)',
    toggleOn: '#30D158', // Apple's modern green (matches your organic bin)
    toggleOff: 'rgba(255,255,255,0.1)',
    fabBg: 'rgba(32, 41, 54, 0.8)', // Translucent floating action button
    fabBorder: 'rgba(255, 255, 255, 0.1)',

    // --- GARBAGE WIDGET COLORS (Unchanged) ---
    garbageBg: 'var(--ha-S300)',
    garbageCardBg: 'var(--ha-300-a3-contrast)',
    binWaste: '#9e9e9e',
    binRecycle: '#0A84FF',
    binOrganic: '#30D158',
  },
};

// Exporting these as raw arrays because Hakit's ControlSlider requires [R, G, B]
export const sliderColors = {
  on: [214, 153, 85] as [number, number, number],
  off: [35, 35, 35] as [number, number, number],
};

export const THEME = {
  // Deep, rich futuristic slate
  background: '#0b0d14',
  // Frosted glass panel background
  glassBg: 'rgba(20, 24, 34, 0.6)',
  // Subtle border for the glass
  glassBorder: 'rgba(255, 255, 255, 0.08)',
  textMain: '#ffffff',
  textSub: '#8b949e',
  accent: '#3b82f6',
  // Status colors for badges
  activeGlow: 'rgba(59, 130, 246, 0.15)',
  warning: '#f59e0b',
  danger: '#ef4444',
  success: '#10b981',
};
