import React from 'react';
import { createRoot } from 'react-dom/client';
import { StateProvider } from "./components/CreateContext"
import App from './App';
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);