describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://qa.putraprima.id/')
    cy.get('#input').type(',')
    cy.get('#hitung').click()
    cy.get('#result').should('contain', 'Please enter an integer')
  })
})