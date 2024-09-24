import 'index.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
// import 'tailwindcss/tailwind.css';
import { RouterProvider } from 'react-router-dom';
import appRouter from './router';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
