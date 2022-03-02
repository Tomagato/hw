// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('HS test ', () => {
  const site = 'https://www.hiredscore.com/';
  it('Visits career page', () => {
    cy.visit(site);
    cy.get('#w-dropdown-toggle-3').trigger('mouseover');
    cy.contains('Careers').click();
    cy.get('.container')
      .contains('View Careers')
      .should('have.attr', 'href', '#career-listing');
    cy.contains('Full')
      .should('have.attr', 'href')
      .then((href) => {
        let header = href;
        cy.wrap(header).as('header');
      });

    cy.contains('Full').first().click();
    cy.get('@header').then((header) => {
      cy.url().should('include', header);
    });
    cy.go('back');
  });

});
