import { BasePage } from "./basepage";

export class GridPage extends BasePage {
  static get gridTab() {
    return cy.get("#demo-tab-grid");
  }

  static get gridItems() {
    return cy.get("#demo-tabpane-grid li");
  }

  static getItem(text) {
    return cy.get("#demo-tabpane-grid li").contains(text);
  }
}
