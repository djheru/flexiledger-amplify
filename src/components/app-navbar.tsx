import { Avatar } from '@/components/catalyst/avatar';
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/catalyst/dropdown';
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from '@/components/catalyst/navbar';
import { Image, UseAuthenticator } from '@aws-amplify/ui-react';
import {
  ArrowRightStartOnRectangleIcon,
  DocumentTextIcon,
  InboxIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid';

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

export function AppNavbar({
  signOut,
}: {
  signOut: UseAuthenticator['signOut'] | undefined;
}) {
  return (
    <Navbar className="gap-1">
      <Image src="/logo-small.svg" alt="Flexiledger logo" />
      <NavbarLabel className="text-lg font-bold">FlexiLedger</NavbarLabel>{' '}
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
            <DropdownItem onClick={() => (signOut ? signOut() : undefined)}>
              <ArrowRightStartOnRectangleIcon />
              <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarSection>
    </Navbar>
  );
}
