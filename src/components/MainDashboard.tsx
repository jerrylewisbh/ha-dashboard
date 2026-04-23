import { useState, useEffect, useRef } from 'react';
import { CameraCard, FabCard } from '@hakit/components';
import { useEntities, useEntity } from '@hakit/core';
import { Icon } from '@iconify/react';
import { CustomEnvironmentCard } from './CustomEnvironmentCard';
import { BadgeTray } from './BadgeTray';
import { ModalManager } from './ModalManager';
import { timeStyles, headerFabStyles } from '../styles/styles';
import * as styles from '../styles/MainDashboard.styles';
import { HouseOperationsWidget } from './HouseOperationsWidget';
import { CustomClockCard } from './CustomClockCard';
import { CustomClimateCard } from './CustomClimateCard';

export function MainDashboard() {
  const [openPopup, setOpenPopup] = useState<'lights' | 'locks' | 'climate' | 'weather' | 'utilities' | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [cameraMountKey, setCameraMountKey] = useState(() => Date.now());

  const handleClosePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenPopup(null);
      setIsClosing(false);
    }, 200);
  };

  // ==========================================
  // 🧹 SYSTEM STABILITY & CAMERA REFRESH
  // ==========================================
  useEffect(() => {
    const refreshCameras = () => {
      setCameraMountKey(Date.now());
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refreshCameras();
      }
    };

    window.addEventListener('online', refreshCameras);
    window.addEventListener('visibilitychange', handleVisibilityChange);

    const intervalId = setInterval(refreshCameras, 10 * 60 * 1000);

    const dailyRefreshInterval = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 3 && now.getMinutes() === 0) {
        window.location.reload();
      }
    }, 60000);

    return () => {
      window.removeEventListener('online', refreshCameras);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(intervalId);
      clearInterval(dailyRefreshInterval);
    };
  }, []);

  // ==========================================
  // 🚨 ALARM TRIGGER LOGIC
  // ==========================================
  const smokeSensors = useEntities(['binary_sensor.hall_way_smoke_sensor', 'binary_sensor.basement_smoke_detector']);
  const leakSensors = useEntities(['binary_sensor.basement_laundry_leak_sensor', 'binary_sensor.kitchen_sink_leak_sensor']);

  const isSmokeDetected = Object.values(smokeSensors).some(s => s.state === 'on');
  const isLeakDetected = Object.values(leakSensors).some(s => s.state === 'on');
  const isCriticalAlertActive = isSmokeDetected || isLeakDetected;

  useEffect(() => {
    if (!isCriticalAlertActive) return;

    const alarmAudio = new Audio(`${import.meta.env.VITE_HA_URL}/local/sounds/beep.mp3`);
    const triggerLocalAlarm = () => alarmAudio.play().catch(() => {});

    triggerLocalAlarm();
    const beepInterval = setInterval(triggerLocalAlarm, 5000);

    return () => {
      clearInterval(beepInterval);
      alarmAudio.pause();
    };
  }, [isCriticalAlertActive]);

  // ==========================================
  // 📹 CAMERA POPUP LOGIC
  // ==========================================
  type SecurityCamera =
    | 'camera.reolink_video_doorbell_camera_fluent'
    | 'camera.front_yard_fluent'
    | 'camera.back_door_fluent'
    | 'camera.back_yard_fluent';

  const [popupCamera, setPopupCamera] = useState<SecurityCamera | null>(null);

  const doorbellSensor = useEntity('binary_sensor.reolink_video_doorbell_wifi_person');
  const frontYardSensor = useEntity('binary_sensor.front_yard_person');
  const backDoorSensor = useEntity('binary_sensor.back_door_person');
  const backYardSensor = useEntity('binary_sensor.back_yard_person');

  const prevDoorbell = useRef(false);
  const prevFrontYard = useRef(false);
  const prevBackDoor = useRef(false);
  const prevBackYard = useRef(false);

  useEffect(() => {
    // We use a timeout to defer state updates to the next tick.
    // This fixes the ESLint 'synchronous setState in effect' error.
    const timeoutId = setTimeout(() => {
      const isDoorbell = doorbellSensor.state === 'on';
      const isFront = frontYardSensor.state === 'on';
      const isBackD = backDoorSensor.state === 'on';
      const isBackY = backYardSensor.state === 'on';

      // RISING EDGES (Opening)
      if (isDoorbell && !prevDoorbell.current) setPopupCamera('camera.reolink_video_doorbell_camera_fluent');
      else if (isFront && !prevFrontYard.current) setPopupCamera('camera.front_yard_fluent');
      else if (isBackD && !prevBackDoor.current) setPopupCamera('camera.back_door_fluent');
      else if (isBackY && !prevBackYard.current) setPopupCamera('camera.back_yard_fluent');

      // FALLING EDGES (Closing)
      if (!isDoorbell && prevDoorbell.current) {
        setPopupCamera(curr => (curr === 'camera.reolink_video_doorbell_camera_fluent' ? null : curr));
      }
      if (!isFront && prevFrontYard.current) {
        setPopupCamera(curr => (curr === 'camera.front_yard_fluent' ? null : curr));
      }
      if (!isBackD && prevBackDoor.current) {
        setPopupCamera(curr => (curr === 'camera.back_door_fluent' ? null : curr));
      }
      if (!isBackY && prevBackYard.current) {
        setPopupCamera(curr => (curr === 'camera.back_yard_fluent' ? null : curr));
      }

      prevDoorbell.current = isDoorbell;
      prevFrontYard.current = isFront;
      prevBackDoor.current = isBackD;
      prevBackYard.current = isBackY;
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [doorbellSensor.state, frontYardSensor.state, backDoorSensor.state, backYardSensor.state]);

  return (
    <div style={styles.containerStyle}>
      <style>{styles.globalAnimationStyles}</style>

      <div style={styles.headerStyle}>
        <BadgeTray onNewBadge={handleClosePopup} />
        <div style={styles.fabGroupStyle}>
          <FabCard icon='mdi:lightbulb' onClick={() => setOpenPopup('lights')} size={36} cssStyles={headerFabStyles} />
          <FabCard icon='mdi:lock' onClick={() => setOpenPopup('locks')} size={36} cssStyles={headerFabStyles} />
        </div>
      </div>

      <div style={styles.mainGridStyle}>
        <div style={styles.leftColumnStyle}>
          <div style={styles.autoWrapperStyle}>
            <CustomClockCard cssStyles={timeStyles} />
          </div>
          <div style={styles.autoWrapperStyle}>
            <CustomClimateCard onClick={() => setOpenPopup('climate')} />
          </div>
          <div style={styles.autoWrapperStyle}>
            <HouseOperationsWidget onClick={() => setOpenPopup('utilities')} />
          </div>
        </div>

        <div style={styles.rightColumnStyle}>
          <div style={styles.autoWrapperOverlayStyle}>
            <CustomEnvironmentCard onClick={() => setOpenPopup('weather')} />
          </div>

          <div style={styles.clickableCameraWrapperStyle} onClick={() => setPopupCamera('camera.reolink_video_doorbell_camera_fluent')}>
            {/* Click Catcher ensures the click registers on the wrapper */}
            <div style={styles.clickCatcherStyle} />
            <CameraCard
              key={`cam-main-${cameraMountKey}`}
              entity='camera.reolink_video_doorbell_camera_fluent'
              hideName
              view='poster'
              hideFooter
              posterUpdateInterval={10000}
              style={styles.cameraCardStyle}
            />
          </div>
        </div>
      </div>

      <ModalManager openPopup={openPopup} isClosing={isClosing} handleClosePopup={handleClosePopup} />

      {popupCamera && (
        <div style={styles.cameraModalOverlayStyle} onClick={() => setPopupCamera(null)}>
          <div style={styles.cameraModalContentStyle} onClick={e => e.stopPropagation()}>
            <button style={styles.cameraCloseButtonStyle} onClick={() => setPopupCamera(null)}>
              <Icon icon='mdi:close' style={styles.closeIconStyle} />
            </button>
            <CameraCard
              key={`cam-modal-${cameraMountKey}`}
              entity={popupCamera}
              hideFooter
              hideViewControls
              hideName
              view='live'
              style={styles.modalCameraCardStyle}
            />
          </div>
        </div>
      )}
    </div>
  );
}
