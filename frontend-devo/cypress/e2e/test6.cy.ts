import { should } from "chai";

describe('Perfil para Home', () => {
    it('testando a saída de perfil para a home', () => {
        cy.visit('/perfil');
        
        cy.contains('VOLTAR PARA PÁGINA INICIAL').should('be.visible');
        cy.contains('VOLTAR PARA PÁGINA INICIAL').click();
        
        cy.visit('/home');
    });
});
