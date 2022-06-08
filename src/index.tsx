import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Suspense fallback={null}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);
