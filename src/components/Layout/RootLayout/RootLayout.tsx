'use client';

import { AppShell } from '@mantine/core';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
      styles={{
        main: {
          background: 'var(--mantine-color-gray-0)',
        },
      }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        {children}
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}; 