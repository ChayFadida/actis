import { createTheme, rem, MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  primaryColor: 'violet',
  defaultRadius: 'md',
  fontFamily: 'Assistant, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily: 'Assistant, inherit',
  },
  colors: {
    // Custom purple color for Actis
    actis: [
      '#f3f0ff', // 0
      '#e5dbff', // 1
      '#d0bfff', // 2
      '#b197fc', // 3
      '#9775fa', // 4
      '#845ef7', // 5
      '#7950f2', // 6 - Primary
      '#7048e8', // 7
      '#6741d9', // 8
      '#5f3dc4'  // 9
    ],
  },
  other: {
    headerHeight: rem(60),
  }
};

// Add type for custom colors
declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: {
      actis: string[];
    };
  }
} 