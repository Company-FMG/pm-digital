import React from 'react';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from "./components/ModalContext"
import App from './App';
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);