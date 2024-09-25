import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from '@/components/catalyst/navbar';
import { Sidebar } from '@/components/catalyst/sidebar';
import { StackedLayout } from '@/components/catalyst/stacked-layout';
import {
  ArrowRightStartOnRectangleIcon,
  DocumentTextIcon,
  InboxIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid';
import { Outlet } from 'react-router-dom';
import { Avatar } from '../components/catalyst/avatar';
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '../components/catalyst/dropdown';

export async function appAction() {
  console.log('appAction');
  return null;
}

export async function appLoader() {
  console.log('appLoader');
  return null;
}

const navItems = {
  main: [
    { label: 'Dashboard', url: '/' },
    { label: 'Accounts', url: '/accounts' },
    { label: 'Expenses', url: '/expenses' },
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
};

function AppNavbar() {
  return (
    <Navbar>
      <Avatar src="/tailwind-logo.svg" />
      <NavbarLabel>FlexiLedger</NavbarLabel>{' '}
      <NavbarDivider className="mx-4 max-lg:hidden" />
      <NavbarSection className="max-lg:hidden">
        {navItems.main.map(({ label, url }) => (
          <NavbarItem key={label} href={url}>
            {label}
          </NavbarItem>
        ))}
      </NavbarSection>
      <NavbarSpacer />
      <NavbarSection>
        <NavbarItem href="/search" aria-label="Search">
          <MagnifyingGlassIcon />
        </NavbarItem>
        <NavbarItem href="/inbox" aria-label="Inbox">
          <InboxIcon />
        </NavbarItem>
        <Dropdown>
          <DropdownButton as={NavbarItem}>
            <Avatar src="/profile-photo.jpg" square />
          </DropdownButton>
          <DropdownMenu className="min-w-64" anchor="bottom end">
            {navItems.profile.map(({ label, url, icon }, i) => (
              <DropdownItem key={i} href={url}>
                {icon}
                <DropdownLabel>{label}</DropdownLabel>
              </DropdownItem>
            ))}
            <DropdownDivider />
            {navItems.tos.map(({ label, url, icon }, i) => (
              <DropdownItem key={i} href={url}>
                {icon}
                <DropdownLabel>{label}</DropdownLabel>
              </DropdownItem>
            ))}
            <DropdownDivider />
            <DropdownItem href="/logout">
              <ArrowRightStartOnRectangleIcon />
              <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarSection>
    </Navbar>
  );
}

export function App() {
  return (
    <StackedLayout
      navbar={<AppNavbar />}
      sidebar={<Sidebar>{/* Your sidebar content */}</Sidebar>}
    >
      <Outlet />
    </StackedLayout>
  );
}
