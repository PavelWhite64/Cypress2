import movie from "../fixtures/movieSelector.json";

describe("The main page should be visible", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visible H1", () => {
    cy.get("h1").should("be.visible").should("have.text", "Идёмвкино");
  });
  it("Visible for 7 days", () => {
    cy.get(movie.listDay).should(`have.length`, 7);
  });
});