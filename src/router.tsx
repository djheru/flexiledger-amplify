import 'index.css';
// import 'tailwindcss/tailwind.css';
import { createBrowserRouter } from 'react-router-dom';
import {
  Account,
  accountAction,
  accountLoader,
  accountRemoveAction,
} from './pages/account';
import { AccountsPage, accountsAction, accountsLoader } from './pages/accounts';
import { App, appAction, appLoader } from './pages/app';
import {
  DashboardPage,
  dashboardAction,
  dashboardLoader,
} from './pages/dashboard';
import ErrorPage from './pages/error';
import { ExpensesPage, expensesAction, expensesLoader } from './pages/expenses';
import { PrivacyPolicy } from './pages/privacy-policy';
import {
  ProfilePage,
  profileAction,
  profileCategoryRemoveAction,
  profileLoader,
} from './pages/profile';
import { ShareFeedback } from './pages/share-feedback';
import { TermsOfService } from './pages/terms-of-service';

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    action: appAction, // create new account or expense
    loader: appLoader, // composite load of accounts and expenses
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
            loader: dashboardLoader, // Load list of accounts and expenses
            action: dashboardAction, // Create new account or expense
          },
          {
            path: 'accounts',
            element: <AccountsPage />,
            loader: accountsLoader, // Load list of accounts
            action: accountsAction, // Create account
          },
          {
            path: 'accounts/:accountId',
            element: <Account />,
            loader: accountLoader, // Load account  with payments
            action: accountAction, // Update account or add payment
          },
          {
            path: 'accounts/:accountId/remove',
            action: accountRemoveAction, // Delete an account record
            errorElement: <div>Oops! There was an error.</div>,
          },
          {
            path: 'expenses',
            element: <ExpensesPage />,
            loader: expensesLoader, // Load list of expenses
            action: expensesAction, // Create or update expense
          },
          {
            path: 'expenses/:expenseId',
            action: accountAction, // Update expenses
          },
          {
            path: 'expenses/:expenseId/remove',
            action: accountRemoveAction, // Delete an expense record
            errorElement: <div>Oops! There was an error.</div>,
          },
          {
            path: 'profile',
            element: <ProfilePage />,
            loader: profileLoader, // Load user profile
            action: profileAction, // Set notification preferences and categories
          },
          {
            path: 'profile/:categoryId/remove',
            action: profileCategoryRemoveAction, // Remove a category from user profile
            errorElement: <div>Oops! There was an error.</div>,
          },
          {
            path: 'terms-of-service',
            element: <TermsOfService />,
          },
          {
            path: 'privacy-policy',
            element: <PrivacyPolicy />,
          },
          {
            path: 'share-feedback',
            element: <ShareFeedback />,
          },
        ],
      },
    ],
  },
]);
