import { ButtonCard, SensorCard } from '@hakit/components';

const gridContainer: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)', // DROPPED TO 2 COLUMNS! Massive horizontal space gained.
  width: '100%',
  gap: '2rem', // Bigger gap between left and right halves
  padding: '1.5rem',
  height: '100%',
  overflow: 'hidden',
  boxSizing: 'border-box',
};

const columnHeader: React.CSSProperties = {
  color: 'var(--ha-secondary-text-color, #a1a1aa)',
  margin: '0 0 1rem 0',
  fontSize: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  paddingBottom: '0.5rem',
};

const columnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem', // Added a bit more breathing room vertically
  height: '100%',
  width: '100%',
};

export function OfficeDashboard() {
  // Shared props - removed disableColumns to ensure the click area stays fully intact
  const slimProps = {
    layoutType: 'slim' as const,
    hideLastUpdated: true,
    style: { width: '100%' },
  };

  return (
    <div style={gridContainer}>
      {/* COLUMN 1: POWER & CONTROLS */}
      <div style={columnStyle}>
        <h3 style={columnHeader}>Power</h3>

        {/* Master Toggles - Explicitly calling turn_on for scripts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', width: '100%' }}>
          <ButtonCard
            entity='script.startup_office'
            service='turn_on'
            title='Start'
            icon='mdi:power'
            hideState={true}
            cssStyles={`background-color: rgba(76, 175, 80, 0.15);`}
            {...slimProps}
          />
          <ButtonCard
            entity='script.shutdown_office'
            service='turn_on'
            title='Stop'
            icon='mdi:power-sleep'
            hideState={true}
            cssStyles={`background-color: rgba(244, 67, 54, 0.15);`}
            {...slimProps}
          />
        </div>

        {/* Individual Plugs - Explicitly calling toggle */}
        <ButtonCard entity='switch.office_computer_plug' service='toggle' title='Computer' {...slimProps} />
        <ButtonCard entity='switch.office_swich_switch' service='toggle' title='Main Switch' {...slimProps} />

        {/* Monitors side-by-side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', width: '100%' }}>
          <ButtonCard entity='switch.office_left_monitor_plug' service='toggle' title='L. Mon' {...slimProps} />
          <ButtonCard entity='switch.office_right_monitor_plug' service='toggle' title='R. Mon' {...slimProps} />
        </div>
      </div>

      {/* COLUMN 2: ENVIRONMENT */}
      <div style={columnStyle}>
        <h3 style={columnHeader}>Environment</h3>

        {/* We place the sensors in a 2-column grid so they don't stack off the bottom of the screen */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', width: '100%' }}>
          <SensorCard entity='binary_sensor.office_motion_occupancy' title='Occupancy' {...slimProps} />
          <SensorCard entity='sensor.office_motion_illuminance' title='Lux' {...slimProps} />

          <SensorCard entity='sensor.office_air_quality_meter_temperature' title='Temp' {...slimProps} />
          <SensorCard entity='sensor.office_air_quality_meter_humidity' title='Humidity' {...slimProps} />

          <SensorCard entity='sensor.office_air_quality_meter_pm2_5' title='PM 2.5' {...slimProps} />
          <SensorCard entity='sensor.office_air_quality_meter_carbon_dioxide' title='CO2' {...slimProps} />
        </div>

        {/* VOCs gets a full-width slot at the bottom to balance the grid perfectly */}
        <SensorCard entity='sensor.office_air_quality_meter_volatile_organic_compounds' title='VOCs' {...slimProps} />
      </div>
    </div>
  );
}
