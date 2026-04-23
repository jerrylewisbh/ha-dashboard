import { useEntity } from '@hakit/core';
import type { EntityName } from '@hakit/core';
import { Icon } from '@iconify/react';

export const CoverStatus = ({ entity: entityId }: { entity: EntityName }) => {
  const entity = useEntity(entityId);
  if (!entity) return null;

  const state = entity.state.toLowerCase();

  // Default to closed styling
  let icon = 'mdi:garage';
  let color = 'rgba(255,255,255,0.4)';
  let borderColor = 'transparent';
  let bgColor = 'rgba(0,0,0,0.2)';

  if (state === 'open') {
    icon = 'mdi:garage-open';
    color = '#f44336'; // Red to warn you it's exposed
    borderColor = 'rgba(244, 67, 54, 0.3)';
    bgColor = 'rgba(244, 67, 54, 0.1)';
  } else if (state === 'opening') {
    icon = 'mdi:arrow-up-bold-box-outline';
    color = '#ff9800'; // Amber for movement
    borderColor = 'rgba(255, 152, 0, 0.3)';
    bgColor = 'rgba(255, 152, 0, 0.1)';
  } else if (state === 'closing') {
    icon = 'mdi:arrow-down-bold-box-outline';
    color = '#ff9800'; // Amber for movement
    borderColor = 'rgba(255, 152, 0, 0.3)';
    bgColor = 'rgba(255, 152, 0, 0.1)';
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        backgroundColor: bgColor,
        padding: '4px 10px',
        borderRadius: '8px',
        border: `1px solid ${borderColor}`,
        transition: 'all 0.3s ease',
      }}
    >
      <Icon icon={icon} style={{ fontSize: '1rem', color }} />
      <span
        style={{
          fontSize: '0.65rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          color: color,
        }}
      >
        {state}
      </span>
    </div>
  );
};
