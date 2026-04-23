import { useEntity } from '@hakit/core';
import type { EntityName } from '@hakit/core';
import { LightSliderRow } from './LightSliderRow';
import { GlassCard, GlassRow } from './MetricUi.tsx';

type LightEntity = `light.${string}` | `switch.${string}`;

interface RoomData {
  name: string;
  entities: LightEntity[];
}

function LightRowWrapper({ entityId }: { entityId: LightEntity }) {
  const entity = useEntity(entityId as EntityName);
  const isOn = entity?.state === 'on';
  const accentColor = entityId.startsWith('light') ? '#ffc107' : '#03a9f4';

  return (
    <GlassRow isActive={isOn} activeColor={accentColor}>
      {/* width: 100% and minWidth: 0 here is key to preventing the "cutting" */}
      <div style={{ width: '100%', minWidth: 0 }}>
        <LightSliderRow entity={entityId as EntityName} />
      </div>
    </GlassRow>
  );
}

export function LightGrid() {
  const rooms: RoomData[] = [
    {
      name: 'LIVING ROOM',
      entities: ['light.living_room_light', 'light.main_entrance_light_switch', 'light.backyard_entrance_light_switch'] as LightEntity[],
    },
    { name: 'KITCHEN', entities: ['light.kitchen_light', 'light.dinning_light', 'light.island_light'] as LightEntity[] },
    { name: 'BEDROOMS', entities: ['light.master_bedroom_light', 'light.guest_room_light_switch'] as LightEntity[] },
    { name: 'OFFICE', entities: ['light.office_light'] as LightEntity[] },
  ];

  return (
    <div
      style={{
        display: 'grid',
        // The minmax(0, 1fr) forces columns to shrink rather than overflow
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '12px',
        width: '100%',
        maxWidth: '900px', // Prevents it from getting TOO wide on giant screens
        margin: '0 auto', // Centers the grid in the modal
        boxSizing: 'border-box',
        minWidth: '700px',
      }}
    >
      {rooms.map(room => (
        <GlassCard key={room.name} title={room.name}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              width: '100%',
              minWidth: 0,
            }}
          >
            {room.entities.map(id => (
              <LightRowWrapper key={id} entityId={id} />
            ))}
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
