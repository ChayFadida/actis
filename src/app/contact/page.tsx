'use client';

import { 
  Container, 
  Title, 
  Text, 
  Paper, 
  Grid, 
  Stack,
  TextInput,
  Textarea,
  Button,
  Select,
  Group,
  ThemeIcon
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { 
  IconPhone, 
  IconMail, 
  IconMapPin, 
  IconBrandWhatsapp,
  IconBuildingStore,
  IconSend,
  IconCheck,
  IconX
} from '@tabler/icons-react';
import styles from './Contact.module.css';

export default function ContactPage() {
  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'שם חייב להכיל לפחות 2 תווים' : null),
      phone: (value) => (/^\d{9,10}$/.test(value) ? null : 'מספר טלפון לא תקין'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'כתובת אימייל לא תקינה'),
      service: (value) => (!value ? 'נא לבחור שירות' : null),
      message: (value) => (value.length < 10 ? 'ההודעה חייבת להכיל לפחות 10 תווים' : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    const loadingNotification = notifications.show({
      id: 'loading',
      loading: true,
      title: 'שולח את הטופס',
      message: 'אנא המתן...',
      autoClose: false,
      withCloseButton: false,
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('שגיאה בשליחת הטופס');
      }

      notifications.hide(loadingNotification);
      notifications.show({
        id: 'success',
        color: 'green',
        title: 'הטופס נשלח בהצלחה!',
        message: 'נציג שלנו יצור איתך קשר בהקדם',
        icon: <IconCheck size="1.1rem" />,
        autoClose: 5000,
      });

      form.reset();
    } catch (error) {
      notifications.hide(loadingNotification);
      notifications.show({
        id: 'error',
        color: 'red',
        title: 'שגיאה בשליחת הטופס',
        message: 'אנא נסה שוב מאוחר יותר',
        icon: <IconX size="1.1rem" />,
        autoClose: 5000,
      });
    }
  };

  return (
    <Container size="lg" py="xl">
      <Title ta="center" mb="xl">צור קשר</Title>

      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack gap="lg">
            <Paper p="xl" radius="md" className={styles.paper}>
              <Stack gap="md">
                <Title order={3}>פרטי התקשרות</Title>

                <Group gap="xs">
                  <ThemeIcon color="blue" size={24} radius="xl">
                    <IconBuildingStore size={16} />
                  </ThemeIcon>
                  <Text fw={500}>סניף ראשי חיפה:</Text>
                  <Text>דרך העצמאות 90 א׳</Text>
                </Group>

                <Group gap="xs">
                  <ThemeIcon color="blue" size={24} radius="xl">
                    <IconPhone size={16} />
                  </ThemeIcon>
                  <Text>סניף נתניה: 098612614</Text>
                </Group>

                <Group gap="xs">
                  <ThemeIcon color="blue" size={24} radius="xl">
                    <IconPhone size={16} />
                  </ThemeIcon>
                  <Text>סניף תל אביב: 036886887</Text>
                </Group>

                <Group gap="xs">
                  <ThemeIcon color="green" size={24} radius="xl">
                    <IconBrandWhatsapp size={16} />
                  </ThemeIcon>
                  <Text>וואטסאפ: 050-1234567</Text>
                </Group>

                <Group gap="xs">
                  <ThemeIcon color="blue" size={24} radius="xl">
                    <IconMail size={16} />
                  </ThemeIcon>
                  <Text>דוא״ל: info@actis.co.il</Text>
                </Group>
              </Stack>
            </Paper>

            <Paper p="xl" radius="md" className={styles.paper}>
              <Stack gap="md">
                <Title order={3}>שעות פעילות</Title>
                <Text>אנחנו זמינים 24/7 לכל פנייה!</Text>
                <Text size="sm">
                  צוות השירות שלנו יחזור אליכם בהקדם האפשרי
                  עם מענה מקצועי ומותאם אישית.
                </Text>
              </Stack>
            </Paper>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <Paper p="xl" radius="md" className={styles.paper}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="md">
                <Title order={3}>טופס יצירת קשר</Title>
                <Text c="dimmed">
                  מלאו את הפרטים ונחזור אליכם בהקדם
                </Text>

                <TextInput
                  required
                  label="שם מלא"
                  placeholder="הכנס שם מלא"
                  {...form.getInputProps('name')}
                />

                <TextInput
                  required
                  label="טלפון"
                  placeholder="הכנס מספר טלפון"
                  {...form.getInputProps('phone')}
                />

                <TextInput
                  required
                  label="דוא״ל"
                  placeholder="הכנס כתובת דוא״ל"
                  {...form.getInputProps('email')}
                />

                <Select
                  required
                  label="סוג השירות"
                  placeholder="בחר שירות"
                  data={[
                    { value: 'cleaning', label: 'שירותי ניקיון' },
                    { value: 'transport', label: 'שירותי הסעות' },
                    { value: 'moving', label: 'שירותי הובלות' },
                    { value: 'other', label: 'אחר' },
                  ]}
                  {...form.getInputProps('service')}
                />

                <Textarea
                  required
                  label="הודעה"
                  placeholder="כתוב את הודעתך כאן"
                  minRows={4}
                  {...form.getInputProps('message')}
                />

                <Button 
                  type="submit" 
                  leftSection={<IconSend size={16} />}
                  size="md"
                >
                  שלח הודעה
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
} 