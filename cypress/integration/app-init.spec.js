
describe('App initialization', () => {
    it.only('Loads todos on page load', () => {
        cy.seedAndVisit()
        // assertions
        cy.get('.todo-list li')
        .should('have.length', 4)
    })
})