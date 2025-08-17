import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['list'],
    ['allure-playwright'],
  ],
  timeout: 60000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
  },
});
