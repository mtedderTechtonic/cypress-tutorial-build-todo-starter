describe('Input form', () => {
	context('Adds todo to input field', () => {
		beforeEach(() => {
			cy.visit('/')
		})

		it('Focuses input on load', () => {
			cy.focused().should('have.class', 'new-todo')
		})

		it('Accepts input', () => {
			const typedText = 'Buy Coffee'

			cy.get('.new-todo')
				.type(typedText)
				.should('have.value', typedText)
		})
	})
})
