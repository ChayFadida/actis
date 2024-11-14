'use client';

import { Container, SimpleGrid, Card, Text, Title, Stack } from '@mantine/core';
import { 
  IconDeviceAnalytics, 
  IconCloud, 
  IconShieldCheck,
  IconCode 
} from '@tabler/icons-react';
import styles from './Services.module.css';

const services = [
  {
    icon: IconDeviceAnalytics,
    title: 'אנליטיקה עסקית',
    description: 'הפיכת המידע שלכם לתובנות פעולה באמצעות פתרונות אנליטיקה מתקדמים.',
  },
  {
    icon: IconCloud,
    title: 'פתרונות ענן',
    description: 'תשתית ענן מאובטחת וגמישה להפעלת העסק שלכם.',
  },
  {
    icon: IconShieldCheck,
    title: 'אבטחת מידע',
    description: 'הגנה על העסק שלכם עם פתרונות אבטחה ברמה ארגונית וניטור מתקדם.',
  },
  {
    icon: IconCode,
    title: 'פיתוח מותאם',
    description: 'פתרונות תוכנה מותאמים אישית לצרכים הספציפיים של העסק שלכם.',
  },
];

export const Services = () => {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Title order={2} ta="center">השירותים שלנו</Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
          {services.map((service) => (
            <Card key={service.title} padding="lg" radius="md" className={styles.card}>
              <service.icon size={32} stroke={1.5} className={styles.icon} />
              <Text size="lg" fw={500} mt="md">
                {service.title}
              </Text>
              <Text size="sm" c="dimmed" mt="sm">
                {service.description}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}; 