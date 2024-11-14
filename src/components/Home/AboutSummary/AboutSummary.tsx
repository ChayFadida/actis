'use client';

import { Container, Text, Stack, Paper } from '@mantine/core';
import styles from './AboutSummary.module.css';

export const AboutSummary = () => {
  return (
    <Container size="lg" py="xl">
      <Paper shadow="sm" radius="md" p="xl" className={styles.paper}>
        <Stack gap="md">
          <Text size="lg">
            שירותי החברה ניתנים בפריסה ארצית לאורך כל שעות היום במקצועיות ובאיכות ללא פשרות,
            תוך כדי מתן ייעוץ ופתרונות בנושאים שונים ללקוחות החברה בכל עת.
          </Text>
          
          <Text size="lg">
            חברתנו מעסיקה צוות עובדים מיומן, מקצועי ואמין המספק שירות מקצועי ואישי ללקוחותיה
            ומעמיד לרשותה ידע, מומחיות, מקצועיות ונסיון רב שנרכש במשך שנות פעילות החברה.
          </Text>
          
          <Text size="lg">
            אקטיס דוגלת במתן בית חם לעובדיה תוך כדי טיפוח המשאב האנושי כנכס עיקרי בחברה.
          </Text>
          
          <Text size="lg">
            נשמח לצרף אתכם לקהל לקוחותינו, הכולל בתוכו חברות עסקיות, משרדים, מוסדות ציבוריים,
            קבלנים, מפעלים תעשייתיים ואינספור לקוחות פרטיים.
          </Text>
          
          <Text size="lg" fw={500} className={styles.highlight}>
            אנו באקטיס נדאג לספק את צרכיי הלקוח תוך כדי מתן מענה אופטימלי לדרישותיו.
          </Text>
        </Stack>
      </Paper>
    </Container>
  );
}; 