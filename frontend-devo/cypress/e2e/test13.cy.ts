describe('finalizar ocorrência', () => {
    it('verifica se o processo de finalizar ocorrencia está ocorrendo corretamente', () => {
        cy.visit('/home');

        cy.contains('Finalizar Ocorrência').should('be.visible').click();

        cy.get('.drop-shadow-md', { timeout: 2000 }).should('be.visible');
        cy.contains('Concordo').should('be.visible').click();

        cy.url().should('include', '/relatorio');

        cy.contains('Confirmar').should('be.visible').click();

        cy.get('.drop-shadow-md').should('be.visible');
        cy.get('.w-80 > .bg-bluemike').should('be.visible').click();

        cy.url().should('include', '/home');
    });
});
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});