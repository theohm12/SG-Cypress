import * as random from '../random.js';
describe('template spec', () => {
  it('passes', () => {
    //เข้าเว็บและล็อคอิน
    cy.visit('https://vch-dev.smoothdark.com/en/applicant')
    cy.get('#email_login').type('saurabh@smoothgraph.in')
    cy.get('#password').type('123456')
    cy.get('#btn_login_email').click('')
    cy.get('[href="https://vch-dev.smoothdark.com/en/applicant/medical/job-list"]').click()
    cy.get('.date-btn-wrap > .btn').click()
  })
})