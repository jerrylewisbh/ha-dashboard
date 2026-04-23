import { useEntity } from '@hakit/core';
import { Icon } from '@iconify/react';

export function CelestialArch() {
  const sun = useEntity('sun.sun');
  const moonAlt = useEntity('sensor.astroweather_backyard_moon_altitude');
  const moonAz = useEntity('sensor.astroweather_backyard_moon_azimuth');
  const moonPhase = useEntity('sensor.moon_phase');
  const moonIconEntity = useEntity('sensor.astroweather_backyard_moon_icon');

  if (!sun || !moonAlt || !moonAz) return null;

  const getPositionOnTrack = (azimuth: number, rx: number, ry: number) => {
    let progress = ((azimuth - 90) / 180) * 100;
    progress = Math.max(0, Math.min(100, progress));
    const angle = Math.PI - (progress / 100) * Math.PI;
    const x = 50 + rx * Math.cos(angle);
    const y = 45 - ry * Math.sin(angle);
    return { x, y };
  };

  // Sun: Tall (Inner) | Moon: Flat (Outer)
  const sunPos = getPositionOnTrack(sun.attributes.azimuth || 0, 30, 30);
  const moonPos = getPositionOnTrack(Number(moonAz.state) || 0, 42, 20);

  const getMoonIcon = (phase?: string) => {
    const iconMap: Record<string, string> = {
      new_moon: 'mdi:moon-new',
      waxing_crescent: 'mdi:moon-waxing-crescent',
      first_quarter: 'mdi:moon-first-quarter',
      waxing_gibbous: 'mdi:moon-waxing-gibbous',
      full_moon: 'mdi:moon-full',
      waning_gibbous: 'mdi:moon-waning-gibbous',
      last_quarter: 'mdi:moon-last-quarter',
      waning_crescent: 'mdi:moon-waning-crescent',
    };
    return iconMap[phase || ''] || 'mdi:moon-full';
  };

  const currentMoonIcon = moonIconEntity?.state?.startsWith('mdi:') ? moonIconEntity.state : getMoonIcon(moonPhase?.state as string);

  // --- BOLDER & BIGGER LABEL STYLES ---
  const labelStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: 900,
    fill: 'rgba(255, 255, 255, 0.8)',
    textAnchor: 'middle',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    letterSpacing: '0.2px',
    userSelect: 'none',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100px', margin: '0 5px' }}>
      <svg viewBox='0 0 100 55' style={{ width: '100%', overflow: 'visible' }}>
        {/* SUN TRACK */}
        <path d='M 20 45 A 30 30 0 0 1 80 45' fill='none' stroke='rgba(255, 235, 59, 0.4)' strokeWidth='1' strokeDasharray='2 3' />

        {/* MOON TRACK */}
        <path d='M 8 45 A 42 20 0 0 1 92 45' fill='none' stroke='rgba(144, 202, 249, 0.4)' strokeWidth='1' strokeDasharray='2 3' />

        {/* Horizon Line */}
        <line x1='5' y1='45' x2='95' y2='45' stroke='rgba(255, 255, 255, 0.2)' strokeWidth='1.2' />

        {/* CARDINAL POINTS - Positioned slightly lower to handle larger font */}
        <text x='8' y='60' style={labelStyle}>
          E
        </text>
        <text x='92' y='60' style={labelStyle}>
          W
        </text>

        {/* Sun Icon */}
        {sun.attributes.elevation > -0.5 && (
          <g style={{ transform: `translate(${sunPos.x}px, ${sunPos.y}px)`, transition: 'all 1.5s ease-in-out' }}>
            <circle cx='0' cy='0' r='5' fill='#ffeb3b' style={{ filter: 'drop-shadow(0 0 5px #ffeb3b)' }} />
          </g>
        )}

        {/* Moon Icon */}
        {Number(moonAlt.state) > -0.5 && (
          <g style={{ transform: `translate(${moonPos.x}px, ${moonPos.y}px)`, transition: 'all 1.5s ease-in-out' }}>
            <foreignObject x='-6' y='-6' width='12' height='12'>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                <Icon icon={currentMoonIcon} style={{ fontSize: '12px', color: '#90caf9', filter: 'drop-shadow(0 0 4px #90caf9)' }} />
              </div>
            </foreignObject>
          </g>
        )}
      </svg>
    </div>
  );
}
