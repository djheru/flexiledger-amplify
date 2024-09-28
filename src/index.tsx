import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter';
import { Amplify } from 'aws-amplify';
import 'index.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import outputs from '../amplify_outputs.json';
import appRouter from './router';

Amplify.configure(outputs);

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
