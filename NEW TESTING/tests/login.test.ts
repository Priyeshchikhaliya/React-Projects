import { webkit, test } from "@playwright/test";

test("Login Test", async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://letcode.in/");
  // Gracefully close up everything
  await context.close();
  await browser.close();
});
