describe.skip("Current Tours", () => {
  const baseUrl = "http://localhost:3000"
  const toursUrl = "http://localhost:3000/current-tours"

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
      .contains("Current Tours")
      .click()
  })

  it("Should visit the correct URL path on click", () => {
    cy.url().should("include", toursUrl)

    logOut()
  })

  it("Should have correct header", () => {
    cy.get(".current-tours h1").should("have.text", "Current Tours")

    logOut()
  })

  it("Should correctly render the Current Tours Cards", () => {
    cy.get(".current-tours-card")
      .first()
      .find("h3")
      .should("have.text", "Jones Pass")

      .get(".current-tours-card")
      .first()
      .find("p")
      .should("have.text", "Apr 10, 2021")

      .get('[alt="mountains icon"]')
      .should("be.visible")

    logOut()
  })
})
