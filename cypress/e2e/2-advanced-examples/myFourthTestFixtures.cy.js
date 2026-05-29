context('Fixtures test', () => {
  beforeEach(() => {
    cy.fixture('example').then(function (data) {
      this.data = data
      cy.log('data: ', this.data)
    })
  })

  it('uses fixture data in a network request', function () {
    cy.visit('/commands/network-requests')
    cy.intercept('GET', '**/comments/*', this.data).as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((res) => {
      cy.log('response: ', res)
    })
  })

  it('pulls data from fixture', () => {
    cy.fixture('example').then((data) => {
      cy.log('data: ', data)
    })
  })

  it('updates fixture data', () => {
    cy.fixture('example').then((data) => {
      cy.log('email data: ', data.email)
      data.email = 'lienertkarl3@gmail.com'
      cy.log('updated email data:', data.email)
    })
  })
})
