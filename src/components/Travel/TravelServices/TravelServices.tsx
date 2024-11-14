'use client';

import { Container, SimpleGrid, Card, Text, Title, Image, Stack, ThemeIcon, Group, Paper, List, Modal } from '@mantine/core';
import { IconBus, IconUsers, IconCalendarEvent, IconClock, IconShieldCheck, IconMapPin, IconCheck } from '@tabler/icons-react';
import { useState } from 'react';
import styles from './TravelServices.module.css';

const services = [
  {
    title: 'הסעות תלמידים',
    image: '/images/student-transport.jpg',
    description: 'שירותי הסעות בטוחים ואמינים למוסדות חינוך',
    features: [
      'נהגים מוסמכים ובעלי ניסיון',
      'צי רכבים חדיש ומתוחזק',
      'מערכת מעקב GPS מתקדמת',
      'עמידה בכל תקני הבטיחות'
    ],
    fullDescription: (
      <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text size="lg" mb="xl">
          אקטיס מתמחה בהסעות תלמידים בטוחות ואמינות, עם דגש מיוחד על בטיחות ודייקנות.
          אנו מבינים את האחריות הכבדה בהסעת תלמידים ופועלים בהתאם לסטנדרטים המחמירים ביותר.
        </Text>

        <Title order={3} mb="md">הבטיחות מעל הכל:</Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="green" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text fw={500} component="span">נהגים מוסמכים:</Text>
            {' '}כל נהגינו בעלי רישיון להסעת ילדים וניסיון רב בתחום
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">רכבים בטיחותיים:</Text>
            {' '}חגורות בטיחות בכל המושבים ומערכות בטיחות מתקדמות
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">מעקב ובקרה:</Text>
            {' '}מערכת GPS מתקדמת למעקב אחר המסלול והגעה בזמן
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">צוות מסור:</Text>
            {' '}נהגים אדיבים ומקצועיים המחויבים לבטיחות התלמידים
          </List.Item>
        </List>

        <Text size="lg" mt="xl" c="dimmed">
          אנו באקטיס מבינים את החשיבות של הגעה בטוחה ובזמן לבית הספר.
          צוות הנהגים המקצועי שלנו מחויב להעניק שירות אמין, בטוח ואדיב לכל תלמיד.
        </Text>
      </Paper>
    )
  },
  {
    title: 'הסעות עובדים',
    image: '/images/employee-transport.jpg',
    description: 'פתרונות הסעה יעילים לחברות וארגונים',
    features: [
      'שירות מותאם לשעות העבודה',
      'מסלולים מותאמים אישית',
      'אפשרות להסעות קבועות',
      'שירות אמין ודייקני'
    ],
    fullDescription: (
      <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text size="lg" mb="xl">
          אקטיס מספקת שירותי הסעות עובדים מקצועיים לחברות וארגונים.
          השירות מאפשר לעובדים להגיע למקום העבודה בקלות ובנוחות, בשעות המתאימות לשעות העבודה,
          במיוחד במקרים של שעות עבודה מיוחדות או כשאין תחבורה ציבורית זמינה.
        </Text>

        <Title order={3} mb="md">היתרונות למעסיק ולעובדים:</Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="green" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text fw={500} component="span">נוחות מקסימלית:</Text>
            {' '}הגעה קלה ונוחה לעבודה ללא צורך בנהיגה למרחקים ארוכים
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">התאמה מלאה:</Text>
            {' '}שירות מותאם לשעות העבודה המדויקות של החברה
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">דייקנות:</Text>
            {' '}עמידה קפדנית בלוחות זמנים ואמינות מלאה
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">ניהול מלא:</Text>
            {' '}הסרת נטל ניהול ההסעות מהחברה
          </List.Item>
        </List>

        <Text size="lg" mt="xl" c="dimmed">
          חברת אקטיס מספקת שירותי הסעות עובדים לחברות מדי יום, תוך שימת דגש על דייקנות
          ועמידה קפדנית בלוחות זמנים. אנו מאפשרים לחברות להתמקד בעיקר העסקים שלהן
          ולהשאיר את ניהול ההסעות בידיים מקצועיות.
        </Text>
      </Paper>
    )
  },
  {
    title: 'הסעות לאירועים',
    image: '/images/event-transport.jpg',
    description: 'הסעות מאורגנות לכל סוגי האירועים',
    features: [
      'תיאום מלא מול מארגני האירוע',
      'צי רכבים מגוון לכל גודל אירוע',
      'שירות מקצועי ואדיב',
      'פתרונות לאירועים מכל הסוגים'
    ],
    fullDescription: (
      <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text size="lg" mb="xl">
          חברת אקטיס ערוכה לספק שירותי הסעות לכל יעד ואירוע.
          אנו מתמחים בהסעות לאירועים פרטיים, אירועי חברה, ימי כיף והסעות מיוחדות.
        </Text>

        <Title order={3} mb="md">סוגי האירועים:</Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="green" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>אירועים פרטיים - חתונות ובר מצוות</List.Item>
          <List.Item>אירועים של חברות וארגונים</List.Item>
          <List.Item>ימי כיף וגיבוש</List.Item>
          <List.Item>הסעות לנתב"ג</List.Item>
          <List.Item>הסעות לכותל ואתרי תיירות</List.Item>
        </List>

        <Title order={3} mt="xl" mb="md">הבטיחות מעל הכל:</Title>
        <List
          spacing="md"
          size="md"
          icon={
            <ThemeIcon color="green" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text fw={500} component="span">תחזוקה שוטפת:</Text>
            {' '}רכבי החברה מטופלים בזמן ועוברים בדיקות תקופתיות על ידי קציני בטיחות
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">נהגים מקצועיים:</Text>
            {' '}נהגים מיומנים בעלי ותק וניסיון רב בהסעת קבוצות
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">גמישות מלאה:</Text>
            {' '}איסוף והגעה לכל מקום בארץ, בכל שעות היממה
          </List.Item>
        </List>

        <Text size="lg" mt="xl" c="dimmed">
          צוות אקטיס המקצועי מחויב להעניק לכם שירות איכותי ואמין,
          תוך הקפדה על הגעה בזמן ועמידה בכל דרישות הבטיחות.
          אנו נשמח לסייע בתכנון ההסעות לאירוע שלכם.
        </Text>
      </Paper>
    )
  }
];

const advantages = [
  {
    icon: IconClock,
    title: 'זמינות 24/7',
    description: 'שירות זמין בכל שעות היממה'
  },
  {
    icon: IconShieldCheck,
    title: 'בטיחות מעל הכל',
    description: 'צי רכבים מתוחזק ונהגים מקצועיים'
  },
  {
    icon: IconMapPin,
    title: 'פריסה ארצית',
    description: 'שירות בכל רחבי הארץ'
  }
];

export const TravelServices = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <>
      <Container size="lg" py="xl">
        <Stack gap="xl">
          <Title order={2} ta="center" mb="xl">שירותי ההסעות שלנו</Title>
          
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {services.map((service) => (
              <Card 
                key={service.title} 
                padding="lg" 
                radius="md" 
                className={styles.card}
                onClick={() => setSelectedService(service)}
              >
                <Card.Section className={styles.imageSection}>
                  <Image
                    src={service.image}
                    height={200}
                    alt={service.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.imageOverlay}>
                    <Text size="sm" c="white">לחץ לפרטים נוספים</Text>
                  </div>
                </Card.Section>
                
                <Text size="lg" fw={500} mt="md" mb="xs">
                  {service.title}
                </Text>
                
                <Text size="sm" c="dimmed" mb="md">
                  {service.description}
                </Text>
                
                <Stack gap="xs">
                  {service.features.map((feature) => (
                    <Group key={feature} gap="xs">
                      <ThemeIcon color="green" size={20} radius="xl">
                        <IconCheck size={12} />
                      </ThemeIcon>
                      <Text size="sm">{feature}</Text>
                    </Group>
                  ))}
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      <Modal
        opened={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={<Text size="xl" fw={700}>{selectedService?.title}</Text>}
        size="lg"
        transitionProps={{
          transition: 'slide-up',
          duration: 300,
          timingFunction: 'ease-out',
        }}
        className={styles.modal}
        overlayProps={{
          blur: 3,
          opacity: 0.55,
        }}
      >
        <div className={styles.modalContent}>
          <Image
            src={selectedService?.image}
            height={300}
            alt={selectedService?.title || ''}
            radius="md"
            mb="lg"
            className={styles.modalImage}
          />
          {selectedService?.fullDescription}
        </div>
      </Modal>
    </>
  );
}; 