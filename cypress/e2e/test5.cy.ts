describe('Modal "SobreMike"', () => {
    it('verifica abertura do modal', () => {
        cy.visit('/home');

        cy.get('.text-center').click();

        cy.get('.rounded-xl').should('be.visible');
    });
});


