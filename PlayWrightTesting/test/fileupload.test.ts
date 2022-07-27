import { chromium } from "playwright";
import { test, expect } from '@playwright/test';

describe("First Playwright", () => {
  test("This website", async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/upload");
    page.on("filechooser", async (file) => {
      await file.setFiles("video/test1.webm");
    });
    // Click #drag-drop-upload
    await page.locator("#drag-drop-upload").click();
    // Upload package.json

    // await page.close();
    // await context.close();
    // await browser.close();
  });
})
