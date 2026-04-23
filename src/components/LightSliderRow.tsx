import React, { useState, useEffect } from 'react';
import { useEntity, useService } from '@hakit/core';
import type { EntityName } from '@hakit/core';
import { ControlSlider } from '@hakit/components';

export function LightSliderRow({ entity: entityId }: { entity: EntityName }) {
  const entity = useEntity(entityId);
  const service = useService('light');
  const switchService = useService('switch');

  const [localValue, setLocalValue] = useState<number | null>(null);

  useEffect(() => {
    if (localValue !== null) {
      const timer = setTimeout(() => setLocalValue(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [localValue]);

  if (!entity) return null;

  const isOff = entity.state === 'off';
  const haBrightness = entity.attributes.brightness ? Math.round((entity.attributes.brightness / 255) * 100) : 0;

  const isSwitch = entityId.startsWith('switch.');
  const supportedColorModes = (entity.attributes.supported_color_modes as string[]) || [];
  const supportedFeatures = (entity.attributes.supported_features as number) || 0;

  const isDimmable = !isSwitch && (supportedColorModes.some(mode => mode !== 'onoff') || (supportedFeatures & 1) === 1);

  const currentBrightness = localValue !== null ? localValue : isOff ? 0 : haBrightness;
  const displayBrightness = Math.round(currentBrightness);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSwitch) {
      switchService.toggle({ target: { entity_id: entityId } });
    } else {
      service.toggle({ target: { entity_id: entityId } });
    }
  };

  const handleSliderChange = (value: number) => {
    if (!isDimmable) return;

    const roundedValue = Math.round(value);
    setLocalValue(roundedValue);

    if (roundedValue === 0) {
      service.turnOff({ target: { entity_id: entityId } });
    } else {
      service.turnOn({
        target: { entity_id: entityId },
        serviceData: { brightness_pct: roundedValue },
      });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        height: '28px', // SHRUNK height to save vertical space
        marginBottom: '0px',
      }}
    >
      {/* SLIDER / BUTTON CONTAINER */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          height: '100%',
          position: 'relative',
          touchAction: 'none',
        }}
      >
        {isDimmable ? (
          <ControlSlider
            vertical={false}
            value={currentBrightness}
            min={0}
            max={100}
            step={1}
            thickness={28} // SHRUNK thickness
            borderRadius={14} // SHRUNK rounding
            onChange={handleSliderChange}
            style={{
              width: '100%',
              height: '100%',
              minWidth: 0,
              margin: 0,
              padding: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.04)', // FROSTED GLASS
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxSizing: 'border-box',
            }}
          />
        ) : (
          /* NON-DIMMABLE FALLBACK */
          <div
            onClick={handleToggle}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 14, // SHRUNK rounding
              backgroundColor: isOff ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.15)', // FROSTED GLASS
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxSizing: 'border-box',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
          />
        )}

        {/* TEXT OVERLAY */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 12px',
            pointerEvents: 'none',
            color: isOff ? '#888' : '#fff',
            fontSize: '0.8rem',
            fontWeight: 600,
            textShadow: isOff ? 'none' : '0 1px 3px rgba(0,0,0,0.5)',
          }}
        >
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{entity.attributes.friendly_name}</span>
          <span style={{ paddingLeft: '8px' }}>
            {!isDimmable ? (isOff ? 'Off' : 'On') : isOff && localValue === null ? 'Off' : `${displayBrightness}%`}
          </span>
        </div>
      </div>

      {/* MINI TOGGLE SWITCH */}
      <div
        onClick={handleToggle}
        style={{
          width: '32px',
          height: '18px',
          borderRadius: '9px',
          backgroundColor: isOff ? 'rgba(255, 255, 255, 0.1)' : '#4caf50',
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
    </div>
  );
}
