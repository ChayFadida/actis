'use client';

import { Loader } from '@mantine/core';
import styles from './LoadingOverlay.module.css';

export const LoadingOverlay = () => {
  return (
    <div className={styles.overlay}>
      <Loader color="violet" size="xl" type="dots" />
    </div>
  );
}; 