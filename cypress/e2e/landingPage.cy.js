describe('landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/'); // replace with your page route
  });
// landing Test test
  it('should clear the input field', () => {
    cy.get('[data-testid="input-field"]').should("exist");
    cy.get('[data-testid="input-field"]').type('Text to clear');
    cy.wait(3000);
    cy.get('[data-testid="input-field"]').clear();
    cy.get('[data-testid="input-field"]').should('have.value', '');
    cy.wait(2000);
    const navItems = [
      { id: 1, label: "All" },
      { id: 2, label: "Sushi" },
      { id: 3, label: "Pizza" },
      { id: 4, label: "Burgers" },
      { id: 5, label: "Hot Meals" },
      { id: 6, label: "Deserts" },
      { id: 7, label: "Drinks" },
  ];
  navItems.forEach((items, index) => {
    cy.log(`Clicking on item with ID: ${items.id}`);
    cy.get(`[data-testid="${items.id}"]`).should("exist");
    cy.get(`[data-testid="${items.id}"]`).click();
    cy.wait(1000);
    cy.get(`[data-testid="${items.id}"]`).should('have.class', 'bg-yellow-500');
    navItems.forEach((_, i) => {
      if (i !== index) {
        cy.get(`[data-testid="${navItems[i].id}"]`).should('not.have.class', 'bg-yellow-500');
      }
    });
  });
  });
  // fetch test
  it('should shows the all recipes', () => {
    cy.get(`[data-testid="show-btn"]`).should("exist");
   cy.get(`[data-testid="show-btn"]`).scrollIntoView();
   cy.get(`[data-testid="show-btn"]`).should('be.visible'); // Click directly after checking visibility
   cy.wait(2000);
   cy.get(`[data-testid="show-btn"]`).click();
  });
});