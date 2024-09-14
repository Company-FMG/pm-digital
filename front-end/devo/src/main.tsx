import React from 'react';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from "./contexts/ModalContext"
import App from './AppRoutes';
import './index.css'
import { MapProvider } from './contexts/MapContext';
import { CredentialsProvider } from './contexts/CredentialsContext';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <CredentialsProvider>
      <ModalProvider>
        <MapProvider>
          <App />
        </MapProvider>
      </ModalProvider>
    </CredentialsProvider>
  </React.StrictMode>
);