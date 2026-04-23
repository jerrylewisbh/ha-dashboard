import { useEffect, useRef, useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useEntity } from '@hakit/core';
import type { EntityName } from '@hakit/core';

// 1. YOUR CONFIGURATION
const DASHBOARD_RULES = [
  {
    entityId: 'binary_sensor.litter_box_occupancy_sensor',
    targetView: 'cats',
    timeoutMs: 120000,
  },
  {
    entityId: 'binary_sensor.feeding_area_presence_sensor_occupancy',
    targetView: 'cats',
    timeoutMs: 120000,
  },
];

// ---------------------------------------------------------
// CONTROLLER LOGIC
// ---------------------------------------------------------

interface ControllerProps {
  activeView: string; // Matched to your App.tsx
  setActiveView: Dispatch<SetStateAction<string>>;
}

export function AutoDashboardController({ activeView, setActiveView }: ControllerProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // If the user manually clicks the sidebar to go to a different dashboard,
  // kill the timeout so we don't yank them back to the Overview randomly.
  useEffect(() => {
    const isAutoTriggeredView = DASHBOARD_RULES.some(rule => rule.targetView === activeView);
    if (!isAutoTriggeredView && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [activeView]);

  // Fired whenever any Watcher says "I just triggered!"
  const handleTrigger = useCallback(
    (targetView: string, timeoutMs: number) => {
      setActiveView(targetView);

      // Reset the central timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveView('overview');
      }, timeoutMs);
    },
    [setActiveView]
  );

  // Fired whenever any Watcher says "I just cleared!"
  const handleClear = useCallback(
    (targetView: string) => {
      // Only return to overview if we are currently looking at the view that was triggered
      setActiveView(currentView => {
        if (currentView === targetView) {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          return 'overview';
        }
        return currentView;
      });
    },
    [setActiveView]
  );

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {DASHBOARD_RULES.map(rule => (
        <EntityWatcher
          key={rule.entityId}
          entityId={rule.entityId as EntityName}
          triggerState='on'
          onTrigger={() => handleTrigger(rule.targetView, rule.timeoutMs)}
          onClear={() => handleClear(rule.targetView)}
        />
      ))}
    </>
  );
}

// ---------------------------------------------------------
// INVISIBLE WATCHER COMPONENT
// ---------------------------------------------------------

interface WatcherProps {
  entityId: EntityName;
  triggerState: string;
  onTrigger: () => void;
  onClear: () => void;
}

function EntityWatcher({ entityId, triggerState, onTrigger, onClear }: WatcherProps) {
  const entity = useEntity(entityId);
  const prevState = useRef(entity?.state);

  useEffect(() => {
    const currentState = entity?.state;

    // Rising Edge
    if (prevState.current !== triggerState && currentState === triggerState) {
      onTrigger();
    }

    // Falling Edge
    if (prevState.current === triggerState && currentState !== triggerState) {
      onClear();
    }

    prevState.current = currentState;
  }, [entity?.state, triggerState, onTrigger, onClear]);

  return null;
}
