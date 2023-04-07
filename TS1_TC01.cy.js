describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://qa.putraprima.id/')
    cy.get('#input').type('2')
    cy.get('#hitung').click()
  })
})