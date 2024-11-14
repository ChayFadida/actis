'use client';

import { Container, Title, SimpleGrid, Image, Paper } from '@mantine/core';
import styles from './ServiceGallery.module.css';

const images = [
  { src: '/images/post-1.jpg', alt: 'ניקיון משרדים' },
  { src: '/images/post-2.jpg', alt: 'ניקוי שטיחים' },
  { src: '/images/post-3.jpg', alt: 'ניקיון חלונות' },
  { src: '/images/post-4.jpg', alt: 'פוליש רצפות' },
  { src: '/images/post-5.jpg', alt: 'ניקיון אחרי שיפוץ' },
  { src: '/images/post-6.jpg', alt: 'ניקוי חניונים' },
];

export const ServiceGallery = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={2} ta="center" mb="xl">גלריית שירותים</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {images.map((image) => (
          <Paper key={image.src} className={styles.imageWrapper}>
            <Image
              src={image.src}
              alt={image.alt}
              radius="md"
              className={styles.image}
            />
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
}; 