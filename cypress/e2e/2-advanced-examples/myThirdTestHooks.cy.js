describe('this is the third test', () => {
  before(() => {
    cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
  })

  beforeEach(() => {
    cy.visit('/')
  })

  // it('visits the homepage', () => {
  //     cy.visit('/')
  // })

  afterEach(() => {
    cy.log('after each test')
  })

  after(() => {
    cy.log('after all tests')
  })

  it('should have a h1', () => {
    cy.get('h1').should('exist')
    cy.get('h1').should('have.text', 'Kitchen Sink')
  })

  it('should have a paragraph with link', () => {
    cy.get('p').find('a').should('contain', 'docs.cypress.io')
  })
})
