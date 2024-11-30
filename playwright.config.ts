import { defineConfig } from '@playwright/test';
import os from "node:os";


export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  globalSetup: require.resolve("./global-setup"),
  workers: os.cpus().length,
  reporter: [
    ["list"],
    ["html", {open: "never"}]
  ],
  timeout: 150000,
  use: {
    actionTimeout: 0,
    trace: "on-first-retry",
    screenshot: "only-on-failure"  
  },
});
