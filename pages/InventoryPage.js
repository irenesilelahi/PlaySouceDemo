// pages/InventoryPage.js
export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.items = page.locator('.inventory_item');
    this.addToCartButtons = page.locator('button.btn_inventory');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addItems(count) {
    for (let i = 0; i < count; i++) {
      await this.addToCartButtons.nth(i).click();
    }
  }

  async randomAddItems(count) {
    const total = await this.addToCartButtons.count();
    const indexes = [...Array(total).keys()].sort(() => 0.5 - Math.random()).slice(0, count);
    for (const i of indexes) {
      await this.addToCartButtons.nth(i).click();
    }
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}