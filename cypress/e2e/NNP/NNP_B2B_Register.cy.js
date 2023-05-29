import * as random from '../random.js';
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://sepb2b-nnp2-dev.sepplatform.com/en/company-register')
    //ชื่อ
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .form-control').type(random.string_eng(5))
    //นามสกุล
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .form-control').type(random.string_eng(5))
    //เบอร์โทร
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .form-control').type(random.number(10))
    //อีเมล
    cy.get(':nth-child(2) > :nth-child(2) > .form-control').type('email@email')
    //ชื่อบริษัท
    cy.get(':nth-child(2) > .col-md-6 > .form-control').type(random.string_eng(10))
    //เลขที่เสียภาษี 13 หลัก
    cy.get(':nth-child(3) > .col-md-6 > .form-control').type(random.number(13))
    //ประเภทบริษัท
    cy.get(':nth-child(4) > .col-md-6 > .form-control').type(random.string_eng(5))
    //จังหวัด
    cy.get('#address_dd_2').click()
    cy.get('.es-list>li').contains('Bangkok').click()
    cy.wait(1000)
    //อำเภอ/เขต
    cy.get('#address_dd_3').click()
    cy.get('.es-list>li').contains('Khet Bang Bon').click()
    cy.wait(1000)
    //ตำบล/แขวง
    cy.get('#address_dd_4').click()
    cy.get('.es-list>li').contains('Khwaeng Bang Bon Nuea').click()
    cy.wait(1000)
    //รหัสไปรษณีย์
    cy.get('#zip_code').click()
    cy.get('.es-list>li').contains('10150').click()
    cy.wait(1000)
    //ปุ่ม submit
    //cy.get('#companyRegister').click()
  })
})