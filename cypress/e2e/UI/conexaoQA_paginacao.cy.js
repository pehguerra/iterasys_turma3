describe('Página de QAs', () => {
    
    it('valida a paginação com 7 perfis', () => {
        
        // fazer o spy na API de perfis
        cy.intercept('GET', '/api/profile', { fixture: 'paginacao_7_usuarios' })

        // visitar a página
        cy.visit('/perfis')

        // valida se a paginação não existe
        cy.get('.paginationBttns li')
            .should('not.exist')
    })
})