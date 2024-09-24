import { Navbar } from '@/components/catalyst/navbar';
import { Sidebar } from '@/components/catalyst/sidebar';
import { StackedLayout } from '@/components/catalyst/stacked-layout';
import { Outlet } from 'react-router-dom';

export async function appAction() {
  return null;
}

export async function appLoader() {
  return null;
}

export function App() {
  return (
    <StackedLayout
      navbar={<Navbar>{/* Your navbar content */}</Navbar>}
      sidebar={<Sidebar>{/* Your sidebar content */}</Sidebar>}
    >
      <Outlet />
    </StackedLayout>
  );
}
