import React from 'react';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from "./contexts/ModalContext"
import App from './AppRoutes';
import './index.css'
import { MapProvider } from './contexts/MapContext';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ModalProvider>
      <MapProvider>
        <App />
      </MapProvider>
    </ModalProvider>
  </React.StrictMode>
);