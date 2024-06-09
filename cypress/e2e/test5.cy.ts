describe('Rota Home', () => {
    it('verifica os botões com escrita fixa na rota home', () => {
        
        cy.visit('/home');

        cy.contains('alerta').should('be.visible');
        cy.contains('Dados da Ocorrência').should('be.visible');
        cy.contains('Finalizar Ocorrência').should('be.visible');
        cy.contains('Sobre o Mike').should('be.visible');        
    });
});


