describe('Posts', () => {

    beforeEach(() => {
        // api para logar
        cy.login(Cypress.env('email'), Cypress.env('senha'))
    })
    
    it('cria um post', () => {

        let valorComentario = 'Criado por Pedro Guerra na aula de Cypress'

        // api que cria o post
        cy.request({
            method: 'POST',
            url: '/api/posts',
            body: {
                text: valorComentario
            }
        }).then(({ status, body }) => {
            expect(status).to.eq(201)
            expect(body.text).to.eq(valorComentario)
        })
    })

    it('cria um outro post 2', () => {

        let valorComentario = 'Criado por Pedro Guerra na aula de Cypress'

        // api que cria o post
        cy.request({
            method: 'POST',
            url: '/api/posts',
            body: {
                text: valorComentario
            }
        }).then(({ status, body }) => {
            expect(status).to.eq(201)
            expect(body.text).to.eq(valorComentario)
        })
    })
})