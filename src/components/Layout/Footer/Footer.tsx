'use client';

import { Container, Group, Text, Stack, ActionIcon, Grid } from '@mantine/core';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandFacebook, IconMail } from '@tabler/icons-react';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container size="lg">
        <Grid gutter={40}>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap="md">
              <Text size="xl" fw={700}>שם החברה</Text>
              <Text size="sm" c="dimmed">
                מובילים עסקים קדימה עם פתרונות טכנולוגיים חדשניים
              </Text>
            </Stack>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap="md">
              <Text fw={500}>שירותים</Text>
              <Stack gap="xs">
                <Text component="a" href="/services" size="sm">אנליטיקה עסקית</Text>
                <Text component="a" href="/services" size="sm">פתרונות ענן</Text>
                <Text component="a" href="/services" size="sm">אבטחת מידע</Text>
                <Text component="a" href="/services" size="sm">פיתוח מותאם</Text>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap="md">
              <Text fw={500}>החברה</Text>
              <Stack gap="xs">
                <Text component="a" href="/about" size="sm">אודות</Text>
                <Text component="a" href="/portfolio" size="sm">פרויקטים</Text>
                <Text component="a" href="/contact" size="sm">צור קשר</Text>
                <Text component="a" href="/careers" size="sm">דרושים</Text>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap="md">
              <Text fw={500}>התחברו אלינו</Text>
              <Group gap="xs">
                <ActionIcon size="lg" variant="subtle" component="a" href="#" target="_blank">
                  <IconBrandTwitter size={24} />
                </ActionIcon>
                <ActionIcon size="lg" variant="subtle" component="a" href="#" target="_blank">
                  <IconBrandLinkedin size={24} />
                </ActionIcon>
                <ActionIcon size="lg" variant="subtle" component="a" href="#" target="_blank">
                  <IconBrandFacebook size={24} />
                </ActionIcon>
                <ActionIcon size="lg" variant="subtle" component="a" href="mailto:contact@company.com">
                  <IconMail size={24} />
                </ActionIcon>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>

        <Text size="sm" c="dimmed" ta="center" mt={50}>
          © {currentYear} שם החברה. כל הזכויות שמורות.
        </Text>
      </Container>
    </footer>
  );
}; 