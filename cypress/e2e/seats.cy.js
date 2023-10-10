import seats from "../fixtures/seats.json";
import movie from "../fixtures/movieSelector.json";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Books seats", () => {
    cy.get(movie.listDay).eq(5).click();
    cy.get(movie.listMovie).eq(1).contains("15:00").click();
    seats.forEach((seat) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
      ).click();
    });
    cy.contains("Забронировать").click();
    cy.contains("Получить код бронирования").should("be.visible");
  });
});
