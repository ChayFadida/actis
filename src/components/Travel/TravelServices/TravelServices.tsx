'use client';

import { Container, SimpleGrid, Card, Text, Title, Image, Stack, ThemeIcon, Group, Paper } from '@mantine/core';
import { IconBus, IconUsers, IconCalendarEvent, IconClock, IconShieldCheck, IconMapPin, IconCheck } from '@tabler/icons-react';
import styles from './TravelServices.module.css';

const services = [
  {
    title: 'הסעות תלמידים',
    image: '/images/student-transport.jpg',
    description: 'שירותי הסעות בטוחים ואמינים למוסדות חינוך',
    features: [
      'נהגים מוסמכים ובעלי ניסיון',
      'צי רכבים חדיש ומתוחזק',
      'מערכת מעקב GPS מתקדמת',
      'עמידה בכל תקני הבטיחות'
    ]
  },
  {
    title: 'הסעות עובדים',
    image: '/images/employee-transport.jpg',
    description: 'פתרונות הסעה יעילים לחברות וארגונים',
    features: [
      'שירות מותאם לשעות העבודה',
      'מסלולים מותאמים אישית',
      'אפשרות להסעות קבועות',
      'שירות אמין ודייקני'
    ]
  },
  {
    title: 'הסעות לאירועים',
    image: '/images/event-transport.jpg',
    description: 'הסעות מאורגנות לכל סוגי האירועים',
    features: [
      'תיאום מלא מול מארגני האירוע',
      'צי רכבים מגוון לכל גודל אירוע',
      'שירות מקצועי ואדיב',
      'פתרונות לאירועים מכל הסוגים'
    ]
  }
];

const advantages = [
  {
    icon: IconClock,
    title: 'זמינות 24/7',
    description: 'שירות זמין בכל שעות היממה'
  },
  {
    icon: IconShieldCheck,
    title: 'בטיחות מעל הכל',
    description: 'צי רכבים מתוחזק ונהגים מקצועיים'
  },
  {
    icon: IconMapPin,
    title: 'פריסה ארצית',
    description: 'שירות בכל רחבי הארץ'
  }
];

export const TravelServices = () => {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Title order={2} ta="center" mb="xl">שירותי ההסעות שלנו</Title>
        
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {services.map((service) => (
            <Card key={service.title} padding="lg" radius="md" className={styles.card}>
              <Card.Section>
                <Image
                  src={service.image}
                  height={200}
                  alt={service.title}
                  className={styles.cardImage}
                />
              </Card.Section>
              
              <Text size="lg" fw={500} mt="md" mb="xs">
                {service.title}
              </Text>
              
              <Text size="sm" c="dimmed" mb="md">
                {service.description}
              </Text>
              
              <Stack gap="xs">
                {service.features.map((feature) => (
                  <Group key={feature} gap="xs">
                    <ThemeIcon color="green" size={20} radius="xl">
                      <IconCheck size={12} />
                    </ThemeIcon>
                    <Text size="sm">{feature}</Text>
                  </Group>
                ))}
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        <Title order={2} ta="center" mt={50} mb="xl">היתרונות שלנו</Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {advantages.map((advantage) => (
            <Paper key={advantage.title} p="xl" radius="md" className={styles.advantageCard}>
              <ThemeIcon size={50} radius="md" color="green" variant="light">
                <advantage.icon size={26} />
              </ThemeIcon>
              <Text size="lg" fw={500} mt="md">
                {advantage.title}
              </Text>
              <Text size="sm" c="dimmed" mt="xs">
                {advantage.description}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}; 