'use client';

import { Container, SimpleGrid, Card, Text, Title, Stack, Button, Image } from '@mantine/core';
import Link from 'next/link';
import styles from './ServiceCards.module.css';

const services = [
  {
    icon: '/images/logo-1-150x86.png',
    title: 'שירותי ניקיון ואחזקה',
    description: 'שירותי ניקיון מקצועיים למשרדים, מוסדות, ובתי עסק. מאז 1998 אנו מספקים שירות איכותי ומקצועי.',
    color: 'violet',
    path: '/cleaning',
    type: 'image',
    className: styles.cleaningCard
  },
  {
    icon: '/images/logo-2-150x86.png',
    title: 'שירותי הסעות וטיולים',
    description: 'שירותי הסעות מקצועיים לטיולים, אירועים והסעות עובדים בפריסה ארצית.',
    color: 'green',
    path: '/travel',
    type: 'image',
    className: styles.travelCard
  },
  {
    icon: '/images/logo-3-150x80.png',
    title: 'הובלות ושליחויות',
    description: 'שירותי הובלה ושליחויות מהירים ואמינים בכל רחבי הארץ.',
    color: 'blue',
    path: '/transport',
    type: 'image',
    className: styles.transportCard
  }
];

export const ServiceCards = () => {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Title order={2} ta="center">השירותים שלנו</Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {services.map((service) => (
            <Card 
              key={service.title} 
              padding="lg" 
              radius="md" 
              className={`${styles.card} ${service.className || ''}`}
              component={Link}
              href={service.path}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  h={48}
                  w="auto"
                  fit="contain"
                />
              </div>
              <Text size="lg" fw={500} mt="md">
                {service.title}
              </Text>
              <Text size="sm" c="dimmed" mt="sm">
                {service.description}
              </Text>
              <Button 
                variant="light" 
                color={service.color}
                fullWidth 
                mt="md"
                className={styles[`${service.color}Button`]}
              >
                למידע נוסף
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}; 