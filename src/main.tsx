import React from 'react';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from "./components/ModalContext"
import App from './AppRoutes';
import './index.css'
import { MapProvider } from './components/MapContext';

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