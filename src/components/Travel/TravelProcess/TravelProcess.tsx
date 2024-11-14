'use client';

import { Container, Title, Timeline, Text } from '@mantine/core';
import styles from './TravelProcess.module.css';

export const TravelProcess = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={2} ta="center" mb="xl">תהליך ההזמנה</Title>
      <Timeline active={-1} bulletSize={24} lineWidth={2}>
        <Timeline.Item title="יצירת קשר">
          <Text c="dimmed" size="sm">פנו אלינו לקבלת הצעת מחיר</Text>
        </Timeline.Item>
        <Timeline.Item title="תיאום פרטים">
          <Text c="dimmed" size="sm">נתאם את כל הפרטים הנדרשים</Text>
        </Timeline.Item>
        <Timeline.Item title="ביצוע ההסעה">
          <Text c="dimmed" size="sm">נבצע את ההסעה במועד שנקבע</Text>
        </Timeline.Item>
      </Timeline>
    </Container>
  );
}; 