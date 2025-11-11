import { expect } from '@playwright/test';
import { test } from '../fixture';

test('misleading error message', async ({ customPage }) => {
  await customPage.goto('https://playwright.dev/');

  await customPage.getByRole("button", { name: "Potato" }).click();
});


test('fails correctly with expect', async ({ customPage }) => {
  await customPage.goto('https://playwright.dev/');

  const potatoButton = customPage.getByRole("button", { name: "Potato" });

  await expect(potatoButton).toBeVisible();
});


test('fails correctly with default context/page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole("button", { name: "Potato" }).click();
});