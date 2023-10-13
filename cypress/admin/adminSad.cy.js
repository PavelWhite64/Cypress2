import tests from "../fixtures/adminsData.json";
import selector from "../fixtures/adminSelector.json";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  it("Sad path", () => {
    cy.get(selector.Email_Input).type(tests.invalidEmail);
    cy.get(selector.Password_Input).type(tests.invalidPassword);

    cy.get(selector.button).click();
    cy.contains("Ошибка авторизации!").should("be.visible");
  });
});