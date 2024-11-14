'use client';

import { Container, Text, Title, Paper, List, ThemeIcon } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import styles from './BuildingMaintenance.module.css';

export const BuildingMaintenance = () => {
  return (
    <Container size="lg" py="xl">
      <Paper shadow="sm" radius="md" p="xl" className={styles.paper}>
        <Title order={2} mb="xl">אחזקת מבנים</Title>
        <Text size="lg" mb="xl">
          אקטיס ניקיון מעניקה פתרונות אחזקת מבנים וניקיון הניתנים ללקוח על בסיס יומי/שבועי/חודשי
          ובכל שעות היום. שירותי הניקיון ניתנים למגוון לקוחות מכל המגזרים בכל אזורי הארץ במקצועיות
          ואיכות ללא פשרות.
        </Text>

        <List
          spacing="md"
          size="lg"
          center
          icon={
            <ThemeIcon color="violet" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>צוות עובדים מקצועי, אמין ומיומן</List.Item>
          <List.Item>מוקד תקשורת פעיל וזמין לאורך כל שעות היום</List.Item>
          <List.Item>יכולת תגובה מהירה ומתן שירות מיידי</List.Item>
          <List.Item>ציוד וחומרי ניקיון איכותיים מהיצרנים המובילים</List.Item>
        </List>
      </Paper>
    </Container>
  );
}; 