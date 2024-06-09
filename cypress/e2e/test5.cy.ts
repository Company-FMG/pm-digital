describe('Modal "SobreMike"', () => {
    it('verifica abertura do modal', () => {
        cy.visit('/home');

        cy.get('button.open-sobre-mike-modal').click();

        cy.get('div.modal-content').should('be.visible');
    });
});
