import 'index.css';
// import 'tailwindcss/tailwind.css';
import { createBrowserRouter } from 'react-router-dom';
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

export default createBrowserRouter([
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
            element: <Dashboard />
          },
          {
            path: 'accounts',
            element: <Accounts />,
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
