describe('Current Tours', () => {
  const baseUrl = 'http://localhost:3000'
  const toursUrl = 'http://localhost:3000/current-tours'

  const logOut = () => {
    cy.get('.main-menu')
      .contains('Profile')
      .click({force: true})
      .get('button')
      .contains('Log Out')
      .click({force: true})
  }

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false})
    cy.visit('http://localhost:3000')
      .get('header button')
      .click()
      .get('form input[name=username]')
      .type('BCBTestUser@gmail.com')
      .get('form input[name=password]')
      .type('BCBtest123!')
      .get('button[name=action]')
      .click()
      .get('.main-menu')
      .contains('Current Tours')
      .click()
  })

  it('Should visit the correct URL path on click', () => {
    cy.url().should('include', toursUrl)
    logOut()
  })

  it('Should have correct header', () => {
    cy.get('h1').should('have.text', 'Current Tours')
    logOut()
  })

  it('Should be able to add a new tour with location and date and see it in current tours', () => {
    cy.get('.main-menu')
      .contains('Add Tour')
      .click()
      .get('.form-basic')
      .get('form input[name=location]')
      .type('Jones Pass')
      .get('.tour-form-container')
      .find('.button-save').should('contain', 'CREATE TOUR').click()
      .get('.main-menu')
      .contains('Current Tours')
      .click()
    cy.get('.card-container').get('.tour-card').last()
      .get('[alt="mountains icon"]')
      .should('be.visible')
      .get('.card-container').get('.tour-card').last().find('h3').should('have.text', 'Jones Pass')

      logOut()
  })

  it('Should be able to select current tour card and update plan form fields', () => {
      cy
        .get('.main-menu')
        .contains('Current Tours').click()
        .get('.card-container').get('.tour-card').last().click()
      cy.get('.step-container').find('.form-nav').contains('2').click()
        .get('form').find('textarea').eq('1').type('Blue bird sky, possible chance of snow')
        .get('form').find('textarea').eq('2').type('Thin snow pack and wind')
        .get('form').find('textarea').eq('3').type('Low angle terrain, avoid trigger points')
      cy.get('.step-container').find('.form-nav').contains('3').click()
        .get('form').find('textarea').eq('4').type('Find appropriate pit locations. practice observations')
        .get('form').find('textarea').eq('5').type('Black lake zone')
      cy.get('.step-container').find('.form-nav').contains('4').click()
        .get('form').find('textarea').eq('6').type('All have water, layers, food')
      // cy.get('.tour-form-container')
      //   .find('.button-save').should('contain', 'SAVE UPDATES').click()
    logOut()
  })

  it('Should be able to select current tour card and update ride form fields', () => {
      cy
        .get('.main-menu')
        .contains('Current Tours').click()
        .get('.card-container').get('.tour-card').last().click()
      cy.get('.form-subform').find('.step-container').find('.form-nav').contains('Ride').click()
        .get('form').find('.departure').should('contain', 'Conduct a Departure Check').click()
      // cy.get('.tour-form-container')
      //   .find('.button-save').should('contain', 'SAVE UPDATES').click()
      logOut()
  })

  it('Should be able to select current tour card and update debrief form fields', () => {
      cy
        .get('.main-menu')
        .contains('Current Tours').click()
        .get('.card-container').get('.tour-card').last().click()
      cy.get('.form-subform').find('.step-container').find('.form-nav').contains('Debrief').click()
        .get('form').find('textarea').eq('7').type('Blue bird sky, possible chance of snow')
        .get('form').find('textarea').eq('8').type('Blue bird sky, possible chance of snow')
        .get('form').find('textarea').eq('9').type('Blue bird sky, possible chance of snow')
        // .get('form').find('.departure').should('contain', 'Conduct a Departure Check').click()
      // cy.get('.tour-form-container')
      //   .find('.button-save').should('contain', 'SAVE UPDATES').click()
      logOut()
  })

  it.skip('Should be able to mark tour complete when fields are filled out and that tour will show up in past tours', () => {
    cy
    

    logOut()
  })
})


//write tests to delete 