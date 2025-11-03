import { expect } from '@playwright/test';
import { test } from '../fixture';

test('misleading error message', async ({ customPage }) => {
  await customPage.goto('https://playwright.dev/');

  await customPage.getByRole("button", { name: "Potato" }).click();
});


test('fails correctly', async ({ customPage }) => {
  await customPage.goto('https://playwright.dev/');

  const potatoButton = customPage.getByRole("button", { name: "Potato" });

  expect(potatoButton).toBeVisible();
});