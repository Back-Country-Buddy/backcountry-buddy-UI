describe('Landing Page', () => {
  const baseUrl = 'http://localhost:3000'

  const logIn = () => {
    cy.get('header button')
      .click()
      .get('form input[name=username]')
      .type('BCBTestUser@gmail.com')
      .get('form input[name=password]')
      .type('BCBtest123!')
      .get('button[name=action]')
      .click()
  }

  const logOut = () => {
    cy.get('.main-menu')
      .contains('Profile')
      .click()
      .get('button')
      .contains('Log Out')
      .click()
  }

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('Should render the correct header before logging in', () => {
    cy.get('header h1')
      .should('have.text', 'Backcountry Buddy')
      .get('header button')
      .should('have.text', 'Log In')
  })

  it('Should render the correct header after logging in', () => {
    logIn()

    cy.get('header h1')
      .should('have.text', 'Backcountry Buddy')
      .get('.welcome')
      .contains('Welcome, friend!')

    logOut()
  })

  it('Should render the nav bar correctly once logged in', () => {
    logIn()

    cy.get('.main-menu-text')
      .eq(0)
      .should('have.text', 'Add Tour')
      .get('.main-menu-text')
      .eq(1)
      .should('have.text', 'Current Tours')
      .get('.main-menu-text')
      .eq(2)
      .should('have.text', 'Past Tours')
      .get('.main-menu-text')
      .eq(3)
      .should('have.text', 'Profile')

    logOut()
  })
})
