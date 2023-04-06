describe('Authenticated user', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('User can log in and out', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.mdc-button__label').click();
    cy.get('#mat-input-0').type('test@t');
    cy.get('#mat-input-1').type('qwerty');
    cy.get('.action-buttons > .mdc-button > .mdc-button__label').click();
    cy.get('#login > .mat-mdc-button-touch-target').click({force: true}).end()
    /* ==== End Cypress Studio ==== */
  });
})
