describe('alerta de login', () => {

    it('valida o alerta de credencial inválida', { tags: ['@smoke', '@login'] }, () => {

        // faz o spy na hora
        cy.clock()
        
        cy.intercept('POST', '/api/auth')
            .as('login')

        // visita a página de login
        cy.visit('/login')

        // prencher um email aleatório
        cy.getElement('login-email')
            .type('usuarioAleatorio@teste.com')

        // preencher uma senha aleatória
        cy.getElement('login-password')
            .type('123456')

        // clicar no botão Login
        cy.getElement('login-submit')
            .click()

        cy.wait('@login')

        // validar o alerta de credencial inválido
        cy.getElement('alert')
            .should('have.text', 'Credenciais inválidas')

        // cy.wait(10000)

        // cy.get('[data-test=alert]', { timeout: 10000 })
        //     .should('not.exist')

        // adiantar o tempo da nossa aplicação em 10 segundos
        cy.tick(10000)

        cy.getElement('alert')
            .should('not.exist')
    })
})