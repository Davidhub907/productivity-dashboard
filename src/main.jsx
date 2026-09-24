import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import DashboardPanel from './components/dashboard/DashboardPanel.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DashboardPanel />
    <App />
  </StrictMode>
);
