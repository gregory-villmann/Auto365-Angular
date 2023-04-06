describe('Registration flow', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Email not valid', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:4200');
    cy.get('.mdc-button__label').click();
    cy.get('.mat-mdc-card-content > .mdc-button > .mdc-button__label').click();
    cy.get('#mat-input-2').type('kaka@kaakaa.ee');
    cy.get('#mat-input-3').type('a');
    cy.get('#mat-input-4').type('a');
    cy.get('#mat-input-5').type('qwerty');
    cy.get('.action-buttons > .mdc-button > .mat-mdc-button-touch-target').click({force: true});
    cy.get('div').contains('Email not valid')
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Email is already in use', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.mdc-button__label').click();
    cy.get('.mat-mdc-card-content > .mdc-button > .mdc-button__label').click();
    cy.get('#mat-input-2').type('gvillmann@gmail.com');
    cy.get('#mat-input-3').type('q');
    cy.get('#mat-input-4').type('q');
    cy.get('#mat-input-5').type('qwerty');
    cy.get('.action-buttons > .mdc-button > .mdc-button__label').click();
    cy.get('div').contains('Email is already in use')
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Create a account', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.action-button > .mat-mdc-button-touch-target').click({force: true});
    cy.get('.mat-mdc-card-content > .mdc-button > .mat-mdc-button-touch-target').click({force: true});
    cy.get('.mat-mdc-form-field.ng-tns-c20-4 > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
    cy.get('#mat-input-2').type('gvillmann+test' + Math.random() * 100 + '@gmail.com');
    cy.get('#mat-input-3').type('q');
    cy.get('#mat-input-4').type('q');
    cy.get('#mat-input-5').type('qwerty');
    cy.get('.action-buttons > .mdc-button > .mdc-button__label').click({force: true});
    cy.get('div').contains('User has been registered successfully')
    /* ==== End Cypress Studio ==== */
  });
})
