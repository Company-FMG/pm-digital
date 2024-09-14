describe('Header', () => {
    it('check if header is visible', () => {
      cy.visit('/home');
  
      cy.get('ion-header').should('be.visible');
      cy.get('ion-toolbar').should('be.visible');

    });
  });
  