const baseUrl = "http://localhost:3000";

describe("Add Tour Form Page", () => {
  it("Should have correct headers", () => {
    cy.visit(baseUrl)
      .get(".section-title")
      .eq(0)
      .find("h3")
      .should("have.text", "Anticipate the Hazard")
      .get(".section-title")
      .eq(1)
      .find("h3")
      .should("have.text", "Plan Your Route")
      .get(".section-title")
      .eq(2)
      .find("h3")
      .should("have.text", "Discuss Your Emergency Plan");
  });

  it("Should have a date and location field", () => {
    cy.visit(baseUrl)
    .get('input[type="date"]')
    .get('input[type="text"]').eq(0).should('have.text', '');
  });
  
  it("Should start out with 3 unchecked check boxes", () => {
    cy.visit(baseUrl)
      .get('input[type="checkbox"]')
      .should("have.length", 3)
      .should("not.be.checked")
  });

  it("Should check the Anticipate the Hazard checkbox if all section inputs have text", () => {
    cy.visit(baseUrl)
      .get('input[type="text"]')
      .eq(1)
      .type("testing 1")
      .get('input[type="text"]')
      .eq(2)
      .type("testing 2")
      .get('input[type="text"]').eq(3).type('testing 3')
      .get('input[type="checkbox"]')
      .eq(0)
      .should("be.checked");
  });

  it("Should check the Plan Your Route checkbox if all section inputs have text", () => {
    cy.visit(baseUrl)
      .get('input[type="text"]')
      .eq(4)
      .type("testing 4")
      .get('input[type="text"]')
      .eq(5)
      .type("testing 5")
      .get('input[type="checkbox"]')
      .eq(1)
      .should("be.checked");
  });

    it("Should check the Plan Your Route checkbox if all section inputs have text", () => {
      cy.visit(baseUrl)
        .get('input[type="text"]')
        .eq(6)
        .type("testing 6")
        .get('input[type="checkbox"]')
        .eq(2)
        .should("be.checked");
    });

});
