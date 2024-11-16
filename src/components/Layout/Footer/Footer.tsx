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
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconBuildingStore
} from '@tabler/icons-react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container size="lg" py="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={50}>
          <Stack className={styles.section}>
            <Title order={3} mb="md">צור קשר</Title>
            <Group gap="xs">
              <IconBrandFacebook size={20} />
              <Anchor
                href="https://www.facebook.com/ActisIsrael"
                target="_blank"
                rel="noopener noreferrer"
                c="inherit"
                className={styles.link}
              >
                Actis
              </Anchor>
            </Group>
            <Group gap="xs">
              <IconMail size={20} />
              <Text>דוא״ל: office@actis.co.il</Text>
            </Group>
          </Stack>

          <Stack className={styles.section}>
            <Title order={3} mb="md">הסניפים שלנו</Title>
            <Group gap="xs">
              <IconBuildingStore size={20} />
              <Text fw={500}>סניף ראשי חיפה:</Text>
            </Group>
            <Text size="sm" ml={28}>דרך העצמאות 90 א׳</Text>
            
            <Group gap="xs" mt="xs">
              <IconBuildingStore size={20} />
              <Text fw={500}>סניף נתניה:</Text>
            </Group>
            <Group gap="xs" ml={28}>
              <IconPhone size={16} />
              <Text size="sm">098612614</Text>
            </Group>

            <Group gap="xs" mt="xs">
              <IconBuildingStore size={20} />
              <Text fw={500}>סניף תל אביב:</Text>
            </Group>
            <Group gap="xs" ml={28}>
              <IconPhone size={16} />
              <Text size="sm">036886887</Text>
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
            <Title order={3} mb="md">שירותי הסעות והובלות</Title>
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
              <List.Item>הסעות תלמידים</List.Item>
              <List.Item>הסעות עובדים</List.Item>
              <List.Item>הסעות לאירועים</List.Item>
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