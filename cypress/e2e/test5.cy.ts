describe('Modal "SobreMike"', () => {
    it('verifica abertura do modal', () => {
        cy.visit('/home');

        cy.get(':nth-child(3) > .text-center').click();

        cy.get(':nth-child(2) > .lg:flex > .rounded-xl').should('be.visible');
    });
});


