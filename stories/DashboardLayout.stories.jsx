// stories/MainDashboard.stories.jsx
import React from 'react'; // important
import { MainDashboard } from '../src/DashboardLayout.tsx'; // adjust path if needed

export default {
  title: 'Dashboards/MainDashboard',
  component: MainDashboard,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <MainDashboard />;
