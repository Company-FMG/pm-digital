describe('Modal "SobreMike"', () => {
    it('deve abrir o modal e verificar seu conteúdo', () => {
        cy.visit('/home');

        cy.get('button.open-sobre-mike-modal').click();

        // Verificar se o modal está visível
        //cy.get('div.modal-content').should('be.visible');

        cy.get('div.modal-content h2').contains('Sobre o Mike').should('be.visible');
        cy.get('div.modal-content p').contains('Tecnologia inovadora para').should('be.visible');
    });
});