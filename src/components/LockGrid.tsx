import { useEntity } from '@hakit/core';
import type { EntityName } from '@hakit/core';
import { Icon } from '@iconify/react';
import { GlassCard } from './MetricUi.tsx';

type SecurityEntity = `lock.${string}` | `cover.${string}`;

interface LockService {
  lock: () => void;
  unlock: () => void;
}
interface CoverService {
  openCover: () => void;
  closeCover: () => void;
}

function CustomSecurityItem({ entityId }: { entityId: SecurityEntity }) {
  const entity = useEntity(entityId as EntityName);
  if (!entity) return null;

  const domain = entityId.split('.')[0];
  // Consolidating both states into one "Secure" check
  const isSecure = domain === 'lock' ? entity.state === 'locked' : entity.state === 'closed';
  const color = isSecure ? '#4caf50' : '#ff4444';

  const toggleStatus = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (domain === 'lock') {
      const lockService = entity.service as unknown as LockService;
      // Use isSecure here
      if (isSecure) {
        lockService.unlock();
      } else {
        lockService.lock();
      }
    } else {
      const coverService = entity.service as unknown as CoverService;
      // FIX: Changed isClosed to isSecure
      if (isSecure) {
        coverService.openCover();
      } else {
        coverService.closeCover();
      }
    }
  };

  const getIcon = () => {
    if (domain === 'lock') return isSecure ? 'mdi:lock' : 'mdi:lock-open-variant';
    return isSecure ? 'mdi:garage-variant' : 'mdi:garage-open-variant';
  };

  return (
    <div
      onClick={toggleStatus}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 8px',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: '12px',
        cursor: 'pointer',
        gap: '8px',
        border: `1px solid ${isSecure ? 'transparent' : 'rgba(255, 68, 68, 0.2)'}`,
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `${color}15`,
          color: color,
        }}
      >
        <Icon icon={getIcon()} style={{ fontSize: '1.6rem' }} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase', lineHeight: 1 }}>{entity.state}</div>
        <div
          style={{
            fontSize: '0.6rem',
            fontWeight: 800,
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginTop: '4px',
          }}
        >
          TAP TO {isSecure ? (domain === 'lock' ? 'UNLOCK' : 'OPEN') : domain === 'lock' ? 'LOCK' : 'CLOSE'}
        </div>
      </div>
    </div>
  );
}

export function LockGrid() {
  const securityItems = [
    { name: 'FRONT DOOR', entity: 'lock.front_door' as SecurityEntity },
    { name: 'BACK DOOR', entity: 'lock.back_door' as SecurityEntity },
    { name: 'GARAGE DOOR', entity: 'cover.garage_door' as SecurityEntity },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
        minWidth: '700px',
      }}
    >
      {securityItems.map(item => (
        <GlassCard key={item.name} title={item.name}>
          <CustomSecurityItem entityId={item.entity} />
        </GlassCard>
      ))}
    </div>
  );
}
