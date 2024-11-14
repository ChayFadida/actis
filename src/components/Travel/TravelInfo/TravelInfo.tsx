'use client';

import { Container, Title, Text } from '@mantine/core';
import styles from './TravelInfo.module.css';

export const TravelInfo = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={2} ta="center" mb="xl">מידע על שירותי ההסעות</Title>
      <Text size="lg" ta="center">
        אקטיס מספקת שירותי הסעות מקצועיים ואמינים בפריסה ארצית
      </Text>
    </Container>
  );
}; 