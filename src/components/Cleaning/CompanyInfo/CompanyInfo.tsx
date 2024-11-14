'use client';

import { Container, Title, Text, Stack, Paper, List, ThemeIcon, Group, Image } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import styles from './CompanyInfo.module.css';

export const CompanyInfo = () => {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Paper shadow="sm" radius="md" p="xl" className={styles.paper}>
          <Stack gap="lg">
            <div>
              <Title order={2} mb="md">חברת ניקיון אקטיס - מובילים בתחום הניקיון המקצועי</Title>
              <Text size="lg">
                חברת אקטיס הוקמה בשנת 1995 וכבר למעלה מ-25 שנה מתמחה במתן שירותי אחזקה,
                שירותי ניקיון ושירותי פוליש ללקוחות מהמגזר הפרטי, העסקי והציבורי כאחד.
              </Text>
            </div>

            <Group gap="xl" align="flex-start">
              <Stack className={styles.content}>
                <Text size="lg">
                  אקטיס ניקיון מעניקה פתרונות אחזקת מבנים וניקיון הניתנים ללקוח על בסיס יומי/שבועי/חודשי
                  ובכל שעות היום. שירותי הניקיון ניתנים למגוון לקוחות מכל המגזרים בכל אזורי הארץ
                  במקצועיות ואיכות ללא פשרות.
                </Text>

                <List
                  spacing="sm"
                  size="lg"
                  center
                  icon={
                    <ThemeIcon color="violet" size={24} radius="xl">
                      <IconCheck size={16} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>שירות מקצועי ואיכותי ללא פשרות</List.Item>
                  <List.Item>צוות עובדים מיומן ומקצועי</List.Item>
                  <List.Item>ציוד וחומרי ניקוי מתקדמים</List.Item>
                  <List.Item>זמינות גבוהה ושירות מהיר</List.Item>
                  <List.Item>מחירים תחרותיים</List.Item>
                </List>
              </Stack>

              <Image
                src="/images/post-1.jpg"
                alt="שירותי ניקיון אקטיס"
                radius="md"
                className={styles.image}
              />
            </Group>

            <div>
              <Title order={3} mb="md">המומחיות שלנו</Title>
              <Text size="lg">
                חברת אקטיס מתמחה במגוון רחב של שירותי ניקיון, כולל ניקיון משרדים, מוסדות חינוך,
                מבני תעשייה, בתי עסק ועוד. אנו מספקים פתרונות ניקיון מותאמים אישית לכל לקוח,
                תוך שימוש בטכנולוגיות מתקדמות וחומרי ניקוי איכותיים.
              </Text>
            </div>

            <div>
              <Title order={3} mb="md">היתרונות שלנו</Title>
              <List
                spacing="sm"
                size="lg"
                icon={
                  <ThemeIcon color="violet" size={24} radius="xl">
                    <IconCheck size={16} />
                  </ThemeIcon>
                }
              >
                <List.Item>ניסיון רב שנים בתחום הניקיון המקצועי</List.Item>
                <List.Item>צוות עובדים קבוע ומיומן</List.Item>
                <List.Item>שימוש בחומרי ניקוי איכותיים וידידותיים לסביבה</List.Item>
                <List.Item>מערך בקרת איכות קפדני</List.Item>
                <List.Item>זמינות 24/7 לקריאות דחופות</List.Item>
                <List.Item>כיסוי ביטוחי מקיף</List.Item>
                <List.Item>מחירים תחרותיים ושקיפות מלאה</List.Item>
              </List>
            </div>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}; 