'use client';

import { Container, Title, Timeline, Text, ThemeIcon } from '@mantine/core';
import { IconPhoneCall, IconClipboardCheck, IconUsers, IconSparkles, IconStars } from '@tabler/icons-react';
import styles from './CleaningProcess.module.css';

export const CleaningProcess = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={2} ta="center" mb="xl">תהליך העבודה שלנו</Title>
      <Timeline active={-1} bulletSize={40} lineWidth={2} color="violet">
        <Timeline.Item
          bullet={<ThemeIcon size={40} color="violet" radius="xl"><IconPhoneCall size={20} /></ThemeIcon>}
          title="יצירת קשר ראשונית"
        >
          <Text size="sm" mt={4}>
            צוות המומחים שלנו יקשיב לצרכים שלכם ויתאים את השירות המושלם עבורכם
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<ThemeIcon size={40} color="violet" radius="xl"><IconClipboardCheck size={20} /></ThemeIcon>}
          title="הערכת צרכים ותכנון"
        >
          <Text size="sm" mt={4}>
            נבצע סיור במקום ונבנה תוכנית עבודה מותאמת אישית
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<ThemeIcon size={40} color="violet" radius="xl"><IconUsers size={20} /></ThemeIcon>}
          title="הקצאת צוות מקצועי"
        >
          <Text size="sm" mt={4}>
            נבחר את הצוות המתאים ביותר עם הציוד והחומרים הנדרשים
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<ThemeIcon size={40} color="violet" radius="xl"><IconSparkles size={20} /></ThemeIcon>}
          title="ביצוע העבודה"
        >
          <Text size="sm" mt={4}>
            צוות מקצועי יבצע את העבודה ביסודיות ובמקצועיות
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<ThemeIcon size={40} color="violet" radius="xl"><IconStars size={20} /></ThemeIcon>}
          title="בקרת איכות ומעקב"
        >
          <Text size="sm" mt={4}>
            נוודא את שביעות רצונכם ונבצע מעקב שוטף לשמירה על סטנדרט גבוה
          </Text>
        </Timeline.Item>
      </Timeline>
    </Container>
  );
}; 