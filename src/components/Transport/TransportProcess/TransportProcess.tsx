'use client';

import { Container, Title, Timeline, Text, ThemeIcon } from '@mantine/core';
import { IconPhoneCall, IconClipboardCheck, IconTruck, IconCheck } from '@tabler/icons-react';
import styles from './TransportProcess.module.css';

export const TransportProcess = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={2} ta="center" mb="xl">איך זה עובד?</Title>
      <div className={styles.timeline}>
        <Timeline active={-1} bulletSize={40} lineWidth={2} color="blue">
          <Timeline.Item
            bullet={<ThemeIcon size={40} color="blue" radius="xl"><IconPhoneCall size={20} /></ThemeIcon>}
            title="יצירת קשר ראשוני"
          >
            <Text c="dimmed" size="sm">
              צרו איתנו קשר לקבלת הצעת מחיר והתייעצות מקצועית
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<ThemeIcon size={40} color="blue" radius="xl"><IconClipboardCheck size={20} /></ThemeIcon>}
            title="תיאום והערכת צרכים"
          >
            <Text c="dimmed" size="sm">
              נתאם פגישה להערכת הצרכים שלכם ובניית תכנית עבודה מותאמת
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<ThemeIcon size={40} color="blue" radius="xl"><IconTruck size={20} /></ThemeIcon>}
            title="ביצוע העבודה"
          >
            <Text c="dimmed" size="sm">
              צוות מקצועי יבצע את העבודה במועד שנקבע, תוך הקפדה על כל הפרטים
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<ThemeIcon size={40} color="blue" radius="xl"><IconCheck size={20} /></ThemeIcon>}
            title="בקרת איכות"
          >
            <Text c="dimmed" size="sm">
              נוודא את שביעות רצונכם המלאה מהשירות
            </Text>
          </Timeline.Item>
        </Timeline>
      </div>
    </Container>
  );
}; 