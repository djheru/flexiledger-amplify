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
  ChevronDownIcon,
  Cog8ToothIcon,
  InboxIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid';
import { Outlet } from 'react-router-dom';
import { Avatar } from './components/catalyst/avatar';
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from './components/catalyst/dropdown';

export async function appAction() {
  return null;
}

export async function appLoader() {
  return null;
}

const navItems = [
  { label: 'Home', url: '/' },
  { label: 'Accounts', url: '/accounts' },
  { label: 'Expenses', url: '/expenses' },
  { label: 'Profile', url: '/profile' },
];

function TeamDropdownMenu() {
  return (
    <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
      <DropdownItem href="/teams/1/settings">
        <Cog8ToothIcon />
        <DropdownLabel>Settings</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/teams/1">
        <Avatar slot="icon" src="/tailwind-logo.svg" />
        <DropdownLabel>Tailwind Labs</DropdownLabel>
      </DropdownItem>
      <DropdownItem href="/teams/2">
        <Avatar
          slot="icon"
          initials="WC"
          className="bg-purple-500 text-white"
        />
        <DropdownLabel>Workcation</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/teams/create">
        <PlusIcon />
        <DropdownLabel>New team&hellip;</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  );
}

function AppNavbar() {
  return (
    <Navbar>
      <Dropdown>
        <DropdownButton as={NavbarItem} className="max-lg:hidden">
          <Avatar src="/public/tailwind-logo.svg" />
          <NavbarLabel>Tailwind Labs</NavbarLabel>
          <ChevronDownIcon />
        </DropdownButton>
        <TeamDropdownMenu />
        <NavbarDivider className="max-lg:hidden" />
        <NavbarSection className="max-lg:hidden">
          {navItems.map(({ label, url }) => (
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
              <DropdownItem href="/my-profile">
                <UserIcon />
                <DropdownLabel>My profile</DropdownLabel>
              </DropdownItem>
              <DropdownItem href="/settings">
                <Cog8ToothIcon />
                <DropdownLabel>Settings</DropdownLabel>
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem href="/privacy-policy">
                <ShieldCheckIcon />
                <DropdownLabel>Privacy policy</DropdownLabel>
              </DropdownItem>
              <DropdownItem href="/share-feedback">
                <LightBulbIcon />
                <DropdownLabel>Share feedback</DropdownLabel>
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem href="/logout">
                <ArrowRightStartOnRectangleIcon />
                <DropdownLabel>Sign out</DropdownLabel>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarSection>
      </Dropdown>
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
