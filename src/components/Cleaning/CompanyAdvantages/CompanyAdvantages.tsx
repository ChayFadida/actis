'use client';

import { Container, Title, SimpleGrid, Paper, Text, ThemeIcon, Stack } from '@mantine/core';
import { 
  IconClock24, 
  IconCertificate, 
  IconUsers, 
  IconPhoneCall,
  IconMapPin,
  IconShieldCheck 
} from '@tabler/icons-react';
import styles from './CompanyAdvantages.module.css';

const advantages = [
  {
    icon: IconClock24,
    title: 'זמינות 24/7',
    description: 'שירות זמין לאורך כל שעות היממה'
  },
  {
    icon: IconCertificate,
    title: 'ניסיון מוכח',
    description: 'למעלה מ-25 שנות ניסיון בתחום'
  },
  {
    icon: IconUsers,
    title: 'צוות מקצועי',
    description: 'עובדים מיומנים ומקצועיים'
  },
  {
    icon: IconPhoneCall,
    title: 'שירות אישי',
    description: 'ליווי ותמיכה לכל אורך הדרך'
  },
  {
    icon: IconMapPin,
    title: 'פריסה ארצית',
    description: 'שירות בכל רחבי הארץ'
  },
  {
    icon: IconShieldCheck,
    title: 'אמינות מוכחת',
    description: 'מאות לקוחות מרוצים'
  }
];

export const CompanyAdvantages = () => {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Title order={2} ta="center">למה לבחור באקטיס?</Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {advantages.map((advantage) => (
            <Paper key={advantage.title} p="md" radius="md" className={styles.card}>
              <ThemeIcon size={48} radius="md" color="violet" variant="light">
                <advantage.icon size={24} stroke={1.5} />
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