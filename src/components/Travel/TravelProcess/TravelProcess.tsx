'use client';

import { Container, Title, Timeline, Text, ThemeIcon } from '@mantine/core';
import { IconPhoneCall, IconClipboardCheck, IconBus } from '@tabler/icons-react';
import styles from './TravelProcess.module.css';

export const TravelProcess = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={2} ta="center" mb="xl">איך זה עובד?</Title>
      <div className={styles.timeline}>
        <Timeline active={-1} bulletSize={40} lineWidth={2} color="green">
          <Timeline.Item
            bullet={<ThemeIcon size={40} color="green" radius="xl"><IconPhoneCall size={20} /></ThemeIcon>}
            title="יצירת קשר"
          >
            <Text c="dimmed" size="sm">צרו איתנו קשר לתיאום הסעה או קבלת הצעת מחיר</Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<ThemeIcon size={40} color="green" radius="xl"><IconClipboardCheck size={20} /></ThemeIcon>}
            title="תיאום פרטים"
          >
            <Text c="dimmed" size="sm">נתאם את כל הפרטים: מסלול, שעות, וסוג הרכב המתאים</Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<ThemeIcon size={40} color="green" radius="xl"><IconBus size={20} /></ThemeIcon>}
            title="ביצוע ההסעה"
          >
            <Text c="dimmed" size="sm">נהג מקצועי יגיע בזמן שנקבע עם רכב נוח ובטיחותי</Text>
          </Timeline.Item>
        </Timeline>
      </div>
    </Container>
  );
}; 