import { useState } from 'react';
import { CameraCard } from '@hakit/components';
import { useEntity } from '@hakit/core';
import { Icon } from '@iconify/react';
import { GlassCard, BigMetric } from '../components/MetricUi';
import * as styles from '../styles/SecurityDashboard.styles';

type SecurityCamera =
  | 'camera.reolink_video_doorbell_camera_fluent'
  | 'camera.back_door_fluent'
  | 'camera.front_yard_fluent'
  | 'camera.back_yard_fluent';

interface AlarmService {
  alarmArmHome: (args?: { code?: string }) => void;
  alarmArmAway: (args?: { code?: string }) => void;
  alarmDisarm: (args?: { code?: string }) => void;
}

export function SecurityDashboard() {
  const alarm = useEntity('alarm_control_panel.house');
  const alarmService = alarm.service as unknown as AlarmService;
  const state = alarm.state || 'disarmed';

  // Perimeter Entities
  const frontLock = useEntity('lock.front_door');
  const frontDoor = useEntity('binary_sensor.main_entrance_door_sensor_contact_door');
  const backLock = useEntity('lock.back_door');
  const backDoor = useEntity('binary_sensor.backyard_door_sensor_contact_door');
  const sorentoLock = useEntity('lock.sorento_uma_ex_v6_premium_door_lock');
  const garageCover = useEntity('cover.garage_door');
  const manDoor = useEntity('binary_sensor.garage_man_door_sensor_contact_door');

  // Modal States
  const [expandedCamera, setExpandedCamera] = useState<SecurityCamera | null>(null);
  const [showAlarmModal, setShowAlarmModal] = useState(false);

  // Status Logic
  const isTriggered = state === 'triggered';
  const isArmed = state.includes('armed');
  const isArming = state === 'arming' || state === 'pending';
  const statusColor = isTriggered ? '#f44336' : isArmed ? '#4caf50' : '#03a9f4';

  const getStatusText = () => {
    if (isTriggered) return 'ALARM TRIGGERED';
    if (isArming) return 'ARMING...';
    if (isArmed) return state.replace('_', ' ').toUpperCase();
    return 'DISARMED';
  };

  const getStatusIcon = () => {
    if (isTriggered) return 'mdi:shield-alert';
    if (isArmed) return 'mdi:shield-check';
    return 'mdi:shield-off';
  };

  const handleDisarm = () => {
    const pin = window.prompt('Enter PIN:');
    if (pin) {
      alarmService.alarmDisarm({ code: pin });
      setShowAlarmModal(false);
    }
  };

  return (
    <div style={styles.dashboardWrapperStyle}>
      <div style={styles.headerWrapperStyle}>
        <div style={styles.perimeterStatusStyle}>Perimeter Status</div>
        <div style={styles.mainTitleStyle}>Security Overview</div>
      </div>

      <div style={styles.macroLayoutStyle}>
        {/* CAMERA GRID */}
        <div style={{ ...styles.cameraGridStyle, flex: 1.8 }}>
          {(
            [
              'camera.reolink_video_doorbell_camera_fluent',
              'camera.back_door_fluent',
              'camera.front_yard_fluent',
              'camera.back_yard_fluent',
            ] as const
          ).map(cam => (
            <div
              key={cam}
              style={{ ...styles.cameraWrapperStyle, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => setExpandedCamera(cam)}
            >
              {/* THE FIX: Click catcher overlay ensures the div's onClick fires */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 10 }} />

              <CameraCard hideName entity={cam} view='motion' hideFooter hideViewControls style={styles.cameraCardStyle} />

              <div
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  left: '8px',
                  zIndex: 11,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontSize: '0.6rem',
                  fontWeight: 800,
                  color: '#fff',
                }}
              >
                {cam.split('_')[1]?.toUpperCase() || 'CAM'}
              </div>
            </div>
          ))}
        </div>

        {/* DATA COLUMN */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0 }}>
          <div onClick={() => setShowAlarmModal(true)} style={{ cursor: 'pointer' }}>
            <GlassCard title='Alarm System' statusColor={isTriggered ? 'rgba(244, 67, 54, 0.4)' : 'rgba(255,255,255,0.05)'}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: `${statusColor}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon icon={getStatusIcon()} style={{ fontSize: '1.8rem', color: statusColor }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fff' }}>{getStatusText()}</span>
                  <span style={{ fontSize: '0.6rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)' }}>TAP TO MANAGE PERIMETER</span>
                </div>
              </div>
            </GlassCard>
          </div>

          <GlassCard title='House Perimeter'>
            <div style={{ display: 'flex', gap: '8px' }}>
              <BigMetric
                icon={frontLock.state === 'locked' ? 'mdi:lock' : 'mdi:lock-open-variant'}
                label='Front Lock'
                value={frontLock.state}
                color={frontLock.state === 'locked' ? '#4caf50' : '#ff9800'}
              />
              <BigMetric
                icon='mdi:door'
                label='Front Door'
                value={frontDoor.state === 'on' ? 'Open' : 'Closed'}
                color={frontDoor.state === 'on' ? '#f44336' : '#8e8e93'}
              />
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <BigMetric
                icon={backLock.state === 'locked' ? 'mdi:lock' : 'mdi:lock-open-variant'}
                label='Back Lock'
                value={backLock.state}
                color={backLock.state === 'locked' ? '#4caf50' : '#ff9800'}
              />
              <BigMetric
                icon='mdi:door'
                label='Back Door'
                value={backDoor.state === 'on' ? 'Open' : 'Closed'}
                color={backDoor.state === 'on' ? '#f44336' : '#8e8e93'}
              />
            </div>
          </GlassCard>

          <GlassCard title='Garage & Auto'>
            <div style={{ display: 'flex', gap: '8px' }}>
              <BigMetric
                icon='mdi:car'
                label='Sorento'
                value={sorentoLock.state === 'locked' ? 'Locked' : 'Unlocked'}
                color={sorentoLock.state === 'locked' ? '#4caf50' : '#ff9800'}
              />
              <BigMetric
                icon='mdi:garage'
                label='Garage'
                value={garageCover.state}
                color={garageCover.state === 'closed' ? '#8e8e93' : '#ff9800'}
              />
              <BigMetric
                icon='mdi:door'
                label='Man Door'
                value={manDoor.state === 'on' ? 'Open' : 'Closed'}
                color={manDoor.state === 'on' ? '#f44336' : '#8e8e93'}
              />
            </div>
          </GlassCard>
        </div>
      </div>

      {/* FULLSCREEN CAMERA MODAL */}
      {expandedCamera && (
        <div style={{ ...styles.modalOverlayStyle, zIndex: 999 }} onClick={() => setExpandedCamera(null)}>
          <div style={styles.modalContentStyle} onClick={e => e.stopPropagation()}>
            <button style={styles.closeButtonStyle} onClick={() => setExpandedCamera(null)}>
              <Icon icon='mdi:close' style={{ fontSize: '1.5rem' }} />
            </button>
            <CameraCard
              entity={expandedCamera}
              view='live'
              hideFooter
              hideViewControls
              hideName
              style={{ width: '100%', height: '100%', borderRadius: '24px', border: 'none' }}
            />
          </div>
        </div>
      )}

      {/* ALARM CONTROL MODAL */}
      {showAlarmModal && (
        <div style={{ ...styles.modalOverlayStyle, zIndex: 999 }} onClick={() => setShowAlarmModal(false)}>
          <div style={styles.alarmModalContentStyle} onClick={e => e.stopPropagation()}>
            <button style={styles.closeButtonStyle} onClick={() => setShowAlarmModal(false)}>
              <Icon icon='mdi:close' style={{ fontSize: '1.5rem' }} />
            </button>
            <div style={styles.alarmModalHeaderStyle}>Alarmo Controls</div>
            <div style={{ textAlign: 'center', marginBottom: '16px', color: statusColor, fontWeight: 800, fontSize: '0.85rem' }}>
              CURRENT STATUS: {getStatusText()}
            </div>
            <button
              style={styles.alarmButtonStyle('arm')}
              onClick={() => {
                alarmService.alarmArmHome();
                setShowAlarmModal(false);
              }}
            >
              <Icon icon='mdi:shield-home' style={{ fontSize: '1.5rem' }} /> Arm Home
            </button>
            <button
              style={styles.alarmButtonStyle('arm')}
              onClick={() => {
                alarmService.alarmArmAway();
                setShowAlarmModal(false);
              }}
            >
              <Icon icon='mdi:shield-lock' style={{ fontSize: '1.5rem' }} /> Arm Away
            </button>
            <button style={styles.alarmButtonStyle('disarm')} onClick={handleDisarm}>
              <Icon icon='mdi:shield-off' style={{ fontSize: '1.5rem' }} /> Disarm System
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
