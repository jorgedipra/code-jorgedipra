const { test, expect } = require('@playwright/test');

test.describe('Jorgedipra Portfolio', () => {
  test('page loads with title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/jorgedipra/);
  });

  test('home section renders', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1.title.is-4')).toContainText('Jorge Diaz');
  });

  test('portafolio section loads data', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#portafolio')).toBeVisible();
    await expect(page.locator('.card-row').first()).toBeVisible({ timeout: 10000 });
  });

  test('contacto section has social links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#contacto')).toBeVisible();
    await expect(page.locator('.LinkContat')).toHaveCount(8);
  });
});
