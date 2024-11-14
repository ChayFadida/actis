'use client';

import { Container, SimpleGrid, Card, Text, Title, Image, Modal, List, ThemeIcon } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useState } from 'react';
import styles from './CleaningServices.module.css';

const services = [
  {
    title: 'ניקיון משרדים',
    image: '/images/post-1.jpg',
    description: 'שירותי ניקיון מקצועיים למשרדים ומבני עסקים',
    fullDescription: 'תיאור מלא של שירותי ניקיון משרדים...'
  },
  {
    title: 'ניקוי שטיחים וריפודים',
    image: '/images/post-2.jpg',
    description: 'ניקוי מקצועי של שטיחים וריפודים בשיטות מתקדמות',
    fullDescription: 'תיאור מלא של ניקוי שטיחים...'
  },
  {
    title: 'ניקיון חלונות וסנפלינג',
    image: '/images/post-3.jpg',
    description: 'ניקוי חלונות בגובה עם צוות מקצועי ומיומן',
    fullDescription: 'תיאור מלא של ניקוי חלונות...'
  },
  {
    title: 'פוליש והברקת רצפות',
    image: '/images/post-4.jpg',
    description: 'פוליש מקצועי והברקת רצפות לכל סוגי המשטחים',
    fullDescription: 'תיאור מלא של פוליש...'
  },
  {
    title: 'ניקיון לאחר שיפוץ',
    image: '/images/post-5.jpg',
    description: 'ניקיון יסודי ומקיף לאחר עבודות שיפוץ',
    fullDescription: (
      <>
        <Text mb="md">
          חברת אקטיס מתמחה בניקיון מקצועי לאחר שיפוץ, המותאם הן ללקוחות פרטיים והן לקבלני שיפוצים.
          צוות העובדים המקצועי שלנו מגיע עם כל הציוד הנדרש לניקיון יסודי ומקיף.
        </Text>
        <Text size="lg" fw={500} mb="sm">השירות כולל:</Text>
        <List
          spacing="sm"
          size="md"
          center
          icon={
            <ThemeIcon color="violet" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>ניקוי אבק ותוצרי לוואי של השיפוץ</List.Item>
          <List.Item>שטיפה יסודית וניקוי כתמי צבע</List.Item>
          <List.Item>ניקוי חלונות, תריסים וריהוט</List.Item>
          <List.Item>ליטוש והברקת מרצפות (לפי דרישה)</List.Item>
          <List.Item>ניקוי ריפודים מקצועי</List.Item>
        </List>
      </>
    )
  },
  {
    title: 'ניקוי חניונים',
    image: '/images/post-6.jpg',
    description: 'ניקוי חניונים מקצועי כולל שטיפה בלחץ',
    fullDescription: 'תיאור מלא של ניקוי חניונים...'
  }
];

export const CleaningServices = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <>
      <Container size="lg" py="xl">
        <Title order={2} ta="center" mb="xl">השירותים שלנו</Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className={styles.card} 
              padding="lg"
              onClick={() => setSelectedService(service)}
            >
              <Card.Section>
                <Image
                  src={service.image}
                  height={200}
                  alt={service.title}
                />
              </Card.Section>
              <Text size="lg" fw={500} mt="md">{service.title}</Text>
              <Text size="sm" c="dimmed" mt="sm">
                {service.description}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      <Modal
        opened={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={<Text size="xl" fw={700}>{selectedService?.title}</Text>}
        size="lg"
        transitionProps={{
          transition: 'fade',
          duration: 300,
        }}
        className={styles.modal}
      >
        <Image
          src={selectedService?.image}
          height={200}
          alt={selectedService?.title || ''}
          radius="md"
          mb="lg"
        />
        {selectedService?.fullDescription}
      </Modal>
    </>
  );
}; 