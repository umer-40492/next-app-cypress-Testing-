describe('Card Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/'); // replace with your page route
    });
    it('should shows the all recipes', () => {
        cy.request('GET', 'https://dummyjson.com/recipes').then((response) => {
          expect(response.status).to.eq(200);
          const recipes = response.body.recipes;
          recipes.forEach((recipe) => {
            cy.log(`Recipe ID: ${recipe.id}`);
            cy.log(`Title: ${recipe.name}`);
            cy.log('--------------------------');
          });
        });
    });
});