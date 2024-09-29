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
  ChevronDownIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from '@heroicons/react/16/solid';
import { AuthUser } from 'aws-amplify/auth';
import { NavItems } from '../../pages/app';
import { Link } from '../catalyst/link';

export type AppNavbarProps = {
  navItems: NavItems;
  signOut: UseAuthenticator['signOut'] | undefined;
  user?: AuthUser;
};

export function AppNavbar({ navItems, signOut, user }: AppNavbarProps) {
  return (
    <Navbar className="gap-0">
      <Link href="/" aria-label="home">
        <Image
          className="mt-1 size-10"
          src="/logo-small.svg"
          alt="Flexiledger logo"
        />
      </Link>
      <NavbarLabel className="mb-2 ml-2 text-xl font-bold">
        FlexiLedger
      </NavbarLabel>
      <NavbarDivider className="ml-10 mr-2 max-lg:hidden" />
      <NavbarSection className="max-lg:hidden">
        {navItems.main.map(({ icon, label, url }) => (
          <>
            <NavbarItem key={label} href={url}>
              {icon ? icon : null}
              <NavbarLabel className="font-semibold">{label}</NavbarLabel>
            </NavbarItem>
            <NavbarDivider className="mx-0 max-lg:hidden" />
          </>
        ))}
      </NavbarSection>
      <NavbarSpacer />
      <NavbarSection className="max-md:hidden">
        <NavbarItem href="/search" aria-label="Search">
          <MagnifyingGlassIcon />
        </NavbarItem>
        <NavbarItem href="/inbox" aria-label="Inbox">
          <InboxIcon />
        </NavbarItem>
        <Dropdown>
          <DropdownButton plain>
            <UserCircleIcon />
            {user?.signInDetails?.loginId ? (
              <span className="text-xs">{user?.signInDetails?.loginId}</span>
            ) : null}
            <ChevronDownIcon />
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
