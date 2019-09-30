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
        
        context('Form submission', () => {
            it('Adds a new todo on submit', () => {
                const itemText = 'Buy Eggs'
                cy.server()
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
        })
	})
})
