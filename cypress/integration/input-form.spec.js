describe('Input form', () => {
	context('Visits the page where the application lives', () => {
		it('Focuses input on load', () => {
			cy.visit('localhost:3030')
		})
	})
})
