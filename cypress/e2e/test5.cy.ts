describe('Modal "SobreMike"', () => {
    it('verifica abertura do modal', () => {
        cy.visit('/home');

        cy.get('button').should('Sobre o Mike').click();

        cy.get('div.modal-content').should('be.visible');
    });
});
