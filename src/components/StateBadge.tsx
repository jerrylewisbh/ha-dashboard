import { useEntity } from '@hakit/core';
import type { EntityName } from '@hakit/core';
import { Icon } from '@iconify/react';

export const StateBadge = ({
  entity: entityId,
  iconOn,
  iconOff,
  label,
  activeColor = '#ff9800', // Default active color (e.g., amber for motion)
}: {
  entity: EntityName;
  iconOn: string;
  iconOff?: string;
  label?: string;
  activeColor?: string;
}) => {
  const entity = useEntity(entityId);

  if (!entity) return null;

  // Check common "active" states for binary sensors
  const isActive = ['on', 'home', 'true', 'open', 'detected'].includes(entity.state.toLowerCase());

  const currentIcon = isActive ? iconOn : iconOff || iconOn;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        backgroundColor: isActive ? `${activeColor}20` : 'rgba(0,0,0,0.2)',
        padding: '4px 10px',
        borderRadius: '8px',
        border: `1px solid ${isActive ? `${activeColor}50` : 'transparent'}`,
        transition: 'all 0.3s ease',
      }}
    >
      <Icon
        icon={currentIcon}
        style={{
          fontSize: '1rem',
          color: isActive ? activeColor : 'rgba(255,255,255,0.4)',
        }}
      />
      {label && (
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: isActive ? '#fff' : 'rgba(255,255,255,0.4)',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
};
