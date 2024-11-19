'use client';

import React, { useState, useEffect } from 'react';
import { 
  Stack, 
  Group, 
  Switch, 
  ActionIcon, 
  Divider, 
  Button, 
  Text,
  ThemeIcon,
  Radio,
  RadioGroup
} from '@mantine/core';
import { 
  IconAccessible,
  IconZoomIn, 
  IconZoomOut, 
  IconAbc,
  IconLink,
  IconSun,
  IconMoonStars,
  IconTypography,
  IconReload
} from '@tabler/icons-react';
import styles from './AccessibilityMenu.module.css';

const FontSizeButtons = ({ onReset }: { onReset: () => void }) => {
  const [currentSize, setCurrentSize] = useState(100);

  const changeFontSize = (newSize: number) => {
    document.documentElement.style.fontSize = `${newSize}%`;
    setCurrentSize(newSize);
  };

  const increase = () => {
    if (currentSize < 150) {
      changeFontSize(currentSize + 10);
    }
  };

  const decrease = () => {
    if (currentSize > 80) {
      changeFontSize(currentSize - 10);
    }
  };

  const reset = () => {
    changeFontSize(100);
  };

  useEffect(() => {
    const handleReset = () => {
      changeFontSize(100);
    };
    
    if (onReset) {
      handleReset();
    }
  }, [onReset]);

  return (
    <Group justify="center" gap="sm">
      <ActionIcon
        variant="light"
        color="blue"
        onClick={decrease}
        disabled={currentSize <= 80}
        title="הקטן טקסט"
      >
        <IconZoomOut size={16} />
      </ActionIcon>
      <Button 
        variant="light" 
        onClick={reset}
        size="xs"
      >
        {currentSize}%
      </Button>
      <ActionIcon
        variant="light"
        color="blue"
        onClick={increase}
        disabled={currentSize >= 150}
        title="הגדל טקסט"
      >
        <IconZoomIn size={16} />
      </ActionIcon>
    </Group>
  );
};

export const AccessibilityMenu = () => {
  const [opened, setOpened] = useState(false);
  const [contrastMode, setContrastMode] = useState('none');
  const [activeFeatures, setActiveFeatures] = useState({
    linkHighlight: false,
    readableFont: false,
  });
  const [resetTrigger, setResetTrigger] = useState(false);

  const handleContrastChange = (value: string) => {
    // Remove all contrast-related classes first
    document.body.classList.remove(
      styles.highContrast,
      styles.invertedContrast,
      styles.grayscale,
      styles.lightBackground
    );

    // Add the new class if a mode is selected
    if (value !== 'none') {
      document.body.classList.add(styles[value]);
    }

    setContrastMode(value);
  };

  const updateFeature = (feature: string, isActive: boolean) => {
    setActiveFeatures(prev => ({ ...prev, [feature]: isActive }));
    
    if (isActive) {
      document.body.classList.add(styles[feature]);
    } else {
      document.body.classList.remove(styles[feature]);
    }
  };

  const handleReset = () => {
    // Reset all other features
    setContrastMode('none');
    document.body.classList.remove(
      styles.highContrast,
      styles.invertedContrast,
      styles.grayscale,
      styles.lightBackground
    );

    setActiveFeatures({
      linkHighlight: false,
      readableFont: false,
    });
    document.body.classList.remove(
      styles.linkHighlight,
      styles.readableFont
    );

    // Trigger font size reset
    setResetTrigger(prev => !prev);
  };

  return (
    <div className={styles.accessibilityWrapper}>
      <ActionIcon
        variant="filled"
        color="blue"
        size="xl"
        className={styles.accessibilityButton}
        onClick={() => setOpened((o) => !o)}
        aria-label="תפריט נגישות"
      >
        <IconAccessible size={24} />
      </ActionIcon>

      {opened && (
        <div className={styles.accessibilityMenu}>
          <Stack gap="md" p="md">
            <Text fw={700} ta="center">הגדרות נגישות</Text>

            <Divider label="גודל טקסט" labelPosition="center" />
            <FontSizeButtons onReset={resetTrigger} />

            <Divider label="מצב תצוגה" labelPosition="center" />
            
            <RadioGroup
              value={contrastMode}
              onChange={handleContrastChange}
              name="contrastMode"
            >
              <Stack gap="xs">
                <Radio value="none" label="ללא שינוי" />
                <Radio value="highContrast" label="ניגודיות גבוהה" />
                <Radio value="invertedContrast" label="ניגודיות הפוכה" />
                <Radio value="grayscale" label="גווני אפור" />
                <Radio value="lightBackground" label="רקע בהיר" />
              </Stack>
            </RadioGroup>

            <Divider label="אפשרויות נוספות" labelPosition="center" />

            <Group gap="sm">
              <ThemeIcon color="blue" size={24} variant="light">
                <IconLink size={16} />
              </ThemeIcon>
              <Switch
                label="הדגשת קישורים"
                checked={activeFeatures.linkHighlight}
                onChange={(e) => updateFeature('linkHighlight', e.currentTarget.checked)}
              />
            </Group>

            <Group gap="sm">
              <ThemeIcon color="blue" size={24} variant="light">
                <IconTypography size={16} />
              </ThemeIcon>
              <Switch
                label="פונט קריא"
                checked={activeFeatures.readableFont}
                onChange={(e) => updateFeature('readableFont', e.currentTarget.checked)}
              />
            </Group>

            <Button
              variant="light"
              color="red"
              leftSection={<IconReload size={16} />}
              onClick={handleReset}
              fullWidth
            >
              איפוס הגדרות
            </Button>
          </Stack>
        </div>
      )}
    </div>
  );
}; 