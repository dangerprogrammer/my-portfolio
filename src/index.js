import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesDir from './RoutesDir';
import './index.css';

console.clear();
const root = ReactDOM.createRoot(document.body);
root.render(
  <React.StrictMode>
    <RoutesDir/>
  </React.StrictMode>
);