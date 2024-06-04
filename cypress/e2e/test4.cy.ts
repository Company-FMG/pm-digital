describe('Footer', () => {
    it('check if footer is visible', () => {
      cy.visit('/home');
  
      cy.get('ion-footer').should('be.visible');
      cy.get('ion-toolbar').should('be.visible');

    });
  });
  