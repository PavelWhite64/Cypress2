import tests from "../fixtures/adminsData.json";
import selector from "../fixtures/adminSelector.json";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  it("Happy path", () => {
    cy.get(selector.Email_Input).type(tests.validEmail);
    cy.get(selector.Password_Input).type(tests.validPassword);

    cy.get(selector.button).click();
    cy.get(".conf-step").should(`have.length`, 5);
  });
});
