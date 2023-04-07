describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://qa.putraprima.id/')
    cy.get('.col-md-6 > :nth-child(2) > :nth-child(2)').click()
  })
})