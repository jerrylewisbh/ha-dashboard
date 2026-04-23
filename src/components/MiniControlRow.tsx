import React, { useState } from 'react';
import { useEntity, useService } from '@hakit/core';
import type { EntityName } from '@hakit/core';

// 1. Define the supported domains and the service interface
type SupportedDomains = 'switch' | 'fan' | 'input_boolean' | 'light' | 'button' | 'script' | 'scene';

interface ActionService {
  toggle?: (args: { target: { entity_id: string } }) => void;
  turn_on?: (args: { target: { entity_id: string } }) => void;
  press?: (args: { target: { entity_id: string } }) => void;
}

export function MiniControlRow({ entity: entityId, icon }: { entity: EntityName; icon?: string }) {
  const entity = useEntity(entityId);
  const [isPressed, setIsPressed] = useState(false); // Used for button tap animation

  // 2. Safely extract the domain
  const domain = entityId.split('.')[0] as SupportedDomains;
  const service = useService(domain);

  if (!entity) return null;

  // Determine if this is an actionable item vs a toggleable item
  const isActionType = ['button', 'script', 'scene'].includes(domain);
  const isOff = !isActionType && entity.state === 'off';

  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    const actionService = service as unknown as ActionService;

    // Route to the correct Home Assistant service based on domain
    if (domain === 'button') {
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 200); // Quick visual pop
      actionService.press?.({ target: { entity_id: entityId } });
    } else if (domain === 'script' || domain === 'scene') {
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 200);
      actionService.turn_on?.({ target: { entity_id: entityId } });
    } else {
      // It's a switch/light/fan
      actionService.toggle?.({ target: { entity_id: entityId } });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '24px',
        marginBottom: '6px',
      }}
    >
      {/* LEFT: Icon & Name */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: isOff ? '#888' : '#fff',
          fontSize: '0.8rem',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {icon && <span style={{ opacity: isOff ? 0.5 : 1 }}>{icon}</span>}
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{entity.attributes.friendly_name}</span>
      </div>

      {/* RIGHT: Dynamic Control UI */}
      {isActionType ? (
        // ACTION BUTTON UI
        <div
          onClick={handleAction}
          style={{
            padding: '0 12px',
            height: '20px',
            borderRadius: '10px',
            backgroundColor: isPressed ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
            color: '#fff',
            fontSize: '0.65rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.1s ease',
            flexShrink: 0,
          }}
        >
          {domain === 'script' ? 'Run' : 'Press'}
        </div>
      ) : (
        // TOGGLE SWITCH UI
        <div
          onClick={handleAction}
          style={{
            width: '32px',
            height: '18px',
            borderRadius: '9px',
            backgroundColor: isOff ? 'rgba(255,255,255,0.1)' : '#4caf50',
            position: 'relative',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'background-color 0.2s ease',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '2px',
              left: isOff ? '2px' : '16px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              transition: 'left 0.2s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
            }}
          />
        </div>
      )}
    </div>
  );
}
