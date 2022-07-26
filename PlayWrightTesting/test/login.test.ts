import {chromium}   from 'playwright'

describe("First Playwright", () => {
    test("This website", async ()=>{
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto("https://www.google.com")
    })

})