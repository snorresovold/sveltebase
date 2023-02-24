import { test, expect } from '@playwright/experimental-ct-svelte';
import Button from "$lib/Button.svelte";

test('Test Button', async ({ mount }) => {
  const component = await mount(Button);
  await expect(component).toContainText('hello');
});