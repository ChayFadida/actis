'use client';

import { Title, Text, Button, Container, Group, Stack } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <Container size="lg">
        <Stack gap="xl" justify="center" className={styles.inner}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo-1.png"
              alt="אקטיס"
              width={200}
              height={115}
              priority
            />
          </div>
          <Title className={styles.title} order={1}>
            שירותים מקצועיים
            <br />
            <span className={styles.highlight}>מאז 1998</span>
          </Title>
          
          <Text size="lg" maw={800} mx="auto" ta="center">
            חברת אקטיס מתמחה במתן שירותי ניקיון, הסעות, הובלות ושליחויות.
            שירותינו ניתנים ללקוחות מהמגזר הפרטי, הציבורי והעסקי,
            תוך מתן דגש על ביצוע השירות במקצועיות ואיכות ללא פשרות.
          </Text>

          <Group justify="center" gap="md">
            <Button
              size="lg"
              leftSection={<IconArrowLeft size={20} />}
              component={Link}
              href="/contact"
              color="violet"
            >
              צור קשר
            </Button>
            <Button
              size="lg"
              variant="light"
              component={Link}
              href="/about"
              color="violet"
            >
              אודות אקטיס
            </Button>
          </Group>
        </Stack>
      </Container>
    </div>
  );
}; 