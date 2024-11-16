'use client';

import { Container, Title, Text, Stack, Image } from '@mantine/core';
import styles from './TransportHero.module.css';

export const TransportHero = () => {
  return (
    <div className={styles.hero}>
      <Container size="lg">
        <Stack gap="xl" align="center">
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo-3.png"
              alt="אקטיס הובלות"
              width={120}
              height={69}
              fit="contain"
              className={styles.logo}
            />
          </div>
          <Title className={styles.title} order={1}>שירותי הובלות ושליחויות מקצועיים</Title>
          <Text size="lg" maw={800} ta="center">
            חברת אקטיס מספקת מגוון רחב של שירותי הובלות ושליחויות בפריסה ארצית.
            אנו מתמחים במתן פתרונות מקצועיים ללקוחות פרטיים, עסקיים ומוסדיים.
          </Text>
        </Stack>
      </Container>
    </div>
  );
}; 