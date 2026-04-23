import { useState } from 'react';
import { HassConnect } from '@hakit/core';
import { ThemeProvider, Row, Column } from '@hakit/components';
import { MainDashboard } from './components/MainDashboard.tsx';
import { AstroDashboard } from './components/AstroPanel';
import { SecurityDashboard } from './components/SecurityDashboard';
import { appTheme } from './styles/theme.ts';
import { CatsDashboard } from './components/CatsDashboard.tsx';
import { CommandCenterDashboard } from './components/CommandCenterDashboard.tsx';
import { Icon } from '@iconify/react';
import { AutoDashboardController } from './components/AutoDashboardController.tsx';
import { MediaDashboard } from './components/MediaDashboard.tsx';

export function App() {
  const [activeView, setActiveView] = useState('overview');
  const haUrl = import.meta.env.VITE_HA_URL as string;

  return (
    <HassConnect hassUrl={haUrl}>
      <ThemeProvider theme={appTheme} />
      <AutoDashboardController activeView={activeView} setActiveView={setActiveView} />
      <Row
        fullWidth
        wrap='nowrap'
        style={{
          backgroundColor: 'var(--ha-custom-colors-app-bg)',
          height: '100vh',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
        }}
      >
        {/* SIDEBAR NAVIGATION */}
        <Column
          style={{
            width: '84px', // Slightly wider for a comfortable touch target
            backgroundColor: 'rgba(255, 255, 255, 0.02)', // A very subtle lightness to separate it from the background
            borderRight: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '2rem 0',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem', // Reduced gap since we are using larger touch targets
            zIndex: 10,
          }}
        >
          {[
            { id: 'overview', icon: 'mdi:home-variant-outline', activeIcon: 'mdi:home-variant' },
            { id: 'cats', icon: 'mdi:cat', activeIcon: 'mdi:cat' },
            { id: 'astro', icon: 'mdi:telescope', activeIcon: 'mdi:telescope' },
            { id: 'security', icon: 'mdi:shield-outline', activeIcon: 'mdi:shield' },
            { id: 'media', icon: 'mdi:music', activeIcon: 'mdi:music' },
            { id: 'office', icon: 'mdi:chart-bar', activeIcon: 'mdi:chart-bar' },
          ].map(item => {
            const isActive = activeView === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveView(item.id)}
                title={item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px', // Sleek rounded square (Apple style)
                  backgroundColor: isActive ? 'rgba(3, 169, 244, 0.15)' : 'transparent', // Glowing pill background when active
                  color: isActive ? '#03a9f4' : '#71717a', // Bright blue when active, muted grey when inactive
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Icon
                  icon={isActive ? item.activeIcon : item.icon}
                  style={{
                    fontSize: '28px',
                    filter: isActive ? 'drop-shadow(0px 2px 4px rgba(3,169,244,0.3))' : 'none',
                  }}
                />
              </div>
            );
          })}
        </Column>

        {/* MAIN CONTENT AREA */}
        <Column key={activeView} style={{ flex: 1, minWidth: 0, height: '100%', position: 'relative' }}>
          {activeView === 'overview' && <MainDashboard />}
          {activeView === 'cats' && <CatsDashboard />}
          {activeView === 'astro' && <AstroDashboard />}
          {activeView === 'security' && <SecurityDashboard />}
          {activeView === 'media' && <MediaDashboard />}
          {activeView === 'office' && <CommandCenterDashboard />}
        </Column>
      </Row>
    </HassConnect>
  );
}

export default App;
