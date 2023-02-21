import { test, expect } from '@playwright/test';

test('Test login system', async ({ page }) => {
  await page.goto('http://localhost:4173/'); // the url of the playwright server
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('username').click();
  await page.getByPlaceholder('username').fill('test');
  await page.getByPlaceholder('username').press('Tab');
  await page.getByPlaceholder('Password').fill('TestPassword123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'Signed in as test Sign Out' }).click();
  await page.getByRole('banner', { name: 'Site Header' }).getByText('Signed in as test').click();
  await page.getByRole('banner', { name: 'Site Header' }).getByRole('button', { name: 'Sign out' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  //await page.getByRole('heading', { name: 'Welcome to SvelteKit' }).click();

});