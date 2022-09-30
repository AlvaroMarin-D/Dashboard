import React from 'react';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { registerLicense } from '@syncfusion/ej2-base';
import { createRoot } from 'react-dom/client';

registerLicense(process.env.REACT_APP_SYNC_KEY);

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
);

