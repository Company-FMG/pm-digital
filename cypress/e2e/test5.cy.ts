describe('Modal "SobreMike"', () => {
    it('verifica abertura do modal', () => {
        cy.visit('/home');

        cy.get(':nth-child(3) > .text-center').click();

        cy.get('div.modal-content').should('be.visible');
    });
});


