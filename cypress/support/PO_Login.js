class poLogin {
    getCampoEmail() {
        return cy.get('[data-test=login-email]');
    }

    getCampoSenha() {
        return cy.get('[data-test=login-password]');
    }
}

export default poLogin;