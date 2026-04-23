import { useEffect, useRef, useMemo } from 'react';
import { useEntity, useEntities, useService } from '@hakit/core';
import { Icon } from '@iconify/react';
import * as styles from '../styles/MainDashboard.styles';

export function BadgeTray({ onNewBadge }: { onNewBadge?: () => void }) {
  // ==========================================
  // 🛰️ CORE ENTITY HOOKS
  // ==========================================
  const doorbellPerson = useEntity('binary_sensor.reolink_video_doorbell_wifi_person');
  const drivewayVehicle = useEntity('binary_sensor.reolink_video_doorbell_wifi_vehicle');
  const garageDoor = useEntity('cover.garage_door');
  const leakSensor = useEntity('binary_sensor.all_leak_sensors');
  const smokeSensor = useEntity('binary_sensor.all_smoke_sensors');

  // --- LITTER BOX 1 ---
  const litterBinStatus = useEntity('sensor.litter_box_bin_state');
  const litterLevel = useEntity('sensor.cat_litter_state');
  const isBinFullBinary = useEntity('binary_sensor.litter_box_garbage_can_full');
  const wasteCounter = useEntity('counter.litter_box_waste_cycles');

  // --- LITTER BOX 2 (NEW) ---
  const litterBinStatus2 = useEntity('sensor.jq01009g24410010959_bin_state');
  const litterLevel2 = useEntity('sensor.jq01009g24410010959_cat_litter_state');
  const isBinFullBinary2 = useEntity('binary_sensor.jq01009g24410010959_garbage_can_full');

  // --- PETS & FOUNTAIN ---
  const feederEmpty = useEntity('binary_sensor.pet_feeder_empty_food');
  const fountainWater = useEntity('sensor.smart_fountain_water_level');
  const fountainFilter = useEntity('sensor.smart_fountain_filter_life');
  const fountainPump = useEntity('sensor.smart_fountain_pump_cleaning_due');
  const filterResetBtn = useEntity('button.smart_fountain_filter_reset');
  const pumpResetBtn = useEntity('button.smart_fountain_pump_clean_reset');

  // --- AIR QUALITY ---
  const pm25Sensors = useEntities(['sensor.air_quality_meter_pm2_5', 'sensor.office_air_quality_meter_pm2_5']);
  const co2Sensors = useEntities(['sensor.office_air_quality_meter_carbon_dioxide', 'sensor.air_quality_meter_carbon_dioxide']);
  const vocSensors = useEntities([
    'sensor.air_quality_meter_volatile_organic_compounds',
    'sensor.office_air_quality_meter_volatile_organic_compounds',
  ]);

  // --- APPLIANCES & UTILITIES ---
  const vacuumStatus = useEntity('sensor.x50_ultra_task_status');
  const washerFinished = useEntity('input_boolean.washer_finished');
  const dryerFinished = useEntity('input_boolean.dryer_finished');
  const dishwasherFinished = useEntity('input_boolean.dishwasher_finished');
  const washerRunning = useEntity('binary_sensor.washer_running');
  const dryerRunning = useEntity('binary_sensor.dryer_running');
  const dishwasherStatus = useEntity('sensor.dishwasher_status');
  const binSensors = useEntities(['sensor.days_to_black_cart_2', 'sensor.days_to_blue_cart_2', 'sensor.days_to_green_cart_2']);
  const deliveryStatus = useEntity('input_boolean.delivery');

  // ==========================================
  // 🛠️ SERVICES & HELPERS
  // ==========================================
  const switchService = useService('switch');

  const getMaxValue = (entities: ReturnType<typeof useEntities>) => Math.max(...Object.values(entities).map(e => Number(e.state) || 0));

  const maxPM25 = getMaxValue(pm25Sensors);
  const maxCO2 = getMaxValue(co2Sensors);
  const maxVOC = getMaxValue(vocSensors);

  const waterValueRaw = Number(fountainWater.state) || 0;
  const waterLiters = (waterValueRaw / 1000).toFixed(1);
  const isVacuumCleaning = vacuumStatus.state.toLowerCase().includes('cleaning');
  const isGarbageTomorrow = Object.values(binSensors).some(s => Number(s.state) === 1);

  // ==========================================
  // 📱 SCREEN WAKE LOGIC
  // ==========================================
  const prevBadgesRef = useRef<string[]>([]);

  const activeBadgeKeys = useMemo(() => {
    return [
      deliveryStatus.state === 'on' && 'delivery',
      smokeSensor.state === 'on' && 'smoke',
      leakSensor.state === 'on' && 'leak',
      doorbellPerson.state === 'on' && 'doorbell',
      drivewayVehicle.state === 'on' && 'vehicle',
      garageDoor.state === 'open' && 'garage',
      washerFinished.state === 'on' && 'washer_done',
      dryerFinished.state === 'on' && 'dryer_done',
      dishwasherFinished.state === 'on' && 'dishwasher_done',
      feederEmpty.state === 'on' && 'feeder_empty',
      waterValueRaw <= 900 && 'fountain_low',
      Number(fountainFilter.state) <= 0 && 'fountain_filter',
      Number(fountainPump.state) <= 0 && 'fountain_pump',
      // Combined Litter Logic (Screen wakes if either box has an issue)
      (isBinFullBinary.state === 'on' ||
        isBinFullBinary2.state === 'on' ||
        litterBinStatus.state === 'full' ||
        litterBinStatus2.state === 'full') &&
        'litter_full',
      (litterBinStatus.state === 'missing' || litterBinStatus2.state === 'missing') && 'litter_missing',
      (litterLevel.state === 'insufficient' || litterLevel2.state === 'insufficient') && 'litter_low',
      maxPM25 > 15 && 'aqi_pm25',
      maxCO2 > 1000 && 'aqi_co2',
      maxVOC > 250 && 'aqi_voc',
      isGarbageTomorrow && 'garbage',
    ].filter(Boolean) as string[];
  }, [
    smokeSensor.state,
    leakSensor.state,
    doorbellPerson.state,
    drivewayVehicle.state,
    garageDoor.state,
    washerFinished.state,
    dryerFinished.state,
    dishwasherFinished.state,
    feederEmpty.state,
    waterValueRaw,
    fountainFilter.state,
    fountainPump.state,
    isBinFullBinary.state,
    isBinFullBinary2.state,
    litterBinStatus.state,
    litterBinStatus2.state,
    litterLevel.state,
    litterLevel2.state,
    maxPM25,
    maxCO2,
    maxVOC,
    isGarbageTomorrow,
    deliveryStatus.state,
  ]);

  useEffect(() => {
    const hasNewBadge = activeBadgeKeys.some(key => !prevBadgesRef.current.includes(key));

    if (hasNewBadge) {
      // Turn off screensaver (Wake screen)
      switchService.turnOff({
        target: ['switch.fire_tablet_screensaver', 'switch.lenovo_starview_screensaver'],
      });

      if (onNewBadge) {
        onNewBadge();
      }
    }
    prevBadgesRef.current = activeBadgeKeys;
  }, [activeBadgeKeys, switchService, onNewBadge]);

  // ==========================================
  // 🖼️ RENDER
  // ==========================================
  return (
    <div style={styles.badgeTrayStyle} className='badge-tray'>
      {/* CRITICAL ALERTS */}
      {smokeSensor.state === 'on' && (
        <div style={styles.getBadgeStyle('#ff4d4d', true)}>
          <Icon icon='mdi:smoke-detector-variant-alert' style={styles.badgeIconStyle} />
          <span>SMOKE DETECTED</span>
        </div>
      )}

      {leakSensor.state === 'on' && (
        <div style={styles.getBadgeStyle('#00d4ff', true)}>
          <Icon icon='mdi:water-alert' style={styles.badgeIconStyle} />
          <span>LEAK DETECTED</span>
        </div>
      )}

      {/* DELIVERY */}
      {deliveryStatus.state === 'on' && (
        <div style={styles.getBadgeStyle('#4caf50', true)} onClick={() => deliveryStatus.service.turnOff()} role='button'>
          <Icon icon='mdi:package-variant-closed' style={styles.badgeIconStyle} />
          <span>PACKAGE DELIVERED ×</span>
        </div>
      )}

      {/* SECURITY */}
      {doorbellPerson.state === 'on' && (
        <div style={styles.getBadgeStyle('#ffa500')}>
          <Icon icon='mdi:motion-sensor' style={styles.badgeIconStyle} />
          <span>PERSON AT DOOR</span>
        </div>
      )}

      {drivewayVehicle.state === 'on' && (
        <div style={styles.getBadgeStyle('#ffa500')}>
          <Icon icon='mdi:car-side' style={styles.badgeIconStyle} />
          <span>VEHICLE DETECTED</span>
        </div>
      )}

      {garageDoor.state === 'open' && (
        <div style={styles.getBadgeStyle('#ff4d4d')}>
          <Icon icon='mdi:garage-open-variant' style={styles.badgeIconStyle} />
          <span>GARAGE OPEN</span>
        </div>
      )}

      {/* WASHER / DRYER / DISHWASHER */}
      {washerRunning.state === 'on' ? (
        <div style={styles.getBadgeStyle('#03a9f4')}>
          <span className='washer-anim' style={styles.animWrapperStyle}>
            <Icon icon='mdi:washing-machine' style={styles.badgeIconStyle} />
          </span>
          <span>WASHER RUNNING</span>
        </div>
      ) : (
        washerFinished.state === 'on' && (
          <div style={styles.getBadgeStyle('#4caf50', true)} onClick={() => washerFinished.service.turnOff()} role='button'>
            <Icon icon='mdi:check-circle-outline' style={styles.badgeIconStyle} />
            <span>🧺 WASHER DONE ×</span>
          </div>
        )
      )}

      {dryerRunning.state === 'on' ? (
        <div style={styles.getBadgeStyle('#03a9f4')}>
          <span className='dryer-anim' style={styles.animWrapperStyle}>
            <Icon icon='mdi:tumble-dryer' style={styles.badgeIconStyle} />
          </span>
          <span>DRYER RUNNING</span>
        </div>
      ) : (
        dryerFinished.state === 'on' && (
          <div style={styles.getBadgeStyle('#4caf50', true)} onClick={() => dryerFinished.service.turnOff()} role='button'>
            <Icon icon='mdi:check-circle-outline' style={styles.badgeIconStyle} />
            <span>DRYER DONE ×</span>
          </div>
        )
      )}

      {dishwasherStatus.state === 'Running' ? (
        <div style={styles.getBadgeStyle('#03a9f4')}>
          <span className='dishwasher-anim' style={styles.animWrapperStyle}>
            <Icon icon='mdi:dishwasher' style={styles.badgeIconStyle} />
          </span>
          <span>DISHWASHER RUNNING</span>
        </div>
      ) : (
        dishwasherFinished.state === 'on' && (
          <div style={styles.getBadgeStyle('#4caf50', true)} onClick={() => dishwasherFinished.service.turnOff()} role='button'>
            <Icon icon='mdi:check-circle-outline' style={styles.badgeIconStyle} />
            <span>DISHWASHER DONE ×</span>
          </div>
        )
      )}

      {/* VACUUM */}
      {isVacuumCleaning && (
        <div style={styles.getBadgeStyle('#03a9f4')}>
          <span className='vacuum-anim' style={styles.animWrapperStyle}>
            <Icon icon='mdi:robot-vacuum' style={styles.badgeIconStyle} />
          </span>
          <span>VACUUM RUNNING</span>
        </div>
      )}

      {/* AIR QUALITY */}
      {maxPM25 > 15 && (
        <div style={styles.getBadgeStyle('#ffcc00')}>
          <Icon icon='mdi:blur' style={styles.badgeIconStyle} />
          <span>PM2.5: {maxPM25}</span>
        </div>
      )}

      {maxCO2 > 1000 && (
        <div style={styles.getBadgeStyle('#ffcc00')}>
          <Icon icon='mdi:molecule-co2' style={styles.badgeIconStyle} />
          <span>CO2: {maxCO2}</span>
        </div>
      )}

      {maxVOC > 250 && (
        <div style={styles.getBadgeStyle('#ffcc00')}>
          <Icon icon='mdi:test-tube' style={styles.badgeIconStyle} />
          <span>VOC HIGH</span>
        </div>
      )}

      {/* CATS & LITTER BOXES */}
      {feederEmpty.state === 'on' && (
        <div style={styles.getBadgeStyle('#ff4d4d', true)}>
          <Icon icon='mdi:paw-off' style={styles.badgeIconStyle} />
          <span>FEEDER EMPTY</span>
        </div>
      )}

      {/* COMBINED BIN FULL */}
      {(isBinFullBinary.state === 'on' ||
        isBinFullBinary2.state === 'on' ||
        litterBinStatus.state === 'full' ||
        litterBinStatus2.state === 'full') && (
        <div style={styles.getBadgeStyle('#ff4d4d', true)}>
          <Icon icon='mdi:delete-alert' style={styles.badgeIconStyle} />
          <span>CAT BIN FULL</span>
        </div>
      )}

      {/* COMBINED BIN MISSING */}
      {(litterBinStatus.state === 'missing' || litterBinStatus2.state === 'missing') && (
        <div style={styles.getBadgeStyle('#ffa500')}>
          <Icon icon='mdi:delete-variant' style={styles.badgeIconStyle} />
          <span>BIN MISSING</span>
        </div>
      )}

      {/* COMBINED LOW LITTER */}
      {(litterLevel.state === 'insufficient' || litterLevel2.state === 'insufficient') && (
        <div style={styles.getBadgeStyle('#ffcc00')}>
          <Icon icon='mdi:tray-full' style={styles.badgeIconStyle} />
          <span>LOW LITTER</span>
        </div>
      )}

      {/* Box 1 Waste Counter (Add Box 2 counter here if available) */}
      {Number(wasteCounter.state) >= 20 && (
        <div style={styles.getBadgeStyle('#ffa500')} onClick={() => wasteCounter.service.reset()} role='button'>
          <Icon icon='mdi:sync' style={styles.badgeIconStyle} />
          <span>{wasteCounter.state} CYCLES ×</span>
        </div>
      )}

      {/* FOUNTAIN ALERTS */}
      {waterValueRaw < 900 && (
        <div style={styles.getBadgeStyle('#ff4d4d', true)}>
          <Icon icon='mdi:water-percent-alert' style={styles.badgeIconStyle} />
          <span>FOUNTAIN LOW: {waterLiters}L</span>
        </div>
      )}

      {Number(fountainFilter.state) <= 0 && (
        <div style={styles.getBadgeStyle('#ffa500', true)} onClick={() => filterResetBtn.service.press()} role='button'>
          <Icon icon='mdi:air-filter' style={styles.badgeIconStyle} />
          <span>REPLACE FILTER ×</span>
        </div>
      )}

      {Number(fountainPump.state) <= 0 && (
        <div style={styles.getBadgeStyle('#ffa500', true)} onClick={() => pumpResetBtn.service.press()} role='button'>
          <Icon icon='mdi:water-pump-off' style={styles.badgeIconStyle} />
          <span>CLEAN PUMP ×</span>
        </div>
      )}

      {/* UTILITIES */}
      {isGarbageTomorrow && (
        <div style={styles.getBadgeStyle('#4caf50')}>
          <Icon icon='mdi:delete-empty' style={styles.badgeIconStyle} />
          <span>BINS OUT TOMORROW</span>
        </div>
      )}
    </div>
  );
}
