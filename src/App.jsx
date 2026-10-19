import { useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/layout/Header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('dashboard-theme') !== 'light';
  });

  const toggleTheme = () => {
    setIsDarkMode((currentMode) => {
      const newMode = !currentMode;

      localStorage.setItem('dashboard-theme', newMode ? 'dark' : 'light');

      return newMode;
    });
  };

  const theme = isDarkMode
    ? {
        '--dashboard-bg': '#09090b', // zinc-950
        '--panel-bg': '#18181b', // zinc-900
        '--border-color': '#27272a', // zinc-800
        '--text-color': '#e4e4e7', // zinc-200
        '--muted-text': '#a1a1aa', // zinc-400
        '--hover-bg': '#27272a',
        '--heat-0': '#27272a', // no activity
        '--heat-1': '#064e3b', // emerald-900
        '--heat-2': '#047857', // emerald-700
        '--heat-3': '#10b981', // emerald-500
        '--heat-4': '#6ee7b7', // emerald-300
      }
    : {
        '--dashboard-bg': '#f4f4f5', // zinc-100
        '--panel-bg': '#ffffff',
        '--border-color': '#d4d4d8', // zinc-300
        '--text-color': '#18181b', // zinc-900
        '--muted-text': '#71717a', // zinc-500
        '--hover-bg': '#e4e4e7',
        '--heat-0': '#e4e4e7', // no activity
        '--heat-1': '#d1fae5', // emerald-100
        '--heat-2': '#6ee7b7', // emerald-300
        '--heat-3': '#10b981', // emerald-500
        '--heat-4': '#047857', // emerald-700
      };

  return (
    <div style={theme} className="min-h-screen bg-[var(--dashboard-bg)] text-[var(--text-color)]">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <Dashboard />
    </div>
  );
}

export default App;
