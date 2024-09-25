describe('camera', () => {
    it('verifica se a camera abre ao clicar para editar foto', () => {
        cy.visit('/perfil');

        cy.get('.absolute > .ion-activatable').should('be.visible').click();

        cy.get('pwa-camera-modal-instance.hydrated', { timeout: 2000 }).should('be.visible');
    });
});
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});