import * as random from '../random.js';
describe('template spec', () => {
  it('passes', () => {
    //เข้าเว็บและล็อคอิน
    cy.visit('https://vch-dev.smoothdark.com/en/applicant')
    cy.get('#email_login').type('saurabh@smoothgraph.in')
    cy.get('#password').type('123456')
    cy.get('#btn_login_email').click('')
    cy.get('[href="https://vch-dev.smoothdark.com/en/applicant/doctor/job-list"]').click()
    cy.get('.date-btn-wrap > .btn').click()
    //Personal Information
    cy.get('#salutation').select('Mr. Doctor')
    //ชื่อ
    cy.get(':nth-child(4) > .box-content > :nth-child(2) > :nth-child(1) > input').type((random.string_thai(5)))
    cy.get('.box-content > :nth-child(2) > :nth-child(2) > input').type((random.string_thai(5)))
    cy.get(':nth-child(3) > :nth-child(1) > input').type((random.string_eng(5)))
    cy.get('.box-content > :nth-child(3) > :nth-child(2) > input').type((random.string_eng(5)))
    //เลขบัตร ปชช.
    cy.get(':nth-child(4) > .col-md-6 > input').type(random.number(13))
    //อายุ
    cy.get(':nth-child(4) > .box-content > :nth-child(5) > :nth-child(1) > input').type(random.number(2))
    //วันเกิด
    cy.get('.box-content > :nth-child(5) > :nth-child(2) > .flatpicker').click()
    cy.get('.arrowTop > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > [aria-label="May 8, 2023"]').click()
    //เลขที่อยู่
    cy.get(':nth-child(6) > :nth-child(1) > input').type('111/111')
    //จังหวัด
    cy.get('#address_dd_2').click()
    cy.get('.es-list>li').contains('Bangkok').click()
    cy.wait(1000)
    //อำเถอ/เขต
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
    //เบอร์โทร
    cy.get('.select_country > [type="text"]').type(random.number(10))
    //ไอดีไลน์
    cy.get(':nth-child(9) > :nth-child(2) > input').type('@line')
    //อีเมล
    cy.get('#inlineFormInputGroup').type('email@email')
    //Doctor/Dentist License
    cy.get('.box-content > :nth-child(1) > .col-md-6 > input').type(random.number(13))
    cy.get('.add-wrap > .col-md-12 > input').type('doctor')
    //Education and Training
    //Diploma
    cy.get(':nth-child(1) > .form-row > .col-md-4 > input').type('Bachelor')
    cy.get(':nth-child(1) > .form-row > .col-md-5 > input').type('ABC University')
    cy.get('#graduation_year').select('1980')
    //Specialty / Certificate / Approved Document
    cy.get(':nth-child(2) > .form-row > .col-md-4 > input').type('Doctor Diploma')
    cy.get(':nth-child(2) > .form-row > .col-md-5 > input').type('ABC University')
    cy.get('#certificate_year').select('1980')
    //Other Training
    cy.get(':nth-child(3) > .form-row > .col-md-4 > input').type('Super Doctor')
    cy.get(':nth-child(3) > .form-row > .col-md-5 > input').type('ABC University')
    cy.get('#finished_year').select('1980')
    //History of Work and Other Special Skill
    //Intern Period Details
    cy.get('.box-content > :nth-child(2) > .form-row > .col-md-6 > input').type('ABC University')
    cy.get('#start_intern').select('1980')
    cy.get('#finished_intern').select('1980')
    //Residence Doctor / Dentist Period
    cy.get(':nth-child(3) > .form-row > .col-md-6 > input').type('ABC University')
    cy.get('#start_residence').select('1980')
    cy.get('#finished_residence').select('1980')
    //Doctor’s Specialty Training
    cy.get(':nth-child(4) > .form-row > :nth-child(1) > input').type('Head of Doctor')
    cy.get(':nth-child(4) > .form-row > :nth-child(2) > input').type('ABC University')
    cy.get('#start_specialty').select('1980')
    cy.get('#finished_specialty').select('1980')
    //Other Special Skill
    cy.get(':nth-child(5) > .form-row > .col-md-12 > input').type('Head of Doctor')
    //Other Doctors that can recommend about you
    cy.get('.repeat-add > :nth-child(1) > :nth-child(1) > input').type('Doctor')
    cy.get('.repeat-add > :nth-child(1) > :nth-child(2) > input').type('Strange')
    cy.get('.repeat-add > :nth-child(2) > :nth-child(1) > input').type('Magician')
    cy.get('.repeat-add > :nth-child(2) > :nth-child(2) > input').type('Earth')
    //Attach Document รูป
    cy.get('#customFile').selectFile('cypress/fixtures/doctor.jpg')
    cy.get('#customFile2').selectFile('cypress/fixtures/id.png')
    cy.get('.box-content > .repeat-add > .form-row > .col-md-6 > .custom-file > #customFile3').selectFile('cypress/fixtures/license.png')
    cy.get(':nth-child(6) > .repeat-add > .form-row > .col-md-6 > .custom-file > #customFile3').selectFile('cypress/fixtures/cer.jpg')
    //Terms And Condition
    cy.get(':nth-child(12) > .chk-wrap > .chkmark').click()
    //ปุ่ม Submit
    cy.get('#doctor_apply').click()
  })
})