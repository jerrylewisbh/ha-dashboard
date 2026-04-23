// .storybook/preview.jsx
import React from 'react';
import { HassConnect } from '@hakit/core';
import { ThemeProvider } from '@hakit/components';

export const parameters = {
  layout: 'fullscreen',
};

export const decorators = [
  Story => (
    <HassConnect hassUrl={import.meta.env.VITE_HA_URL} hassToken={import.meta.env.VITE_HA_TOKEN}>
      <ThemeProvider>
        <div
          style={{
            width: '100%',
            height: '100vh',
            boxSizing: 'border-box',
            background: 'var(--ha-background-color, #040910)',
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
    </HassConnect>
  ),
];
