context('My First Test', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('has a h1', () => {
        cy.get('h1').should('exist')
        cy.get('h1').should('have.text', 'Actions')
    })

    it ('has a paragraph with link', () => {
        cy.get('p').find('a').should('contain', 'docs.cypress.io')
    })

    it('has 3 menu items', () => {
        cy.get('.nav.navbar-nav').first().find('>li').should('have.length', 3)
        cy.get('.nav.navbar-nav').eq(1).find('>li').should('have.length', 1)
        cy.get('.nav.navbar-nav').first().find('>li').first().should('have.class', 'active')
        cy.get('a.dropdown-toggle').click()
        cy.get('ul.dropdown-menu').find('>li').should('have.length', 17)
        cy.get('ul.dropdown-menu').find('>li').eq(2).should('have.class', 'active')
    })

    it('section with correct elements', () => {
        cy.get('.container').eq(2).within(() => {
            cy.get('h4').first().should('have.text', '.type()')
            cy.get('p').first().should('have.text', 'To type into a DOM element, use the .type() command.')
            cy.get('a').first().should('have.attr', 'href', 'https://on.cypress.io/type')
        })
    })

    it('correctly render the cypress website link', () => {
        cy.findByText('cypress.io').should('exist')
    })

    const navbarText = Cypress.env('navbarText')
    it('has a navbar with correct text', () => {
        cy.findByText(navbarText).should('exist')
    })  
})