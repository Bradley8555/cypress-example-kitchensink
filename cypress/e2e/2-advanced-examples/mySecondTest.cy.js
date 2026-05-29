context('async lesson', () =>{

    it('types into the email field', () => {
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email').type('nicfury@example.com')
        cy.wait(1000).then(() => {
            cy.findByPlaceholderText('Email').should('have.value', 'nicfury@example.com')
            cy.log('Email field has correct value')
            fetch('https://api.spacexdata.com/v3/missions')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            }) 
        })
    })

    it('shows active state for the current page', () => {
        cy.visit('/commands/actions')
        cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
    })

    it('should not have an active class on inactive pages', () => {
        cy.visit('/commands/actions')
        cy.get('.dropdown-menu').find('li').first()
        .should('not.have.class', 'active')
        .find('a')
        .should('have.attr', 'href', '/commands/querying')
    })

    it('links to the action page correctly', () => {
        cy.visit('/')
        cy.findAllByText('Actions').last().click({ force: true })
        cy.url().should('include', '/commands/actions')
        cy.findByText('Commands').click()
        cy.findAllByText('Actions').first().click()
        cy.url().should('include', '/commands/actions')
    })

    it('lets you type an input field', () => {
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email').type('lienertkarl3@gmail.com').should('have.value', 'lienertkarl3@gmail.com')
    })

    it('lets you type in disabled input field', () => {
        cy.visit('/commands/actions')
        cy.get('.action-disabled').invoke('removeAttr', 'disabled').type('test disabled').should('have.value', 'test disabled')
    })

    it('lets you clear input field', () => {
        cy.visit('/commands/actions')
        cy.findByLabelText('Describe:').type('lienertkarl3@gmail.com').should('have.value', 'lienertkarl3@gmail.com')
        cy.findByLabelText('Describe:').clear().should('not.have.value')
    })

    it('lets you check a checkbox', () => {
        cy.visit('/commands/actions')
        cy.get('.action-checkboxes [type="checkbox"]').first().check().should('be.checked')
        cy.get('.action-checkboxes [type="checkbox"]').eq(1).check({ force: true }).should('be.checked')

    })

})