describe('modal opcoes', () => {
    it('verifica abertura do modal', () => {
        cy.visit('/home');

        cy.get('.flex-row > .flex').click();

        cy.get('.top-3').should('be.visible');
    });
});