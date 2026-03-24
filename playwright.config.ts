import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: false, // browser terlihat

    viewport: { width: 1280, height: 720 },
  },
  timeout: 60000,
  reporter: [['list']],
});
