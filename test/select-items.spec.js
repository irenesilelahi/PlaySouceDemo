// tests/select-items.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Select items', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
  });

  for (const count of [2, 3, 4]) {
    test(`Add ${count} items to cart`, async ({ page }) => {
      const inventory = new InventoryPage(page);
      await inventory.addItems(count);
      await inventory.goToCart();
      const items = await page.locator('.cart_item').count();
      expect(items).toBe(count);
    });
  }
});