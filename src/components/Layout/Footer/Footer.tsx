'use client';

import { Container, Group, Stack, Text, Title, List, ThemeIcon, SimpleGrid, Anchor } from '@mantine/core';
import { 
  IconPhone, 
  IconMail, 
  IconMapPin, 
  IconClock,
  IconBus,
  IconTruck,
  IconSpray,
  IconBrandFacebook,
  IconBuildingStore,
  IconBrandWhatsapp
} from '@tabler/icons-react';
import styles from './Footer.module.css';

export const Footer = () => {
  const phoneNumber = '04-8515150';
  const whatsappLink = `https://wa.me/972505378402`;
  const emailAddress = 'info@actis.co.il';

  return (
    <footer className={styles.footer}>
      <Container size="lg" py="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={50}>
          <Stack className={styles.section}>
            <Title order={3} mb="md">צור קשר</Title>
            <Group gap="xs">
              <IconBuildingStore size={20} />
              <Text>סניף חיפה: דרך העצמאות 90 א׳</Text>
            </Group>
            <Group gap="xs">
              <IconPhone size={20} />
              <Text>טלפון: {phoneNumber}</Text>
            </Group>
            <Group gap="xs">
              <IconBrandWhatsapp size={20} />
              <Anchor
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                c="inherit"
                className={styles.link}
              >
                WhatsApp
              </Anchor>
            </Group>
            <Group gap="xs">
              <IconMail size={20} />
              <Anchor
                href={`mailto:${emailAddress}`}
                c="inherit"
                className={styles.link}
              >
                {emailAddress}
              </Anchor>
            </Group>
            <Group gap="xs">
              <IconBrandFacebook size={20} />
              <Anchor
                href="https://www.facebook.com/actis.cleaning.services"
                target="_blank"
                rel="noopener noreferrer"
                c="inherit"
                className={styles.link}
              >
                Actis Israel
              </Anchor>
            </Group>
            <Group gap="xs">
              <IconClock size={20} />
              <Text>זמינים 24/7</Text>
            </Group>
          </Stack>

          <Stack className={styles.section}>
            <Title order={3} mb="md">שירותי ניקיון</Title>
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="violet" size={20} radius="xl">
                  <IconSpray size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>ניקיון משרדים</List.Item>
              <List.Item>ניקיון בתי ספר ומוסדות</List.Item>
              <List.Item>ניקיון מפעלים ומחסנים</List.Item>
              <List.Item>ניקיון חדרי מדרגות</List.Item>
              <List.Item>ניקיון לאחר שיפוץ</List.Item>
              <List.Item>ניקיון שטיחים וריפודים</List.Item>
            </List>
          </Stack>

          <Stack className={styles.section}>
            <Title order={3} mb="md">שירותי הסעות</Title>
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="green" size={20} radius="xl">
                  <IconBus size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>הסעות תלמידים</List.Item>
              <List.Item>הסעות עובדים</List.Item>
              <List.Item>הסעות לאירועים</List.Item>
              <List.Item>הסעות VIP</List.Item>
              <List.Item>טיולים מאורגנים</List.Item>
              <List.Item>שירות 24/7</List.Item>
            </List>
          </Stack>

          <Stack className={styles.section}>
            <Title order={3} mb="md">שירותי הובלות</Title>
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="blue" size={20} radius="xl">
                  <IconTruck size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>הובלות דירות</List.Item>
              <List.Item>הובלות משרדים</List.Item>
              <List.Item>שירותי אריזה</List.Item>
              <List.Item>שירותי אחסון</List.Item>
              <List.Item>פריקת מכולות</List.Item>
              <List.Item>שירותי שליחויות</List.Item>
            </List>
          </Stack>
        </SimpleGrid>

        <Text ta="center" size="sm" mt={50} c="dimmed">
          © {new Date().getFullYear()} אקטיס שירותי ניקיון, הסעות והובלות. כל הזכויות שמורות.
        </Text>
      </Container>
    </footer>
  );
}; 