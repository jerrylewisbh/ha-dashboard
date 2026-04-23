import React from 'react';
import { useEntity } from '@hakit/core';
import type { EntityName } from '@hakit/core';
import { RoomCard, CompactSensor, SensorGrid } from './MetricUi.tsx';
import { LightSliderRow } from './LightSliderRow';
import { RoomControlButton } from './RoomControlButton';
import * as styles from '../styles/CommandCenter.styles.ts';
import { StateBadge } from './StateBadge.tsx';
import { CoverStatus } from './CoverStatus.tsx';

// Define what we expect from an entity to avoid 'never' errors
interface SimplifiedEntity {
  state: string;
  attributes: Record<string, unknown>;
}

// Fixed helper: No unused 'e', and forced type return
const useSafeEntity = (id: string): SimplifiedEntity | null => {
  try {
    // Cast to unknown then to SimplifiedEntity to satisfy TS
    return useEntity(id as EntityName) as unknown as SimplifiedEntity;
  } catch {
    // Omitting the (e) satisfies the 'unused-vars' rule
    return null;
  }
};

const ButtonRow = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '6px', marginTop: 'auto', paddingTop: '4px' }}>{children}</div>
);

interface SectionDividerProps {
  label: string;
}

export function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: '12px 0 8px 0',
        gap: '8px',
      }}
    >
      <span
        style={{
          fontSize: '0.65rem',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.4)',
          fontWeight: 600,
          letterSpacing: '0.5px',
        }}
      >
        {label}
      </span>
      <div
        style={{
          flex: 1,
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)', // Subtle line
        }}
      />
    </div>
  );
}

