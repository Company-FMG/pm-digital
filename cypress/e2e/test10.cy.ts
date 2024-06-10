describe('login, logout', () => {
    it('verifica se o sistema de abrir e fechar a home está funcionando', () => {
        cy.visit('/');

        cy.contains('Entrar').should('be.visible').click();

        cy.url().should('include', '/home');
        cy.get('[style="z-index: 101;"] > .header-md > .md > .p-0 > .container > .flex-row > .flex').should('be.visible').click();
        cy.contains('Sair').should('be.visible').click();

        cy.url().should('include', '/');
    });
});
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});