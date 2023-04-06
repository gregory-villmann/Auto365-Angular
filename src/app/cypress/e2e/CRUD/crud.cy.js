describe('CRUD cars', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Should see cars and go to detail view', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#\\32  > .mat-mdc-card-content').click();
    cy.get('#arrow_back > .mat-mdc-button-touch-target').click();
    cy.get('.mat-mdc-paginator-navigation-next > .mat-mdc-button-touch-target').click();
    cy.get('mat-card').first().click({force: true});
    cy.get('.mat-mdc-card-header').click();
    cy.get('#arrow_back > .mat-mdc-button-touch-target').click();
    cy.get('.example-icon > .mat-mdc-button-touch-target').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('should be able to log in and CRUD a car', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.mdc-button__label').click();
    cy.get('#mat-input-0').clear('te');
    cy.get('#mat-input-0').type('test@t');
    cy.get('#mat-input-1').clear();
    cy.get('#mat-input-1').type('qwerty');
    cy.get('.action-buttons > .mdc-button > .mat-mdc-button-touch-target').click({force: true});
    cy.get(':nth-child(2) > .mdc-button__label').click();
    cy.get('#mat-input-2').type('Audi');
    cy.get('#mat-input-3').type('A6');
    cy.get('#mat-input-4').type('12');
    cy.get('#mat-input-5').type('1');
    cy.get('#mat-input-6').type('1000');
    cy.get('#mat-input-7').type('abc');
    cy.get('.action-buttons > .mdc-button > .mdc-button__label').click();
    cy.get('td').contains('Audi')
    cy.get('td').contains('A6')
    cy.get('td').contains('12')
    cy.get('td').contains('1')
    cy.get('td').contains('1.000,00 €')
    cy.get('.mat-mdc-card-header > .ng-star-inserted > .mat-mdc-button-touch-target').click();
    cy.get('#mat-input-8').clear();
    cy.get('#mat-input-8').type('BMW');
    cy.get('.mat-primary > .mat-mdc-button-touch-target').click({force: true});
    cy.get('td').contains('BMW')
    cy.get('.mat-mdc-card-header > .ng-star-inserted > .mat-mdc-button-touch-target').click({force: true});
    cy.get('.mat-warn > .mdc-button__label').click();
    cy.get('div').contains('BMW A6 12 on kustutatud!')
    /* ==== End Cypress Studio ==== */
  });
})
