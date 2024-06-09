describe("OcorrenciaFinalizada Component", () => {
    it("Testar finalizar ocorrência", () => {
      cy.visit("/home");
      cy.contains("Finalizar Ocorrência").click();
      cy.contains("Concordo").click();
      cy.visit("/relatorio");
      cy.contains("Confirmar").click();
      cy.contains("VOLTAR").click();
      cy.visit("/home");
    });
  });