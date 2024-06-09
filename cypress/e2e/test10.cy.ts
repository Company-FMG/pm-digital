describe('botão voltar', () => {
    it('verifica se o botão de voltar para o início está funcionando', () => {
        cy.visit('/perfil');

        cy.get('.pt-10 > .bg-bluemike').should('be.visible').click();

        cy.url().should('include', '/home');
    });
});