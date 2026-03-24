// tests/full-flow.spec.js
import { test, expect } from '@playwright/test';
import  LoginPage from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { FinishPage } from '../pages/FinishPage';

test('Full flow with random items', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);
  const finish = new FinishPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await inventory.randomAddItems(3);
  await inventory.goToCart();
  await cart.removeOneItem();
  await cart.checkout();
  await checkout.fillForm('Jane', 'Doe', '12345');
  await finish.finish();
  expect(await finish.isComplete()).toBeTruthy();
});