const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rya5nt",
  e2e: {
    specPattern: "/Users/Pavel/Work/Projects/Cypress2/cypress/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
