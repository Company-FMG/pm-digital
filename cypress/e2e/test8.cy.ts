describe("AlertaOcorrenciaMike Component", () => {
  beforeEach(() => {
    cy.visit("/home");
  });
  it("deve aparecer o modal de AlertaOcorrencia", () => {
    cy.wait(5000);
    cy.contains("ALERTA DE OCORRÊNCIA").should("be.visible");
    cy.request("https://mikebackend-05gc09wt.b4a.run/api/denuncias").then(
      (response) => {
        const latestDenuncia = response.body[response.body.length - 1];
        cy.contains(latestDenuncia.endereco).should("be.visible");
      }
    );
  });
  it('deve fechar o modal e mostrar o mapa quando clicar no botão A CAMINHO"', () => {
    cy.wait(5000);
    cy.contains("A CAMINHO").click();
    cy.contains("ALERTA DE OCORRÊNCIA").should("not.exist");
    cy.get(
      '[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]'
    ).should("be.visible");
  });
});
