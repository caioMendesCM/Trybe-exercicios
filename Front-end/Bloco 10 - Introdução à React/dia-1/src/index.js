import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

function tick() {
  const element = (
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  );
  root.render(element);
}

setInterval(tick, 1000);