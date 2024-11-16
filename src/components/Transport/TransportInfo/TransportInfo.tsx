'use client';

import { Container, Title, Text, Paper, List, ThemeIcon, Stack, Group, Image } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import styles from './TransportInfo.module.css';

export const TransportInfo = () => {
  return (
    <Container size="lg" py="xl">
      <Paper shadow="sm" radius="md" p="xl" className={styles.paper}>
        <Stack gap="lg">
          <Title order={2} ta="center">שירותי הובלות ושליחויות מקצועיים</Title>

          <Group gap="xl" align="flex-start">
            <Stack className={styles.content}>
              <Text size="lg">
                חברת אקטיס מספקת מגוון רחב של שירותי הובלות ושליחויות עבור לקוחות פרטיים,
                עסקיים ומוסדיים בכל רחבי הארץ. אנו מתמחים במתן פתרונות מקצועיים ומותאמים אישית.
              </Text>

              <Text size="lg">
                חברתנו מעמידה לשירותכם צוות עובדים מקצועי, אחראי ואמין בעל ניסיון עשיר,
                יחד עם צי רכבים מתקדם המותאם לכל סוגי ההובלות.
              </Text>

              <List
                spacing="sm"
                size="lg"
                icon={
                  <ThemeIcon color="blue" size={24} radius="xl">
                    <IconCheck size={16} />
                  </ThemeIcon>
                }
              >
              </List>
            </Stack>
            <Image
              src="/images/transport.jpg"
              alt="שירותי הובלות אקטיס"
              radius="md"
              className={styles.image}
            />
          </Group>

          <Title order={3} mt="xl">השירותים שלנו כוללים:</Title>
          <List
            spacing="md"
            size="lg"
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <Text fw={500} component="span">שירותי הובלה:</Text>
              {' '}הובלות מקצועיות לכל סוגי המטענים והציוד
            </List.Item>
            <List.Item>
              <Text fw={500} component="span">שירותי שליחויות:</Text>
              {' '}משלוחים מהירים ואמינים בכל רחבי הארץ
            </List.Item>
            <List.Item>
              <Text fw={500} component="span">שירותי אריזה:</Text>
              {' '}אריזה מקצועית ובטוחה של כל סוגי המטענים
            </List.Item>
            <List.Item>
              <Text fw={500} component="span">שירותי אחסון:</Text>
              {' '}פתרונות אחסון מתקדמים ומאובטחים
            </List.Item>
            <List.Item>
              <Text fw={500} component="span">פריקת מכולות:</Text>
              {' '}שירותי פריקה והעמסה מקצועיים
            </List.Item>
          </List>

          <Text size="lg" c="dimmed" mt="md">
            אנו באקטיס מקפידים על מתן שירות מקצועי, יעיל ומהיר, תוך הקפדה על עמידה בלוחות זמנים
            ושמירה על הסטנדרטים הגבוהים ביותר. אנו מזמינים אתכם ליהנות משירות שעומד בסטנדרטים
            הגבוהים ביותר ולהצטרף למעגל לקוחותינו המרוצים.
          </Text>
        </Stack>
      </Paper>
    </Container>
  );
}; 