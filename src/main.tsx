import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AppProvider } from './context';
import '@fontsource/big-shoulders-display/latin-700';
import '@fontsource/big-shoulders-display/latin-800';
import '@fontsource/big-shoulders-display/latin-900';
import '@fontsource/ibm-plex-mono/latin-400';
import '@fontsource/ibm-plex-mono/latin-500';
import '@fontsource/ibm-plex-mono/latin-600';
import '@fontsource/barlow/latin-400';
import '@fontsource/barlow/latin-500';
import '@fontsource/barlow/latin-600';
import '@fontsource/barlow/latin-700';
import './styles/global.css';
import './styles/sections.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
);
