import { GridPage } from "../PObjects/GridPage";

describe("Selectable - Grid scenario", () => {
  beforeEach(() => {
    GridPage.visit();
    GridPage.gridTab.click();
  });

  it("Select even grid items and validate highlighting", () => {
    // Click even-numbered items
    GridPage.getItem("Two").click();
    GridPage.getItem("Four").click();
    GridPage.getItem("Six").click();
    GridPage.getItem("Eight").click();

    // Validate they are selected
    GridPage.getItem("Two").should("have.class", "active");
    GridPage.getItem("Four").should("have.class", "active");
    GridPage.getItem("Six").should("have.class", "active");
    GridPage.getItem("Eight").should("have.class", "active");

    // Validate unselected items
    GridPage.getItem("One").should("not.have.class", "active");
    GridPage.getItem("Three").should("not.have.class", "active");
    GridPage.getItem("Five").should("not.have.class", "active");
    GridPage.getItem("Seven").should("not.have.class", "active");
    GridPage.getItem("Nine").should("not.have.class", "active");
  });
});
