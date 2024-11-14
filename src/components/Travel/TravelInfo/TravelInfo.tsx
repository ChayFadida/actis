'use client';

import { Container, Title, Text, Paper, List, ThemeIcon, Stack, Group, Image } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import styles from './TravelInfo.module.css';

export const TravelInfo = () => {
  return (
    <Container size="lg" py="xl">
      <Paper shadow="sm" radius="md" p="xl" className={styles.paper}>
        <Stack gap="lg">
          <Title order={2} ta="center">שירותי הסעות מקצועיים</Title>

          <Group gap="xl" align="flex-start">
            <Stack className={styles.content}>
              <Text size="lg">
                חברת אקטיס מספקת שירותי הסעות מקצועיים ואמינים בפריסה ארצית.
                אנו מתמחים בהסעות תלמידים, הסעות עובדים והסעות לאירועים,
                עם צי רכבים חדיש ונהגים מקצועיים ומנוסים.
              </Text>

              <Text size="lg">
                אנו מקפידים על סטנדרטים גבוהים של בטיחות, אמינות ושירות.
                כל נהגינו מוסמכים ובעלי ניסיון רב, וכל רכבינו עוברים בדיקות תקופתיות
                ומצוידים במערכות בטיחות מתקדמות.
              </Text>

              <List
                spacing="sm"
                size="lg"
                icon={
                  <ThemeIcon color="green" size={24} radius="xl">
                    <IconCheck size={16} />
                  </ThemeIcon>
                }
              >
                <List.Item>צי רכבים חדיש ומתוחזק היטב</List.Item>
                <List.Item>נהגים מקצועיים ומנוסים</List.Item>
                <List.Item>זמינות 24/7 לכל סוגי ההסעות</List.Item>
                <List.Item>מחירים תחרותיים ושקיפות מלאה</List.Item>
                <List.Item>שירות אדיב ומקצועי</List.Item>
                <List.Item>כיסוי ביטוחי מקיף</List.Item>
              </List>
            </Stack>

            <Image
              src="/images/airport.jpg"
              alt="שירותי הסעות אקטיס"
              radius="md"
              className={styles.image}
            />
          </Group>

          <Text size="lg" c="dimmed">
            אקטיס מחויבת להעניק ללקוחותיה את השירות הטוב ביותר, תוך הקפדה על בטיחות,
            דייקנות ונוחות מרבית. אנו מזמינים אתכם ליצור קשר ולהצטרף למעגל לקוחותינו המרוצים.
          </Text>
        </Stack>
      </Paper>
    </Container>
  );
}; 