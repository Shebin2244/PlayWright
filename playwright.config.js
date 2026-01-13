// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // retries: process.env.CI ? 2 : 0,
  retries:1,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout:5 * 1000,
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',     // ✅ system Chrome
      },
    },
    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',     // ✅ system Edge
      },
    },
  ],
});
