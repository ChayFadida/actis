'use client';

import { AppShell, Container, Group, Button, Menu, Image } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

interface NavigationItem {
  label: string;
  path?: string;
  items?: { label: string; path: string; }[];
}

const navigation: NavigationItem[] = [
  { label: 'דף הבית', path: '/' },
  {
    label: 'שירותי אקטיס',
    items: [
      { label: 'שירותי ניקיון ואחזקה', path: '/cleaning' },
      { label: 'שירותי הסעות וטיולים', path: '/travel' },
      { label: 'הובלות ושליחויות', path: '/transport' },
    ]
  },
  { label: 'אודות', path: '/about' },
  { label: 'צור קשר', path: '/contact' },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <AppShell.Header h={60}>
      <Container size="lg" className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo-1-150x86.png"
            alt="אקטיס"
            h={50}
            w="auto"
            fit="contain"
          />
        </Link>

        <Group gap={5}>
          {navigation.map((item) => 
            'items' in item && item.items ? (
              <Menu key={item.label} trigger="hover" position="bottom">
                <Menu.Target>
                  <Button variant="subtle" size="sm" color="violet">
                    {item.label}
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  {item.items.map((subItem) => (
                    <Menu.Item
                      key={subItem.path}
                      component={Link}
                      href={subItem.path}
                    >
                      {subItem.label}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            ) : (
              <Button
                key={item.path}
                component={Link}
                href={item.path || '/'}
                variant={pathname === item.path ? 'light' : 'subtle'}
                size="sm"
                color="violet"
              >
                {item.label}
              </Button>
            )
          )}
        </Group>
      </Container>
    </AppShell.Header>
  );
}; 