export function CommandCenterDashboard() {
  const officeTemp = useSafeEntity('sensor.office_air_quality_meter_temperature');
  const officeHum = useSafeEntity('sensor.office_air_quality_meter_humidity');
  const officeCo2 = useSafeEntity('sensor.office_air_quality_meter_carbon_dioxide');
  const officeLuminance = useSafeEntity('sensor.office_motion_illuminance');

  const garageTemp = useSafeEntity('sensor.garage_meter_temperature');
  const garageHum = useSafeEntity('sensor.garage_meter_humidity');

  const basementTemp = useSafeEntity('sensor.indoor_outdoor_meter_4f23_temperature');
  const basementHum = useSafeEntity('sensor.indoor_outdoor_meter_4f23_humidity');

  const livingRoomTemp = useSafeEntity('sensor.indoor_outdoor_meter_0d29_temperature');
  const livingRoomHum = useSafeEntity('sensor.indoor_outdoor_meter_0d29_humidity');
  const livingRoomLuminance = useSafeEntity('sensor.living_space_light');

  return (
    <div style={styles.dashboardWrapperStyle}>
      <div style={styles.headerStyle}>
        <div style={styles.subtitleStyle}>Home Automation</div>
        <div style={styles.titleStyle}>Command Center</div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '12px',
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* ROOM 1: OFFICE */}
        <RoomCard title='Office' icon='mdi:laptop'>
          <SensorGrid>
            <CompactSensor icon='mdi:thermometer' value={officeTemp?.state} unit='°C' color='#ff9800' />
            <CompactSensor icon='mdi:water-percent' value={officeHum?.state} unit='%' color='#03a9f4' />
            <CompactSensor icon='mdi:molecule-co2' value={officeCo2?.state} unit='ppm' color='#4caf50' />
            <CompactSensor icon='mdi:sun-wireless' value={officeLuminance?.state} unit='lx' color='#db7500' />
            <StateBadge
              entity='binary_sensor.office_motion'
              iconOn='mdi:motion-sensor'
              iconOff='mdi:motion-sensor-off'
              label='Motion'
              activeColor='#f44336'
            />
            <StateBadge
              entity='binary_sensor.feeding_area_presence_sensor_occupancy'
              iconOn='mdi:motion-sensor'
              iconOff='mdi:motion-sensor-off'
              label='Cats'
              activeColor='#f44336'
            />
          </SensorGrid>

          <LightSliderRow entity='light.office_light' />

          <ButtonRow>
            <RoomControlButton entity='switch.office_left_monitor_plug' icon='mdi:monitor' />
            <RoomControlButton entity='switch.office_right_monitor_plug' icon='mdi:monitor' />
            <RoomControlButton entity='switch.office_computer_plug' icon='mdi:desktop-classic' />
            <RoomControlButton entity='light.office_light' icon='mdi:light-switch-off' />
            <RoomControlButton entity='button.pet_feeder_quick_feed' icon='mdi:food-drumstick' />
          </ButtonRow>
        </RoomCard>

        {/* ROOM 2: LIVING ROOM */}
        <RoomCard title='Living Room' icon='mdi:sofa'>
          <SensorGrid>
            <CompactSensor icon='mdi:thermometer' value={livingRoomTemp?.state} unit='°C' />
            <CompactSensor icon='mdi:water-percent' value={livingRoomHum?.state} unit='%' color='#03a9f4' />
            <CompactSensor icon='mdi:sun-wireless' value={livingRoomLuminance?.state} unit='lx' color='#db7500' />
          </SensorGrid>
          <LightSliderRow entity='light.living_room_light' />
          <LightSliderRow entity='light.island_light' />
          <ButtonRow>
            <RoomControlButton entity='media_player.living_room_tv_samsung' icon='mdi:television' />
            <RoomControlButton
              entity='remote.universal_remote'
              icon='mdi:fireplace'
              action='remote.send_command'
              actionData={{
                num_repeats: 1,
                delay_secs: 0.4,
                hold_secs: 0,
                device: 'fire_place',
                command: 'toggle',
              }}
            />
          </ButtonRow>
        </RoomCard>

        {/* ROOM 3: KITCHEN */}
        <RoomCard title='Kitchen' icon='mdi:fridge'>
          <LightSliderRow entity='light.dinning_light' />
          <LightSliderRow entity='light.kitchen_light' />
          <SectionDivider label='Common' />
          <ButtonRow>
            <RoomControlButton entity='light.hallway_light_switch' icon='mdi:transit-connection-horizontal' />
            <RoomControlButton entity='light.staircase_light' icon='mdi:stairs-down' />
            <RoomControlButton entity='light.main_entrance_light_switch' icon='mdi:arrow-expand-left' />
            <RoomControlButton entity='light.backyard_entrance_light_switch' icon='mdi:arrow-expand-right' />
          </ButtonRow>
        </RoomCard>

        {/* ROOM 4: MASTER BEDROOM */}
        <RoomCard title='Bedrooms' icon='mdi:bed'>
          <LightSliderRow entity='light.master_bedroom_light' />
          <LightSliderRow entity='light.basement_bedroom' />
          <LightSliderRow entity='light.guest_room_light_switch' />
          <SectionDivider label='Bathrooms' />
          <ButtonRow>
            <RoomControlButton entity='light.bathroom_light_switch' icon='mdi:light-switch' />
            <RoomControlButton entity='switch.bathroom_exhaust' icon='mdi:fan' />
          </ButtonRow>
        </RoomCard>

        {/* ROOM 5: GARAGE */}
        <RoomCard title='Garage' icon='mdi:garage'>
          <SensorGrid>
            <CompactSensor icon='mdi:thermometer' value={garageTemp?.state} unit='°C' color='#ff9800' />
            <CompactSensor icon='mdi:water-percent' value={garageHum?.state} unit='%' color='#03a9f4' />
            <StateBadge
              entity='binary_sensor.garage_interior_motion_sensor'
              iconOn='mdi:motion-sensor'
              iconOff='mdi:motion-sensor-off'
              label='Motion'
              activeColor='#f44336'
            />
            <StateBadge
              entity='binary_sensor.ratgdov25i_e5f7cc_obstruction'
              iconOn='mdi:motion-sensor'
              iconOff='mdi:motion-sensor-off'
              label='Obstruction'
              activeColor='#f44336'
            />
            <StateBadge
              entity='binary_sensor.garage_smoke_detector'
              iconOn='mdi:smoke-detector-variant'
              iconOff='mdi:smoke-detector-variant-alert'
              label='Smoke'
              activeColor='#f44336'
            />
            <StateBadge
              entity='binary_sensor.garage_man_door_sensor_contact_door'
              iconOff='mdi:door'
              iconOn='mdi:door-closed'
              label='Man Door'
              activeColor='#f44336'
            />
          </SensorGrid>

          <ButtonRow>
            {/* The Status Indicator */}
            <CoverStatus entity='cover.garage_door' />

            {/* Pushes the buttons to the right */}
            <div style={{ flex: 1 }} />

            {/* Explicit Open Button */}
            <RoomControlButton entity='cover.garage_door' icon='mdi:arrow-up' action='cover.open_cover' />

            {/* Explicit Close Button */}
            <RoomControlButton entity='cover.garage_door' icon='mdi:arrow-down' action='cover.close_cover' />
            <RoomControlButton entity='light.ratgdov25i_e5f7cc_light' icon='mdi:lightbulb' />
          </ButtonRow>
        </RoomCard>

        {/* ROOM 6: BASEMENT */}
        <RoomCard title='Basement' icon='mdi:controller-classic'>
          <SensorGrid>
            <CompactSensor icon='mdi:thermometer' value={basementTemp?.state} unit='°C' color='#ff9800' />
            <CompactSensor icon='mdi:water-percent' value={basementHum?.state} unit='%' color='#03a9f4' />
            <StateBadge
              entity='binary_sensor.basement_smoke_sensors'
              iconOn='mdi:smoke-detector-variant'
              iconOff='mdi:smoke-detector-variant-alert'
              label='Smoke'
              activeColor='#f44336'
            />
          </SensorGrid>
          <LightSliderRow entity='light.basement_1' />
          <LightSliderRow entity='light.basement_2' />
          <ButtonRow>
            <RoomControlButton entity='switch.sonoff_100294607c_1' icon='mdi:dumbbell' />
            <RoomControlButton entity='switch.sonoff_10029476ea_1' icon='mdi:washing-machine' />
          </ButtonRow>
        </RoomCard>
      </div>
    </div>
  );
}
