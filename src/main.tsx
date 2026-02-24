import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Netlify Identity redirect for CMS
if (window.location.hash === '#invite_token' || window.location.hash.startsWith('#recovery_token')) {
  window.location.href = '/admin/index.html' + window.location.hash;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
