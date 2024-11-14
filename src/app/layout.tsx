import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { RootLayout } from '@/components/Layout/RootLayout/RootLayout';
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
    <html lang="he" dir="rtl">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MantineProvider 
          theme={theme} 
          defaultColorScheme="light"
          cssVariablesSelector="html[dir=rtl]"
        >
          <RootLayout>
            {children}
          </RootLayout>
        </MantineProvider>
      </body>
    </html>
  );
} 