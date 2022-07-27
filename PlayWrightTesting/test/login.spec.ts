// import { chromium } from "playwright";
// import { test, expect } from '@playwright/test';

//   test("This website", async () => {
//     const browser = await chromium.launch({ headless: false });
//     const context = await browser.newContext({
//       recordVideo: {
//         dir: "video/",
//       },
//     }); 
//     const page = await context.newPage();
//     await page.goto("https://letcode.in/");
//     // Click text=Log in
//     await page.locator("text=Log in").click();
//     await page.waitForURL("https://letcode.in/signin");
//     // Click text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]
//     await page
//       .locator(
//         'text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]'
//       )
//       .click();
//     // Fill text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]
//     await page
//       .locator(
//         'text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]'
//       )
//       .fill("ppriyesh61@gmail.com");
//     // Press Tab
//     await page
//       .locator(
//         'text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]'
//       )
//       .press("Tab");
//     // Fill [placeholder="Enter password"]
//     await page.locator('[placeholder="Enter password"]').fill("Priyesh!9909");
//     // Click text=LOGIN
//     await page.locator("text=LOGIN").click();
//     await page.waitForURL("https://letcode.in/");
//     // Click [aria-label="Close"]
//     await page.locator('[aria-label="Close"]').click();
//     // Click [aria-label="main navigation"] >> text=Courses
//     await page
//       .locator('[aria-label="main navigation"] >> text=Courses')
//       .click();
//     await page.waitForURL("https://letcode.in/courses");
//     // Click text=Playwright Playwright enables reliable end-to-end testing for modern web apps. I >> button
//     await page
//       .locator(
//         "text=Playwright Playwright enables reliable end-to-end testing for modern web apps. I >> button"
//       )
//       .click();
//     await page.waitForURL("https://letcode.in/playwright");
//     // Click .navbar-item >> nth=0
//     await page.locator(".navbar-item").first().click();
//     await page.waitForURL("https://letcode.in/");
//     // Click text=Sign out
//     await page.locator("text=Sign out").click();
//     await page.waitForURL("https://letcode.in/");
//     // await page.close();
//     // await context.close();
//     // await browser.close();
//   });
