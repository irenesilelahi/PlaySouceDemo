// pages/CartPage.js
export class CartPage {
  constructor(page) {
    this.page = page;
    this.removeButtons = page.locator('button.cart_button');
    this.checkoutButton = page.locator('#checkout');
  }

  async removeOneItem() {
    if (await this.removeButtons.count() > 0) {
      await this.removeButtons.nth(0).click();
    }
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}