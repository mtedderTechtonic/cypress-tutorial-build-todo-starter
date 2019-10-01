describe('Input form', () => {
	context('Adds todo to input field', () => {
		beforeEach(() => {
			cy.seedAndVisit([])
		})

		it('Focuses input on load', () => {
			cy.focused().should('have.class', 'new-todo')
		})

		it('Accepts input', () => {
			const typedText = 'Buy coffee'

			cy.get('.new-todo')
				.type(typedText)
				.should('have.value', typedText)
		})

		context('Form submission', () => {
			beforeEach(() => {
				cy.server()
			})
			it('Adds a new todo on submit', () => {
				const itemText = 'Buy eggs'
				cy.route('POST', '/api/todos', {
					name: itemText,
					id: 1,
					isComplete: false
				})
				cy.get('.new-todo')
					.type(itemText)
					.type('{enter}')
					.should('have.value', '')
				cy.get('.todo-list li')
					.should('have.length', 1)
					.and('contain', itemText)
			})

			it('Shows an error message on a failed submission', () => {
				cy.route({
					url: '/api/todos',
					method: 'POST',
					status: 500,
					response: {}
				})

				cy.get('.new-todo').type('test{enter}')
				cy.get('.todo-list li').should('not.exist')
			})
		})
	})
})
