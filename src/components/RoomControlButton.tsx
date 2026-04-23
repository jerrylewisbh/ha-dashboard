import React, { useState } from 'react';
import { useEntity, useService } from '@hakit/core';
import type { EntityName } from '@hakit/core';
import { Icon } from '@iconify/react';

interface RoomControlButtonProps {
  entity: EntityName;
  icon: string;
  action?: string; // e.g., 'remote.send_command'
  actionData?: Record<string, unknown>; // e.g., { device: 'fire_place', command: 'toggle' }
}

// 1. Define a strict type for the payload Hakit expects when calling a service
type ServicePayload = {
  target?: { entity_id: string };
  serviceData?: Record<string, unknown>;
};

export function RoomControlButton({ entity: entityId, icon, action, actionData }: RoomControlButtonProps) {
  const entity = useEntity(entityId);
  const [isPressed, setIsPressed] = useState(false);

  const targetDomain = action ? action.split('.')[0] : entityId.split('.')[0];
  const targetServiceCall = action ? action.split('.')[1] : '';

  // 2. Safely tell TypeScript that targetDomain is the exact type useService expects
  const service = useService(targetDomain as 'switch');

  if (!entity) return null;

  const isMomentary = !!action || ['button', 'script', 'scene'].includes(targetDomain);
  const isOff = !isMomentary && entity.state === 'off';

  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();

    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);

    // 3. Cast the service object to a strongly-typed dictionary of functions
    // We cast to `unknown` first to safely bypass TypeScript's type overlap rules
    const actionService = service as unknown as Record<string, ((payload: ServicePayload) => void) | undefined>;

    if (action) {
      // Check if the service exists before calling it to prevent runtime crashes
      const customCall = actionService[targetServiceCall];
      if (customCall) {
        customCall({
          target: { entity_id: entityId },
          serviceData: actionData,
        });
      }
    } else {
      // Standard Hakit domain handling
      if (targetDomain === 'button') {
        actionService.press?.({ target: { entity_id: entityId } });
      } else if (targetDomain === 'script' || targetDomain === 'scene') {
        actionService.turn_on?.({ target: { entity_id: entityId } });
      } else {
        actionService.toggle?.({ target: { entity_id: entityId } });
      }
    }
  };

  const isActive = isMomentary ? isPressed : !isOff || isPressed;

  return (
    <div
      onClick={handleAction}
      title={entity.attributes.friendly_name || entityId}
      style={{
        width: '32px',
        height: '32px',
        borderRadius: '10px',
        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.04)',
        border: `1px solid ${isActive ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.08)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: isActive ? '0 4px 12px rgba(255, 255, 255, 0.1)' : 'none',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isActive ? 1 : 0.4,
          transform: isPressed ? 'scale(0.85)' : 'scale(1)',
          transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Icon
          icon={icon}
          style={{
            fontSize: '1.2rem',
            color: isActive ? '#03a9f4' : '#ffffff',
          }}
        />
      </div>
    </div>
  );
}
