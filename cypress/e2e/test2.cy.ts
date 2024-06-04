describe('Home Page', () => {
    it('should render the home page with basic structure', () => {
      cy.visit('/'); // Visit the home page
  
      // Header
      cy.get('ion-header').should('be.visible');
      cy.get('ion-toolbar').should('be.visible');
      // Navbar presence can be tested based on its specific component identifier
  
      // Content
      cy.get('ion-content').should('be.visible');
      cy.get('ion-content').should('have.class', 'relative'); // Check for specific class
  
      // Footer
      cy.get('ion-footer').should('be.visible');
      cy.get('ion-toolbar').should('be.visible');
      // Footer presence can be tested based on its specific component identifier
    });
  });
  