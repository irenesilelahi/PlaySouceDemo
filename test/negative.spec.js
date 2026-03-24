import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('Negative Login - invalid credentials', async ({ page }) => {
  const loginnPage = new LoginPage(page);

  await loginnPage.goto();
  await loginnPage.login('wrong_user', 'wrong_pass');

  await expect(loginnPage.errorMessage).toBeVisible();
});
