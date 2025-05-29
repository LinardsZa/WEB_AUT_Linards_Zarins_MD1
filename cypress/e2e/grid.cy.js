import { GridPage } from "../PObjects/GridPage";

describe("Selecting grid values", () => {
  beforeEach(() => {
    GridPage.visit();
    GridPage.gridTab.click();
  });

  it("Select grid items that are even and validate the ones that are not selected", () => {
    GridPage.getItem("Two").click();
    GridPage.getItem("Four").click();
    GridPage.getItem("Six").click();
    GridPage.getItem("Eight").click();

    GridPage.getItem("Two").should("have.class", "active");
    GridPage.getItem("Four").should("have.class", "active");
    GridPage.getItem("Six").should("have.class", "active");
    GridPage.getItem("Eight").should("have.class", "active");

    GridPage.getItem("One").should("not.have.class", "active");
    GridPage.getItem("Three").should("not.have.class", "active");
    GridPage.getItem("Five").should("not.have.class", "active");
    GridPage.getItem("Seven").should("not.have.class", "active");
    GridPage.getItem("Nine").should("not.have.class", "active");
  });
});
