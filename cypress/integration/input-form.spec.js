describe('Input form', () => {
	context('Visits the page where the application lives', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3030')
        })
		it('Focuses input on load', () => {
            
            
            cy.focused()
                .should('have.class', 'new-todo')
        })
        
        it.only('Accepts input', () => {
            const typedText = 'Buy Coffee'

            cy.get('.new-todo')
            .type(typedText)
            .should('have.value', typedText)
        })
	})
})
