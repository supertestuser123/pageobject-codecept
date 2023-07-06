const { I } = inject();

module.exports = {
  visit(){
    I.amOnPage('https://authenticationtest.com/simpleFormAuth/')
},
  checkSiteisExist(){
    I.see('Simple Form Authentication');
  },
  fillEmail(email){
    I.fillField('#email', email)
},
  fillPassword(password){
    I.fillField('#password', password)
},
  submitForm(){
    I.click('//*[@type="submit"]');
  },
  emailFieldIsVisible(){
    cy.get('#email').should('exist');
},
  passwordFieldIsVisible(){
    cy.get('#password').should('exist');
},
emailFieldIsEnable(){
    cy.get('#email').should('be.enabled')
}
}

