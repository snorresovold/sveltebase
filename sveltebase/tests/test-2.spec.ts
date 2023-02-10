import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/products/lnqv7d9fd4614z9');
  await page.getByRole('link', { name: 'avatar' }).click();
  await page.getByText('snorresovold').click();
  await page.locator('body').click();
  await page.getByRole('link', { name: 'Home' }).click();
});