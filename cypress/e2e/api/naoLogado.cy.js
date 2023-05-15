describe('GET API - Profile', () => {

    context('valida a API de perfis', () => {
        
        it('todos os perfis', () => {
            
            // cy.request('GET', '/api/profile')
            cy.request({
                url: '/api/profile',
                method: 'GET'
            }).then(({ status, duration, body }) => {
                expect(status, 'Status Code').to.eq(200)
                expect(duration, 'Duração').to.be.lessThan(1000)
                expect(body[0].status, 'Cargo usuário 0').to.eq('Especialista em QA')
                expect(body[1].user.name).to.eq('Usuário Iterasys')
                expect(body[0].skills).to.have.lengthOf(2)
                expect(body[0].date).to.not.be.null
            })
        })
    })

    context('valida um perfil específico', () => {

        let urlApiPerfil = '/api/profile/user'
        let method = 'GET'

        it('seleciona um usuário inválido', () => {
            let usuarioId = '1'
            
            cy.request({
                method,
                url: `${urlApiPerfil}/${usuarioId}`,
                failOnStatusCode: false
            }).then(({ status, body }) => {
                expect(status, 'Status Code').to.eq(404)
                expect(body.errors[0].msg, 'Mensagem de Erro').to.eq('Perfil não encontrado')
            })
        })
        
        it('seleciona usuários válidos', () => {
            let usuarioId = '64372f517135f63cd486aaa8'

            cy.request({
                method,
                url: `${urlApiPerfil}/${usuarioId}`
            }).then(({ status, body }) => {
                expect(status).to.eq(200)
                expect(body.user.name).to.eq('Usuário Iterasys')
            })
        })

        it('testa usuário válido', () => {
            let usuarioId = '64372f517135f63cd486aaa8'

            cy.request({
                method,
                url: `${urlApiPerfil}/${usuarioId}`
            }).then(({ status, body }) => {
                expect(status).to.eq(200)
                expect(body.user.name).to.eq('Usuário Iterasys')
            })
        })
    })
})