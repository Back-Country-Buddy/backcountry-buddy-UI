const baseUrl = 'http://localhost:3000'

describe('Landing Page', () => {
    it('Should have correct header and subheader', () => {
      cy.visit(baseUrl)
        .get("header")
        .find("h1")
        .should("have.text", "Backcountry Buddy")
        .get("header")
        .find("h2")
        .should("have.text", "Welcome, Rachel")
    });

    it('Should have a nav bar', () => {
      cy.visit(baseUrl)
        .get(".main-menu-text")
        .eq(0)
        .should("have.text", "Add Tour")
        .get(".main-menu-text")
        .eq(1)
        .should("have.text", "Current Tours")
        .get(".main-menu-text")
        .eq(2)
        .should("have.text", "Past Tours")
        .get(".main-menu-text")
        .eq(3)
        .should("have.text", "Profile");
    });
})
