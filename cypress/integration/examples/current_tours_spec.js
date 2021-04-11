const baseUrl = "http://localhost:3000";

describe("Current Tours", () => {
  it("Should have correct header", () => {
    cy.visit(baseUrl)
      .get(".current-tours")
      .find("h1")
      .should("have.text", "Current Tours");
  });

  it("Should currectly render the Current Tours Cards", () => {
    cy.visit(baseUrl)
      .get(".current-tours-card")
      .first()
      .find("h3")
      .should("have.text", "Jones Pass")

      .get(".current-tours-card")
      .first()
      .find("p")
      .should("have.text", "Apr 10, 2021")

      .get('[alt="mountains icon"]')
      .should("be.visible");
  });
});
