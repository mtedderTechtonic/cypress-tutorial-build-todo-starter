describe('Footer', () => {
	context('With a single todo', () => {
		it.only('Displays a singular todo in count', () => {
			cy.seedAndVisit([{ id: 1, name: 'Buy Milk', isComplete: false }])
			cy.get('.todo-count').should('contain', '1 todo left')
		})
	})
})
