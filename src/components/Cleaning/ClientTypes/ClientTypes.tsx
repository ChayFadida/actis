'use client';

import { Container, Title, SimpleGrid, Paper, Text } from '@mantine/core';
import styles from './ClientTypes.module.css';

const clients = [
  { title: 'מוסדות ממשלתיים', icon: '🏛️' },
  { title: 'מוסדות להשכלה גבוהה', icon: '🎓' },
  { title: 'מבני תעשייה', icon: '🏭' },
  { title: 'חברות הייטק', icon: '💻' },
  { title: 'בתי ספר', icon: '🏫' },
  { title: 'מפעלים', icon: '🏢' },
];

export const ClientTypes = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={2} ta="center" mb="xl">הלקוחות שלנו</Title>
      <SimpleGrid cols={{ base: 2, sm: 3, md: 6 }} spacing="lg">
        {clients.map((client) => (
          <Paper key={client.title} p="md" radius="md" className={styles.client}>
            <Text size="xl" ta="center" mb="xs">{client.icon}</Text>
            <Text size="sm" ta="center" fw={500}>{client.title}</Text>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
}; 