describe("Add Tour Form Page", () => {
  const baseUrl = "http://localhost:3000"
  const tourUrl = "http://localhost:3000/add-tour"

  const logOut = () => {
    cy.get(".main-menu")
      .contains("Profile")
      .click()
      .get("button")
      .contains("Log Out")
      .click()
  }

  beforeEach(() => {
    cy.visit(baseUrl)
      .get("header button")
      .click()
      .get("form input[name=username]")
      .type("BCBTestUser@gmail.com")
      .get("form input[name=password]")
      .type("BCBtest123!")
      .get("button[name=action]")
      .click()
      .get(".main-menu")
      .contains("Add Tour")
      .click()
  })

  it("Should visit the correct URL path on click", () => {
    cy.url().should("include", tourUrl)

    logOut()
  })

  it("Should have correct headers", () => {
    cy.get(".section-title")
      .eq(0)
      .find("h3")
      .should("have.text", "Assemble Your Group")
      .get(".section-title")
      .eq(1)
      .find("h3")
      .should("have.text", "Anticipate the Hazard")
      .get(".section-title")
      .eq(2)
      .find("h3")
      .should("have.text", "Plan Your Route")
      .get(".section-title")
      .eq(3)
      .find("h3")
      .should("have.text", "Discuss Your Emergency Plan")

    logOut()
  })

  it("Should have a date and location field", () => {
    cy.get('input[type="date"]')
      .get('input[type="text"]')
      .eq(0)
      .should("have.text", "")

    logOut()
  })

  it("Should start out with 3 unchecked check boxes", () => {
    cy.get('input[type="checkbox"]')
      .should("have.length", 8)
      .should("not.be.checked")

    logOut()
  })

  it("Should check the Anticipate the Hazard checkbox if all section inputs have text", () => {
    cy.get('input[type="text"]')
      .eq(1)
      .type("testing 1")
      .get('input[type="text"]')
      .eq(2)
      .type("testing 2")
      .get('input[type="text"]')
      .eq(3)
      .type("testing 3")
      .get('input[type="checkbox"]')
      .eq(0)
      .should("be.checked")

    logOut()
  })

  it("Should check the Plan Your Route checkbox if all section inputs have text", () => {
    cy.get('input[type="text"]')
      .eq(5)
      .type("testing 4")
      .get('input[type="text"]')
      .eq(6)
      .type("testing 5")
      .get('input[type="checkbox"]')
      .eq(2)
      .should("be.checked")

    logOut()
  })

  it("Should check the Discuss your emergency plan checkbox if all section inputs have text", () => {
    cy.get('input[type="text"]')
      .eq(7)
      .type("testing 6")
      .get('input[type="checkbox"]')
      .eq(3)
      .should("be.checked")

    logOut()
  })
})
