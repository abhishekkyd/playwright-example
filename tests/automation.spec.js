import { test, expect } from '@playwright/test';

test('verify the page has a title and that has the word Hello world', async ({ page }) => {
  //await page.goto('https://playwright.dev/');
  await page.goto('workspaces/playwright-example/tests/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Hello World/);

  //create a locator 
  const header = page.locator("text = Hello World")

  await expect(header).toBeVisible()

  });

