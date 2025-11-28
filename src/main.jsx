import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './assets/pico.cyan.css'; // import pico first so tailwind wont overwrite it
import './index.css';
import App from './App.jsx';
import AppDemo from './AppDemo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
