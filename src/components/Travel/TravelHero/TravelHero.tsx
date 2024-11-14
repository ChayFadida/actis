'use client';

import { Container, Title, Text, Stack, Image } from '@mantine/core';
import styles from './TravelHero.module.css';

export const TravelHero = () => {
  return (
    <div className={styles.hero}>
      <Container size="lg">
        <Stack gap="xl" align="center">
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo-2.png"
              alt="אקטיס הסעות"
              width={120}
              height={69}
              fit="contain"
              className={styles.logo}
            />
          </div>
          <Title className={styles.title} order={1}>שירותי הסעות וטיולים מקצועיים</Title>
          <Text size="lg" maw={800} ta="center">
            חברת אקטיס מספקת שירותי הסעות מקצועיים ואמינים לכל מטרה.
            אנו מתמחים בהסעות תלמידים, הסעות עובדים והסעות לאירועים,
            עם צי רכבים חדיש ונהגים מקצועיים.
          </Text>
        </Stack>
      </Container>
    </div>
  );
}; 