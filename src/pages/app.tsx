import { Sidebar } from '@/components/catalyst/sidebar';
import { StackedLayout } from '@/components/catalyst/stacked-layout';
import { Authenticator } from '@aws-amplify/ui-react';
import { Outlet } from 'react-router-dom';
import { AppNavbar } from '../components/app-navbar';
import { authComponents, authFormFields } from '../components/auth';

export async function appAction() {
  console.log('appAction');
  return null;
}

export async function appLoader() {
  console.log('appLoader');
  return null;
}

export function App() {
  return (
    <Authenticator formFields={authFormFields} components={authComponents}>
      {({ signOut, user }) => {
        console.log('user', user);
        return (
          <StackedLayout
            navbar={<AppNavbar signOut={signOut} />}
            sidebar={<Sidebar>{/* Your sidebar content */}</Sidebar>}
          >
            <Outlet />
          </StackedLayout>
        );
      }}
    </Authenticator>
  );
}
