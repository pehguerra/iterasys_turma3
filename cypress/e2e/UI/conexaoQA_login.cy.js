describe('página de login', () => {

    beforeEach(() => {
        cy.visit('/login')
    })
    
    it('faz o login válido', () => {
        
        // spy na API do login
        cy.intercept('GET', '/api/profile/me')
            .as('apiLogin')

        // preenche o email
        cy.getElement('login-email')
            .type(Cypress.env('email'))

        // preenche a senha
        cy.getElement('login-password')
            .type(Cypress.env('senha'))

        // clica no login
        cy.getElement('login-submit')
            .click()
          
        // espera a API do login responder
        cy.wait('@apiLogin')
            .then(({ response }) => {
                expect(response.body.user.name, 'RESPOSTA DA API').to.eq('Usuário Iterasys')
            })

        // valida se o usuário está logado
        cy.getElement('dashboard-welcome')
            .should('be.visible')
            .and('contain', 'Usuário Iterasys')
    })
})