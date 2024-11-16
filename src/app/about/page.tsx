'use client';

import { Container, Title, Text, Paper, Grid, Image, Stack, List, ThemeIcon } from '@mantine/core';
import { IconCheck, IconMapPin, IconBuildingStore, IconUsers, IconClock } from '@tabler/icons-react';
import styles from './About.module.css';

// Add this component for the video
const VideoPlayer = () => {
  return (
    <div className={styles.videoWrapper}>
      <video
        controls
        className={styles.videoPlayer}
        poster="/images/logo-1.png" // Optional: Add a thumbnail image
      >
        <source src="/video/actis.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default function AboutPage() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div className={styles.hero}>
          <Title className={styles.title} order={1}>אודות החברה</Title>
          <Text size="lg" className={styles.description}>
            חברת אקטיס מספקת שירותים מקצועיים בפריסה ארצית, עם דגש על איכות ומצוינות בשירות
          </Text>
        </div>

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Paper p="xl" radius="md" className={styles.paper}>
              <Stack gap="md">
                <Title order={2}>
                  <IconBuildingStore size={24} style={{ marginLeft: 8 }} />
                  סניף ראשי חיפה
                </Title>
                <Text>
                  לחברת אקטיס פריסה ארצית ורחבה, הסניף המרכזי של החברה ממוקם בחיפה.
                  חלק גדול מלקוחות החברה הינם מאזור חיפה והצפון.
                </Text>
                <Text>
                  אנו בחברת אקטיס סניף חיפה מציעים שירותי ניקיון לאזור חיפה, הקריות וכל אזור הצפון במקצועיות ואדיבות.
                </Text>
              </Stack>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <VideoPlayer />
          </Grid.Col>
        </Grid>

        <Title order={2} ta="center" mt="xl">למה לעבוד עם אקטיס?</Title>
        <Grid>
          <Grid.Col span={12}>
            <Paper p="xl" radius="md" className={styles.paper}>
              <Stack gap="xl">
                <List
                  spacing="lg"
                  size="lg"
                  icon={
                    <ThemeIcon color="blue" size={24} radius="xl">
                      <IconCheck size={16} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <Text fw={500}>שיטה ייחודית לניקוי חלונות</Text>
                    <Text size="sm" mt={4}>
                      חברת אקטיס מציעה שיטה ייחודית לניקוי חלונות באוסמוזה הפוכה,
                      המבטיחה תוצאות מושלמות וניקיון יסודי.
                    </Text>
                  </List.Item>

                  <List.Item>
                    <Text fw={500}>צי רכבים פרטי</Text>
                    <Text size="sm" mt={4}>
                      החברה מסיעה את עובדיה על ידי צי מיניבוסים פרטיים בבעלות החברה,
                      המבטיח זמינות גבוהה ויעילות מקסימלית בעלויות אטרקטיביות.
                    </Text>
                  </List.Item>

                  <List.Item>
                    <Text fw={500}>מערך סנפלינג מקצועי</Text>
                    <Text size="sm" mt={4}>
                      ניקוי חלונות למשרדים על ידי מערך סנפלינג מקצועי,
                      המאפשר ניקוי חלונות בגובה רב ביסודיות ובמקצועיות.
                    </Text>
                  </List.Item>

                  <List.Item>
                    <Text fw={500}>סטנדרטים גבוהים</Text>
                    <Text size="sm" mt={4}>
                      החברה מנוהלת בסטנדרטים גבוהים, תוך הקפדה על ביצוע עבודה מקצועית ויסודית,
                      עם מדדי שביעות רצון ללקוח.
                    </Text>
                  </List.Item>

                  <List.Item>
                    <Text fw={500}>חומרי ניקוי איכותיים</Text>
                    <Text size="sm" mt={4}>
                      שימוש בחומרי ניקוי איכותיים ביותר, תוך הקפדה על חומרים ריחניים
                      עם עמידות גבוהה.
                    </Text>
                  </List.Item>

                  <List.Item>
                    <Text fw={500}>ניסיון וותק</Text>
                    <Text size="sm" mt={4}>
                      לחברה ניסיון וותק רב בתחום הניקיון, בעיקר בתחום המוסדי,
                      למשרדים, קניונים ועסקים.
                    </Text>
                  </List.Item>

                  <List.Item>
                    <Text fw={500}>בקרת איכות מתמדת</Text>
                    <Text size="sm" mt={4}>
                      בחינת שביעות רצון הלקוח ובדיקת טיב השירות על ידי מבקרים חיצוניים
                      באופן שוטף.
                    </Text>
                  </List.Item>

                  <List.Item>
                    <Text fw={500}>פריסה ארצית</Text>
                    <Text size="sm" mt={4}>
                      שירות זמין בכל רחבי הארץ עם סניפים בחיפה, תל אביב ונתניה,
                      המאפשרים מענה מהיר ויעיל.
                    </Text>
                  </List.Item>
                </List>

                <Text size="lg" c="dimmed">
                  אנו מאמינים כי השילוב של מקצועיות, שירות איכותי ומחיר תחרותי
                  הוא המפתח להצלחה ולשביעות רצון מלאה של לקוחותינו.
                </Text>
              </Stack>
            </Paper>
          </Grid.Col>
        </Grid>

        <Paper p="xl" radius="md" className={styles.paper}>
          <Title order={2} mb="lg">מכוונות ללקוח</Title>
          <Text size="lg">
            חברת אקטיס מבינה כי שירות איכותי הוא הדבר החשוב ביותר ללקוחות החברה.
            מקצוענות ויסודיות, לצד מיקוד בשירותיות, מהווים יתרון ברור ללקוחותינו.
          </Text>
          <Text size="lg" mt="md">
            לחברת אקטיס לקוחות ותיקים הנמנים עם לקוחות החברה מזה שנים רבות.
            שימור לקוחות קיימים, תוך דגש על מענה לצרכי הלקוח לאורך זמן, הינו בראש יעדי החברה.
          </Text>
        </Paper>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Paper p="xl" radius="md" className={styles.paper}>
              <Title order={3} mb="lg">ניהול תחום הניקיון</Title>
              <Text>
                כעסק או כגוף ציבורי הנדרש לשירותי ניקיון, יציבות לצד מקצועיות הינו ערך עליון.
                חברת ניקיון טובה תדרוש מינימום אנרגיות ניהוליות של מנהלי הארגון.
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Paper p="xl" radius="md" className={styles.paper}>
              <Title order={3} mb="lg">המחיר</Title>
              <Text>
                אנו דואגים כי סל השירותים יהיה מקיף ויכלול ניהול עובדים, חומרי ניקיון איכותיים,
                הסעות עובדים ועוד - כל זאת במחיר אטרקטיבי ותחרותי.
              </Text>
            </Paper>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
} 