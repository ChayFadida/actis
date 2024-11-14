'use client';

import { Container, Title, Text, Stack, Image } from '@mantine/core';
import styles from './CleaningHero.module.css';

export const CleaningHero = () => {
  return (
    <div className={styles.hero}>
      <Container size="lg">
        <Stack gap="xl" align="center">
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo-1.png"
              alt="אקטיס ניקיון"
              width={120}
              height={69}
              fit="contain"
              className={styles.logo}
            />
          </div>
          <Title className={styles.title} order={1}>שירותי ניקיון ואחזקה מקצועיים</Title>
          <Text size="lg" maw={800} ta="center">
            חברת אקטיס מספקת שירותי ניקיון ואחזקה מקצועיים למגזר העסקי, הפרטי והציבורי.
            עם ניסיון של למעלה מ-25 שנה, אנו מובילים בתחום הניקיון המקצועי.
          </Text>
        </Stack>
      </Container>
    </div>
  );
}; 