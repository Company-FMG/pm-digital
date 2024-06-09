describe('Modal "SobreMike"', () => {
    it('deve abrir o modal e verificar seu conteúdo', () => {
        cy.visit('/home');

        cy.get(':nth-child(3) > .text-center').click();

        cy.get(':nth-child(2) > .lg:flex > .rounded-xl');

        cy.get('.w-72 > .font-bold').contains('Sobre o Mike').should('be.visible');
        cy.get('.w-72 > .text-xl').contains('Tecnologia inovadora para facilitar denúncias e agilizar ações de prevenção a violência e situações emergentes. Desenvolvedores resposáveis: - Ana Carolyne Costa - Iale Almeida - Lorenzo Leão - Luís Silvestre - Nicholas Bergqvist - Rafael Figuerôa').should('be.visible');
    });
});