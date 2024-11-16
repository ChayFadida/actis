'use client';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { RootLayout } from '@/components/Layout/RootLayout/RootLayout';
import { LoadingOverlay } from '@/components/Layout/LoadingOverlay/LoadingOverlay';
import { AccessibilityMenu } from '@/components/Accessibility/AccessibilityMenu';
import { theme } from '@/config/theme';
import { useEffect, useState } from 'react';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hideLoader = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
      return () => window.removeEventListener('load', hideLoader);
    }
  }, []);

  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Notifications position="top-center" zIndex={1000} />
          {isLoading && <LoadingOverlay />}
          <RootLayout>
            {children}
          </RootLayout>
          <AccessibilityMenu />
        </MantineProvider>
      </body>
    </html>
  );
} 