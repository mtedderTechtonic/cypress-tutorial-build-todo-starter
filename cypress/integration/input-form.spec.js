describe('Input form', () => {
	context('Visits the page where the application lives', () => {
		it('Focuses input on load', () => {
            cy.visit('http://localhost:3030')
            
            cy.focused()
                .should('have.class', 'new-todo')
        })
        
        it.only('Accepts input', () => {
            const typedText = 'Buy Coffee'
            cy.visit('http://localhost:3030')

            cy.get('.new-todo')
            .type(typedText)
            .should('have.value', typedText)
        })
	})
})
