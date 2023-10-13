import movie from "../fixtures/movieSelector.json";

describe("The main page should be visible", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visible H1", () => {
    cy.get("h1").should("be.visible").should("have.text", "Идёмвкино");
  });
  it("Visible for 3 films", () => {
    cy.get(movie.listMovie).should(`have.length`, 3);
  });
});
