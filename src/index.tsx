import 'index.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
// import 'tailwindcss/tailwind.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error';
import Index from './routes';
import Contact, {
  action as contactAction,
  loader as contactLoader
} from './routes/contact';
import { action as destroyAction } from './routes/destroy';
import EditContact, { action as editAction } from './routes/edit';
import Root, {
  action as rootAction,
  loader as rootLoader
} from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    action: rootAction,
    loader: rootLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />
          },
          {
            path: 'contacts/:contactId',
            element: <Contact />,
            loader: contactLoader,
            action: contactAction
          },
          {
            path: 'contacts/:contactId/edit',
            element: <EditContact />,
            loader: contactLoader,
            action: editAction
          },
          {
            path: 'contacts/:contactId/destroy',
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>
          }
        ]
      }
    ]
  }
]);

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
