const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30'
context('Custom commands test', () => {
    it('sets and gets localstorage', () => {
        cy.setLocalStorage('token', token)
        cy.getLocalStorage('token').should('eq', token)
    })

    it('overwrites type command by using sensitive characters', () => {
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email').type('test@test.com')
        cy.findByPlaceholderText('Enter your name').type('89h*jHHuQ@NfiA', { sensitive: true })
    })



})