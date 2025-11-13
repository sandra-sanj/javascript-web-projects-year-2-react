import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import './assets/pico.cyan.css';
import App from './App.jsx';
import AppDemo from './AppDemo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
