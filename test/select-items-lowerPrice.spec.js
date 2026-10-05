// tests/select-items.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test.describe ('Select items from lower price', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
  });


  for (const count of [2, 3, 4]) {
    test(`Add ${count} items to cart`, async ({ page }) => {
      const inventory = new InventoryPage(page);
      await inventory.selectFilter('lohi'); // adjust filter to select lower price items
      await inventory.addItems(count);
      await inventory.goToCart();
      const items = await page.locator('.cart_item').count();
      expect(items).toBe(count);
    });
  }
});
