// pages/FinishPage.js
export class FinishPage {
  constructor(page) {
    this.page = page;
    this.finishButton = page.locator('#finish');
    this.completeHeader = page.locator('.complete-header');
  }

  async finish() {
    await this.finishButton.click();
  }

  async isComplete() {
    return await this.completeHeader.isVisible();
  }
}