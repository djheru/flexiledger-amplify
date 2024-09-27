import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter';
import 'index.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import appRouter from './router';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
