import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('Login successfully', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  // Assertion untuk memastikan redirect ke halaman inventory
  await expect(page).toHaveURL(/.*inventory/);
});
