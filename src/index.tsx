import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { WeatherProvider } from './weatherProvider';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </StrictMode>
);
