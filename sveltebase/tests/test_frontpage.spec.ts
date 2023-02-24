import { test, expect } from '@playwright/test';

test('test frontpage ui', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Careers' }).click();
  await page.getByRole('link', { name: 'History' }).click();
  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Projects' }).click();
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.getByText('About Careers History Services Projects Blog Login Register Toggle menu').click();
  await page.getByRole('link', { name: 'Home' }).click();
});