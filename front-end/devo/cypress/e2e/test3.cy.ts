describe('Content', () => {
    it('check if content is visible and have class', () => {
      cy.visit('/home');
  
      cy.get('ion-content').should('be.visible');
      cy.get('ion-content').should('have.class', 'relative'); 

    });
  });
  