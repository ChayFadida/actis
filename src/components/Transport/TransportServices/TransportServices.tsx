'use client';

import { Container, SimpleGrid, Card, Text, Title, Image, Stack, ThemeIcon, Paper, List, Modal } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useState } from 'react';
import styles from './TransportServices.module.css';

const services = [
  {
    title: 'שירותי הובלה',
    image: '/images/trucking.jpg',
    description: 'הובלות מקצועיות לכל סוגי המטענים',
    fullDescription: (
      <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text size="lg" mb="xl">
          חברת אקטיס נותנת מענה לכל סוגי ההובלות ברחבי הארץ,
          תוך מתן שירות אמין ומקצועי ללקוח ומתן דגש והקפדה על שמירת תכולת ההובלה.
        </Text>

        <Title order={3} mb="md">שירותים משלימים:</Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>שירותי אריזה מקצועיים</List.Item>
          <List.Item>פריקת מכולות</List.Item>
          <List.Item>שירותי סבלות</List.Item>
          <List.Item>שירותי אחסון</List.Item>
        </List>

        <Text size="lg" mt="xl">
          אנו מקפידים תמיד לעמוד בלוחות הזמנים ומציעים את שירותינו במחירים שווים לכל נפש.
        </Text>

        <Text size="lg" mt="md">
          נשמח להגיע עד אליכם כדי לתת ייעוץ מקצועי והצעת מחיר, ללא כל התחייבות.
          במסגרת הפגישה נשמח גם להציג לכם את מגוון השירותים הרחב שלנו,
          על מנת לאפשר לכם ליהנות מחבילה המותאמת לצורכיכם הייחודיים.
        </Text>

        <Stack gap="sm" mt="xl">
          <Title order={4} c="blue">היתרונות שלנו:</Title>
          <List
            spacing="xs"
            size="md"
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
          >
            <List.Item>פריסה ארצית מלאה</List.Item>
            <List.Item>וות מקצועי ומיומן</List.Item>
            <List.Item>מחירים תחרותיים</List.Item>
            <List.Item>שמירה על תכולת ההובלה</List.Item>
            <List.Item>עמידה בלוחות זמנים</List.Item>
          </List>
        </Stack>
      </Paper>
    )
  },
  {
    title: 'שירותי שליחויות',
    image: '/images/shlihoyot.jpg',
    description: 'שליחויות מהירות ואמינות בפריסה ארצית',
    fullDescription: (
      <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text size="lg" mb="xl">
          אקטיס מספקת שליחויות לקהל העסקי, המוסדי והפרטי בפריסה ארצית.
          החברה שמה דגש על מתן שירות מהיר ועמידה בלוחות זמנים.
        </Text>

        <Title order={3} mb="md">שירותי החברה כוללים:</Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>מסירות משפטיות</List.Item>
          <List.Item>שליחויות מהיום להיום</List.Item>
          <List.Item>שליחויות קבועות</List.Item>
          <List.Item>קווי חלוקה יומיים</List.Item>
          <List.Item>שליחויות אקספרס</List.Item>
        </List>

        <Text size="lg" mt="xl">
          לרשות החברה קיים צי רכבים חדש וייעודי המבטיח איסוף ומסירת המשלוחים בשלמותם
          ליעדם ובזמן כמובטח.
        </Text>

        <Text size="lg" mt="md" c="dimmed">
          אנו נתאים עבורכם פתרונות לוגיסטיים ונפעל על פי צרכי השילוח שלכם,
          בהתאמה אישית ומדויקת לרצונותיכם וצרכיכם.
        </Text>
      </Paper>
    )
  },
  {
    title: 'שירותי אריזה',
    image: '/images/box.jpg',
    description: 'אריזה מקצועית ובטוחה של כל סוגי המטענים',
    fullDescription: (
      <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text size="lg" mb="xl">
          מעבר בית או משרד הוא כאב ראש אחד גדול והוא לפעמים אחד הסיבות שאנשים נמנעים ממעבר דירה או משרד.
          חברתנו תסייע לכם להקל על המעבר ולהפוך אותו לפשוט ומהנה על ידי ביצוע שירות האריזה במקומכם.
        </Text>

        <Text size="lg" mb="xl">
          אנו נספק לרשותכם כל מה שקשור לתחום של אריזה ושינוע אשר יבטיח כי התכולה תגיע ליעד בשלמותה.
        </Text>

        <Title order={3} mb="md">שירות האריזה שלנו כולל:</Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>אספקת קרטונים איכותיים</List.Item>
          <List.Item>ציוד מקצועי לאריזה בטוחה</List.Item>
          <List.Item>צוות אורזים מקצועי ויעיל</List.Item>
          <List.Item>אריזה מותאמת לכל סוג תכולה</List.Item>
          <List.Item>שמירה על שלמות המטען</List.Item>
        </List>

        <Stack gap="sm" mt="xl">
          <Title order={4} c="blue">היתרונות של שירותי האריזה שלנו:</Title>
          <List
            spacing="xs"
            size="md"
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
          >
            <List.Item>חיסכון בזמן ומאמץ</List.Item>
            <List.Item>אריזה מקצועית ובטוחה</List.Item>
            <List.Item>ציוד אריזה איכותי</List.Item>
            <List.Item>צוות מיומן ומקצועי</List.Item>
            <List.Item>ביצוע העבודה לשביעות רצונכם</List.Item>
          </List>
        </Stack>

        <Text size="lg" mt="xl" c="dimmed">
          אנו מבינים את החשיבות של אריזה נכונה ובטוחה, ולכן מקפידים על שימוש בחומרים
          איכותיים ועבודה מקצועית שתבטיח את הגעת חפציכם בשלמות ליעדם.
        </Text>
      </Paper>
    )
  },
  {
    title: 'שירותי אחסון',
    image: '/images/storage.jpg',
    description: 'פתרונות אחסון מתקדמים ומאובטחים',
    fullDescription: (
      <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text size="lg" mb="xl">
          ישנם מקרים רבים בהם קיים פער בין תאריך מסירת הנכס לבין תאריך קבלת הנכס החדש,
          מה שגורם לבעיית אחסון של התכולה המיועדת להגיע לנכס המיועד.
        </Text>

        <Text size="lg" mb="xl">
          חברתנו מציעה שירותי אחסון זמניים של התכולה המיועדת להובלה עד ליום הכניסה לנכס המיועד
          במחסנים גדולים ומרווחים, כך שתוכלו להיות רגועים לגבי שלום התכולה.
        </Text>

        <Title order={3} mb="md">היתרונות של שירותי האחסון שלנו:</Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>מחסנים גדולים ומרווחים</List.Item>
          <List.Item>אבטחה מלאה 24/7</List.Item>
          <List.Item>גמישות בתקופת האחסון</List.Item>
          <List.Item>שמירה על שלמות התכולה</List.Item>
          <List.Item>נגישות למאוחסנים</List.Item>
        </List>

        <Stack gap="sm" mt="xl">
          <Title order={4} c="blue">השירות כולל:</Title>
          <List
            spacing="xs"
            size="md"
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
          >
            <List.Item>אחסון מאובטח ומבוקר</List.Item>
            <List.Item>מעקב ותיעוד מסודר</List.Item>
            <List.Item>ביטוח מלא לתכולה</List.Item>
            <List.Item>שירותי הובלה מהמחסן ליעד</List.Item>
            <List.Item>גמישות בתנאי האחסון</List.Item>
          </List>
        </Stack>

        <Text size="lg" mt="xl" c="dimmed">
          אנו מבינים את החשיבות של אחסון בטוח ומקצועי בתקופות המעבר,
          ומספקים פתרון מושלם שיאפשר לכם שקט נפשי מלא לגבי שלום התכולה שלכם.
        </Text>
      </Paper>
    )
  },
  {
    title: 'פריקת מכולות',
    image: '/images/container.jpg',
    description: 'שירותי פריקה והעמסה מקצועיים',
    fullDescription: (
      <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text size="lg" mb="xl">
          ריקון מכולות היא פעולה לא פשוטה שדורשת עבודה מקצועית של סבלים.
          חברתינו מבצעת ריקון מכולות בצורה מסודרת ובטיחותית, תוך כדי הקפדה על שלמות המטען.
        </Text>

        <Text size="lg" mb="xl">
          אנו מעסיקים צוות עובדים מיומן ומקצועי המודע לחשיבות הגדולה של שמירת המטען בשלמותו
          אשר יבצע את עבודתו לשביעות רצונכם.
        </Text>

        <Title order={3} mb="md">היתרונות שלנו:</Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>צוות מקצועי ומיומן</List.Item>
          <List.Item>ציוד מתקדם לפריקה בטוחה</List.Item>
          <List.Item>שמירה על שלמות המטען</List.Item>
          <List.Item>עבודה מסודרת ובטיחותית</List.Item>
          <List.Item>ניסיון רב בפריקת מכולות</List.Item>
        </List>

        <Stack gap="sm" mt="xl">
          <Title order={4} c="blue">השירות כולל:</Title>
          <List
            spacing="xs"
            size="md"
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
          >
            <List.Item>תכנון מקדים של הפריקה</List.Item>
            <List.Item>צוות סבלים מקצועי</List.Item>
            <List.Item>ציוד עזר מתאים</List.Item>
            <List.Item>פריקה זהירה ומסודרת</List.Item>
            <List.Item>אפשרות לשירותי אחסון זמני</List.Item>
          </List>
        </Stack>

        <Text size="lg" mt="xl" c="dimmed">
          אנו מבינים את החשיבות של פריקת מכולות מקצועית ובטוחה,
          ומתחייבים לספק שירות איכותי שישמור על המטען שלכם מתחילת הפריקה ועד סופה.
        </Text>
      </Paper>
    )
  },
  {
    title: 'עבודות סבלות',
    image: '/images/sabalot.jpg',
    description: 'סבלים מקצועיים ומיומנים',
    fullDescription: (
      <Paper p="xl" radius="md" className={styles.contentPaper}>
        <Text size="lg" mb="xl">
          עבודת סבלות הינה תחום המצריך מקצועיות רבה. השלכת פסולת במרחב הציבורי הינה עבירה חמורה
          שיש בצידה קנסות גבוהות, ולכן פינוי פריטים ללא פריקתם במקום מוסדר עלול להוות בעיה חמורה.
        </Text>

        <Text size="lg" mb="xl">
          חברתנו מבצעת עבודות סבלות, העברת ציוד ופינוי פריטים המבטיחים לכם שקט נפשי
          ופינוי מקצועי ומהיר ללא בעיות מיותרות.
        </Text>

        <Title order={3} mb="md">היתרונות של שירותי הסבלות שלנו:</Title>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>סבלים מיומנים ומקצועיים</List.Item>
          <List.Item>ביצוע העבודה בזמן הקצר ביותר</List.Item>
          <List.Item>מינימום הפרעה לשגרת חייכם</List.Item>
          <List.Item>פינוי מקצועי למקומות מוסדרים</List.Item>
          <List.Item>שמירה על שלמות הציוד</List.Item>
        </List>

        <Stack gap="sm" mt="xl">
          <Title order={4} c="blue">השירות כולל:</Title>
          <List
            spacing="xs"
            size="md"
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
          >
            <List.Item>העברת ציוד מקצועית</List.Item>
            <List.Item>פינוי פריטים בצורה מוסדרת</List.Item>
            <List.Item>טיפול זהיר בציוד</List.Item>
            <List.Item>עבודה מהירה ויעילה</List.Item>
            <List.Item>פינוי למקומות מורשים בלבד</List.Item>
          </List>
        </Stack>

        <Text size="lg" mt="xl" c="dimmed">
          אנו נדאג שהציוד שלכם יפונה ללא פגיעה או נזק על ידי סבלים מיומנים,
          בזמן הקצר ביותר ותוך מינימום הפרעה לשגרת חייכם.
        </Text>
      </Paper>
    )
  }
];

export const TransportServices = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <>
      <Container size="lg" py="xl">
        <Stack gap="xl">
          <Title order={2} ta="center">השירותים שלנו</Title>
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
                <Text size="lg" fw={500} mt="md">
                  {service.title}
                </Text>
                <Text size="sm" c="dimmed" mt="sm">
                  {service.description}
                </Text>
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