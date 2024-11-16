import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { RootLayout } from '@/components/Layout/RootLayout/RootLayout';
import { AccessibilityMenu } from '@/components/Accessibility/AccessibilityMenu';
import { theme } from '@/config/theme';
import '@mantine/core/styles.css';

export const metadata = {
  title: 'אקטיס - שירותי ניקיון, הסעות והובלות',
  description: 'שירותי ניקיון מקצועיים, הסעות וטיולים, והובלות ושליחויות בפריסה ארצית',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <MantineProvider 
          theme={theme}
          defaultColorScheme="light"
        >
          <RootLayout>
            {children}
          </RootLayout>
          <AccessibilityMenu />
        </MantineProvider>
      </body>
    </html>
  );
} 