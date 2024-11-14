'use client';

import { Container, SimpleGrid, Card, Text, Title, Image, Modal, List, ThemeIcon, Paper } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useState } from 'react';
import styles from './CleaningServices.module.css';

const services = [
  {
    title: 'ניקיון משרדים',
    image: '/images/post-1.jpg',
    description: 'שירותי ניקיון מקצועיים למשרדים ומבני עסקים',
    fullDescription: (
      <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text size="lg" mb="xl">
          חברת אקטיס הינה חברה ותיקה ובעלת מוניטין, המספקת שירותי ניקיון משרדים כבר למעלה מ-15 שנה.
          אנו מתגאים ביכולתנו להעניק שירותי ניקיון מקיפים, תוך הקפדה על כל הפרטים, ללא "עיגול פינות".
        </Text>

        <Title order={3} mb="md">שירותי הניקיון שלנו כוללים:</Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="violet" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>ניקוי שולחנות ועמדות מחשב</List.Item>
          <List.Item>שאיבת שטיחים וניקוי יסודי</List.Item>
          <List.Item>ניקוי חלונות כולל עבודות בגובה</List.Item>
          <List.Item>ניקוי חדרי מבואה, מעליות וחדרי מדרגות</List.Item>
          <List.Item>ניקוי חדרי שירותים</List.Item>
          <List.Item>ניקוי יסודי לפני אכלוס או לאחר עזיבה</List.Item>
        </List>

        <Title order={3} mt="xl" mb="md">היתרונות שלנו:</Title>
        <List
          spacing="md"
          size="md"
          icon={
            <ThemeIcon color="violet" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text fw={500} component="span">צוות מקצועי ומסור:</Text>
            {' '}עובדים מיומנים ואמינים שנבחרו בקפידה
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">ציוד וחומרים מתקדמים:</Text>
            {' '}שימוש בחומרי ניקוי איכותיים וציוד מתקדם
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">זמינות מלאה:</Text>
            {' '}מוקד תקשורת זמין לאורך כל שעות היום
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">גמישות בשעות העבודה:</Text>
            {' '}התאמה לשעות הפעילות של המשרד
          </List.Item>
        </List>

        <Text size="lg" mt="xl" c="dimmed">
          אקטיס מספקת שירותי ניקיון משרדים ללקוחות מובילים בכל ענפי המשק.
          נשמח להתאים עבורכם חבילת שירות מקצועית שתענה על כל דרישותיכם.
        </Text>
      </Paper>
    )
  },
  {
    title: 'ניקוי שטיחים וריפודים',
    image: '/images/post-2.jpg',
    description: 'ניקוי מקצועי של שטיחים וריפודים בשיטות מתקדמות',
    fullDescription: (
      <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text size="lg" mb="xl">
          חברת אקטיס מתמחה בניקוי שטיחים מכל הסוגים, כולל שטיחים מיוחדים ועדינים.
          הצוות המקצועי שלנו מתאים את שיטת הניקוי וחומרי הניקוי לכל סוג שטיח.
        </Text>

        <Title order={3} mb="md">סוגי השטיחים שאנו מנקים:</Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="violet" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>שטיחים פרסיים, אפגניים וקווקזים</List.Item>
          <List.Item>שטיחי צמר, שאגי ולוצים</List.Item>
          <List.Item>שטיחים מקיר לקיר מכל הסוגים</List.Item>
          <List.Item>שטיחים הודיים, קילים ובוכרים</List.Item>
        </List>

        <Title order={3} mt="xl" mb="md">תהליך הניקוי המקצועי שלנו:</Title>
        <List
          spacing="md"
          size="md"
          icon={
            <ThemeIcon color="violet" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text fw={500} component="span">שאיבת אבק מקצועית:</Text>
            {' '}שימוש במכונות הזרקה ויניקה עם קיטור
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">קרצוף וניקוי עמוק:</Text>
            {' '}שימוש בחומרים מותאמים לסוג השטיח
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">טיפול בכתמים:</Text>
            {' '}הסרת כתמים קשים, כתמי מים וריחות
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">חיטוי והברקה:</Text>
            {' '}טיפול בקרדית האבק והברקה מקצועית
          </List.Item>
        </List>

        <Text size="lg" mt="xl" c="dimmed">
          הצוות המקצועי שלנו יגיע עד אליכם לבחינת סוג העבודה הנדרש ויתאים את שיטת הניקוי
          המיטבית עבור השטיח שלכם. אנו מתחייבים לתוצאות מעולות תוך שמירה על איכות השטיח.
        </Text>
      </Paper>
    )
  },
  {
    title: 'ניקיון חלונות וסנפלינג',
    image: '/images/post-3.jpg',
    description: 'ניקוי חלונות בגובה עם צוות מקצועי ומיומן',
    fullDescription: (
      <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text size="lg" mb="xl">
          חברת אקטיס מתמחה בביצוע עבודות ניקוי חלונות בגבהים בסטנדרטים גבוהים במיוחד.
          צוות החברה מונה אנשי מקצוע מיומנים ומסורים, המקפידים על עבודה מקצועית ויסודית.
        </Text>

        <Title order={3} mb="md">יתרונות השירות:</Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="violet" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>ציוד מתקדם לניקוי חלונות בגבהים</List.Item>
          <List.Item>צוות מקצועי עם ניסיון בסנפלינג</List.Item>
          <List.Item>אישור משרד העבודה לעבודה בגובה</List.Item>
          <List.Item>שימוש בחומרים איכותיים ומותאמים</List.Item>
          <List.Item>פריסה רחבה באזור גוש דן והשרון</List.Item>
        </List>

        <Title order={3} mt="xl" mb="md">שיטות העבודה שלנו:</Title>
        <List
          spacing="md"
          size="md"
          icon={
            <ThemeIcon color="violet" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text fw={500} component="span">ניקוי באמצעות במות הידראוליות:</Text>
            {' '}פתרון יעיל ובטיחותי לבניינים בגובה בינוני
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">ניקוי באמצעות סנפלינג:</Text>
            {' '}מאפשר גישה לכל גובה ומיקום, מבוצע על ידי צוות מוסמך ומנוסה
          </List.Item>
        </List>

        <Text size="lg" mt="xl" c="dimmed">
          בין אם מדובר במשרד בקומה גבוהה או בדירת מגורים - צוות אקטיס המקצועי יעניק לכם
          שירות איכותי ומקיף, תוך הקפדה על כל כללי הבטיחות והמקצועיות.
          שקוף שבחרתם נכון!
        </Text>
      </Paper>
    )
  },
  {
    title: 'פוליש והברקת רצפות',
    image: '/images/post-4.jpg',
    description: 'פוליש מקצועי והברקת רצפות לכל סוגי המשטחים',
    fullDescription: (
    <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text mb="md" size="lg">
          חברת אקטיס מתמחה בפוליש והברקת רצפות מכל הסוגים, תוך שימוש בטכניקות מתקדמות ומוצרים איכותיים.
          השירות מיועד לשמירה על הרצפות מפני שחיקה והענקת מראה מבריק ומקצועי.
        </Text>

        <Text size="lg" fw={500} mb="sm">אנו מציעים שני סוגי פוליש עיקריים:</Text>
        
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="violet" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text fw={500} component="span">פוליש ווקס:</Text>
            {' '}מעניק שכבת הגנה מבריקה עם השתקפות אור, מונע שחיקה ומאריך את חיי הרצפה
          </List.Item>
          <List.Item>
            <Text fw={500} component="span">פוליש קריסטל:</Text>
            {' '}מעניק מראה רטוב ומבריק, כולל שכבת שימור המונעת סימני גרירה
          </List.Item>
        </List>

        <Text size="lg" mt="xl" c="dimmed">
          אקטיס מעסיקה צוות מקצועי ואמין, המתמחה בכל סוגי הפוליש והטיפול ברצפה.
          אנו מספים שירות איכותי ואמין לבתים פרטיים, בנייני מגורים ועסקים.
        </Text>
      </Paper>
    )
  },
  {
    title: 'ניקיון לאחר שיפוץ',
    image: '/images/post-5.jpg',
    description: 'ניקיון יסודי ומקיף לאחר עבודות שיפוץ',
    fullDescription: (
      <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text size="lg" mb="xl">
          חברת אקטיס מתמחה בניקיון מקצועי לאחר שיפוץ, המותאם הן ללקוחות פרטיים והן לקבלני שיפוצים.
          צוות העובדים המקצועי שלנו מגיע עם כל הציוד הנדרש לניקיון יסודי ומקיף.
        </Text>
        
        <Title order={3} mb="md">השירות כולל:</Title>
        <List
          spacing="sm"
          size="md"
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

        <Text size="lg" mt="xl" c="dimmed">
          שיפצתם את הבית או את העסק? צוות אקטיס המקצועי ישמח לעזור לכם ליהנות מתוצאות השיפוץ
          עם ניקיון יסודי ומקיף. אנו פרוסים בכל רחבי הארץ ומספקים שירות מהיר ומקצועי.
        </Text>
      </Paper>
    )
  },
  {
    title: 'ניקוי חניונים',
    image: '/images/post-6.jpg',
    description: 'ניקוי חניונים מקצועי כולל שטיפה בלחץ',
    fullDescription: (
      <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text size="lg" mb="xl">
          חברת אקטיס מתמחה בניקוי חנ��ונים ומשטחי תעשייה תוך שימוש בציוד מתקדם ומכונות משוכללות.
          אנו מספקים פתרונות ניקיון מקיפים לכל סוגי החניונים והמשטחים התעשייתיים.
        </Text>

        <Title order={3} mb="md">הציוד המתקדם שלנו:</Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="violet" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>מכונות רכובות לניקוי שטחים גדולים</List.Item>
          <List.Item>מכונות שטיפה בלחץ מים גבוה</List.Item>
          <List.Item>מערכות ניקוי במים חמים וקרים</List.Item>
          <List.Item>ציוד מקצועי לטאטוא ושטיפה</List.Item>
        </List>

        <Text size="lg" mt="xl" c="dimmed">
          הצוות המקצועי שלנו מצויד בכל הכלים הנדרשים לניקוי יסודי ואיכותי של חניונים ומשטחים תעשייתיים.
          אנו מתאימים את שיטת הניקוי לסוג המשטח ולדרישות הספציפיות של כל לקוח.
        </Text>
      </Paper>
    )
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