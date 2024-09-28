import { StackedLayout } from '@/components/catalyst/stacked-layout';
import { Authenticator } from '@aws-amplify/ui-react';
import {
  BanknotesIcon,
  BuildingLibraryIcon,
  ChartPieIcon,
  DocumentTextIcon,
  InboxIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid';
import { Outlet } from 'react-router-dom';
import { AppNavbar } from '../components/app-navbar';
import { AppSidebar } from '../components/app-sidebar';
import { authComponents, authFormFields } from '../components/auth';

type NavItem = {
  label: string;
  url: string;
  icon?: JSX.Element;
};

export type NavItems = {
  main: NavItem[];
  profile: NavItem[];
  tos: NavItem[];
  util: NavItem[];
};

export const navItems: NavItems = {
  main: [
    { label: 'Dashboard', url: '/', icon: <ChartPieIcon /> },
    { label: 'Accounts', url: '/accounts', icon: <BuildingLibraryIcon /> },
    { label: 'Expenses', url: '/expenses', icon: <BanknotesIcon /> },
    // { label: 'Expenses', url: '/expenses', icon: <ListBulletIcon /> },
  ],
  profile: [{ label: 'My profile', url: '/profile', icon: <UserIcon /> }],
  tos: [
    {
      label: 'Terms of service',
      url: '/terms-of-service',
      icon: <DocumentTextIcon />,
    },
    {
      label: 'Privacy policy',
      url: '/privacy-policy',
      icon: <ShieldCheckIcon />,
    },
    {
      label: 'Share feedback',
      url: '/share-feedback',
      icon: <LightBulbIcon />,
    },
  ],
  util: [
    {
      label: 'Search',
      url: '/search',
      icon: <MagnifyingGlassIcon />,
    },
    {
      label: 'Notifications',
      url: '/notifications',
      icon: <InboxIcon />,
    },
  ],
};

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
      {({ signOut, user }) => (
        <StackedLayout
          navbar={
            <AppNavbar signOut={signOut} navItems={navItems} user={user} />
          }
          sidebar={
            <AppSidebar signOut={signOut} navItems={navItems} user={user} />
          }
        >
          <Outlet />
        </StackedLayout>
      )}
    </Authenticator>
  );
}
