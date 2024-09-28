import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/catalyst/dropdown';
import { Image } from '@aws-amplify/ui-react';
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  UserCircleIcon,
} from '@heroicons/react/16/solid';
import { AppNavbarProps } from './app-navbar';
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from './catalyst/sidebar';

export function AppSidebar({ navItems, signOut, user }: AppNavbarProps) {
  return (
    <Sidebar className="">
      <SidebarHeader>
        <SidebarLabel className="text-lg font-bold">
          <Image
            className="mr-2 size-8"
            src="/logo-small.svg"
            alt="Flexiledger logo sidebar"
          />
          <span className="align-top">FlexiLedger</span>
        </SidebarLabel>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          {navItems.main.map(({ icon, label, url }) => (
            <SidebarItem key={label} href={url}>
              {icon ? icon : null}
              <SidebarLabel className="font-semibold">{label}</SidebarLabel>
            </SidebarItem>
          ))}
        </SidebarSection>

        <SidebarSection>
          {navItems.util.map(({ label, icon, url }) => (
            <SidebarItem className="text-left" key={label} href={url}>
              {icon ? icon : null}
              <SidebarLabel className="text-xs">{label}</SidebarLabel>
            </SidebarItem>
          ))}
        </SidebarSection>
      </SidebarBody>
      <SidebarFooter>
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
      </SidebarFooter>
    </Sidebar>
  );
}
