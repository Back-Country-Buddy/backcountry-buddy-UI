const baseUrl = "http://localhost:3000";

describe("Profile Page", () => {
  it("Should have correct header", () => {
    cy.visit(baseUrl).get("h1").eq(1).should("have.text", "My Account");
  });

  it("Should render a placeholder profile icon", () => {
    cy.visit(baseUrl).get('[alt="profile placeholder"]').should("be.visible");
  });

  it("Should display user name, email, and username", () => {
    cy.visit(baseUrl)
      .get(".name")
      .should("have.text", "Rachel")
      .get(".email")
      .should("have.text", "user@user.com")
      .get(".userName")
      .should("have.text", "userName");
  });
});
