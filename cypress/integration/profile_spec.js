describe.skip("Profile Page", () => {
  const baseUrl = "http://localhost:3000"
  const profileUrl = "http://localhost:3000/profile"

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
      .contains("Profile")
      .click()
  })

  it("Should visit the correct URL path on click", () => {
    cy.url().should("include", profileUrl)

    logOut()
  })

  it("Should have correct header", () => {
    cy.get("h1").should("have.text", "My Account")

    logOut()
  })

  it("Should render a profile icon", () => {
    cy.get('[alt="Test User"]').should("be.visible")

    logOut()
  })

  it("Should display name, email, and username", () => {
    cy.get(".name")
      .should("have.text", "Test User")
      .get(".email")
      .should("have.text", "bcbtestuser@gmail.com")
      .get(".userName")
      .should("have.text", "bcbtestuser")

    logOut()
  })
})
