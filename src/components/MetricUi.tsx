import React from 'react';
import { Icon } from '@iconify/react';

// Explicitly define what a sensor value can be
type DisplayValue = string | number | undefined | null;

export const SafeValue = ({ value, fallback = '--' }: { value: DisplayValue; fallback?: string }) => <span>{value ?? fallback}</span>;
export const GlassCard = ({
  title,
  children,
  statusColor,
  nightMode,
}: {
  title: string;
  children: React.ReactNode;
  statusColor?: string;
  nightMode?: boolean;
}) => (
  <div
    style={{
      backgroundColor: nightMode ? 'rgba(255, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.03)',
      borderRadius: '16px',
      padding: '12px',
      border: `1px solid ${statusColor || (nightMode ? 'rgba(255, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.05)')}`,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box', // Prevents padding from cutting off the right side
      width: '100%',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        fontSize: '0.65rem',
        fontWeight: 800,
        color: nightMode ? '#ff4444' : 'rgba(255,255,255,0.4)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      }}
    >
      {title}
    </div>
    {children}
  </div>
);

export const BigMetric = ({
  icon,
  label,
  value,
  color = '#fff',
  nightMode,
}: {
  icon: string;
  label: string;
  value: DisplayValue;
  color?: string;
  nightMode?: boolean;
}) => (
  <div
    style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '8px 4px',
      backgroundColor: nightMode ? 'rgba(255, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      border: nightMode ? '1px solid rgba(255, 68, 68, 0.1)' : '1px solid rgba(255, 255, 255, 0.02)',
      minWidth: 0,
      gap: '2px',
    }}
  >
    <Icon icon={icon} style={{ fontSize: '1.2rem', color: nightMode ? '#ff4444' : color, marginBottom: '2px' }} />
    <span style={{ fontSize: '1rem', fontWeight: 900, color: nightMode ? '#ff4444' : '#fff', lineHeight: 1 }}>
      <SafeValue value={value} />
    </span>
    <span
      style={{
        fontSize: '0.55rem',
        fontWeight: 800,
        color: nightMode ? 'rgba(255, 68, 68, 0.4)' : 'rgba(255,255,255,0.3)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      }}
    >
      {label}
    </span>
  </div>
);

export const RoomCard = ({ title, children, icon }: { title: string; children: React.ReactNode; icon?: string }) => (
  <div
    style={{
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '16px',
      padding: '10px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      height: '100%',
      boxSizing: 'border-box',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
      <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        {title}
      </span>
      {icon && <Icon icon={icon} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.2)' }} />}
    </div>
    {children}
  </div>
);

export const CompactSensor = ({
  value,
  unit,
  icon,
  color = '#03a9f4',
}: {
  value: DisplayValue;
  unit: string;
  icon: string;
  color?: string;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      backgroundColor: 'rgba(0,0,0,0.2)',
      padding: '2px 6px',
      borderRadius: '6px',
    }}
  >
    <Icon icon={icon} style={{ fontSize: '0.8rem', color: color }} />
    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#fff' }}>
      <SafeValue value={value} />
      <span style={{ fontSize: '0.5rem', opacity: 0.5, marginLeft: '1px' }}>{unit}</span>
    </span>
  </div>
);

export const GlassRow = ({
  children,
  isActive,
  activeColor = '#ffc107',
}: {
  children: React.ReactNode;
  isActive?: boolean;
  activeColor?: string;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '4px 10px',
      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.2)',
      borderRadius: '12px',
      border: `1px solid ${isActive ? activeColor + '40' : 'rgba(255, 255, 255, 0.02)'}`,
      boxShadow: isActive ? `0 0 15px ${activeColor}10` : 'none',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
      width: '100%',
    }}
  >
    {isActive && (
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '20%',
          bottom: '20%',
          width: '3px',
          backgroundColor: activeColor,
          borderRadius: '0 4px 4px 0',
          boxShadow: `0 0 10px ${activeColor}`,
        }}
      />
    )}
    <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
  </div>
);
export const SensorGrid = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap', // This is the secret sauce
      gap: '6px',
      marginBottom: '4px',
      width: '100%',
    }}
  >
    {children}
  </div>
);
