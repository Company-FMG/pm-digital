import React from 'react';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from "./contexts/ModalContext"
import App from './AppRoutes';
import './index.css'
import { MapProvider } from './contexts/MapContext';
import { CredentialsProvider } from './contexts/CredentialsContext';
import { DenunciaProvider } from './contexts/DenunciaContext';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <CredentialsProvider>
      <ModalProvider>
        <DenunciaProvider>
        <MapProvider>
          <App />
        </MapProvider>
        </DenunciaProvider>
      </ModalProvider>
    </CredentialsProvider>
  </React.StrictMode>
);