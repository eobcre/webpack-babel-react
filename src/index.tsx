import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root_element = document.querySelector('#root');
if (!root_element) throw new Error('Cannot find root element.');

const root = createRoot(root_element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
