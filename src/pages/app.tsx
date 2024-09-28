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
  Authenticator,
  Button,
  Heading,
  Image,
  Text,
  useAuthenticator,
  useTheme,
  View,
} from '@aws-amplify/ui-react';
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

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.medium}>
        <Image
          className="size-72"
          alt="Flexiledger logo"
          src="/logo-full.svg"
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={4}
        >
          Sign in to your account
        </Heading>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTotp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email address',
      order: 1,
    },
    password: {
      placeholder: 'Enter your password',
      order: 2,
    },
  },
  signUp: {
    email: {
      placeholder: 'Enter your email address',
      order: 1,
    },
    password: {
      label: 'Password:',
      placeholder: 'Enter your password:',
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      label: 'Confirm password:',
      order: 3,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  forgotPassword: {
    username: {
      placeholder: 'Enter your email',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTotp: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

export function App() {
  return (
    <Authenticator formFields={formFields} components={components}>
      <StackedLayout
        navbar={<AppNavbar />}
        sidebar={<Sidebar>{/* Your sidebar content */}</Sidebar>}
      >
        <Outlet />
      </StackedLayout>
    </Authenticator>
  );
}

// export function App() {
//   return (
//     <StackedLayout
//       navbar={<AppNavbar />}
//       sidebar={<Sidebar>{/* Your sidebar content */}</Sidebar>}
//     >
//       <Outlet />
//     </StackedLayout>
//   );
// }
