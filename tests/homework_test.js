const config = require('../framework/config/config.js')
Feature('Авторизация на сайт')

Before(({ loginPage }) => { 
    loginPage.visit()
  })

Scenario('Проверим что сайт существует', ({ loginPage })=>{
    loginPage.checkSiteisExist()
})

Scenario('Проверим успешную авторизацию', ({ I, loginPage })=>{
    loginPage.fillEmail(config.user.email)
    loginPage.fillPassword(config.user.password)
    loginPage.submitForm()

    I.seeTextEquals('Login Success', 'h1')
    I.seeInCurrentUrl('https://authenticationtest.com/loginSuccess/');
})

Scenario('Проверим авторизацию без пароля', ({ I, loginPage })=>{
    loginPage.fillEmail(config.user.email)
    loginPage.submitForm()

    I.seeTextEquals('Login Failure', 'h1');
    I.seeInCurrentUrl('https://authenticationtest.com/loginFail/');
 })

Scenario('Проверим авторизацию без почты', ({ I, loginPage })=>{
    loginPage.fillPassword(config.user.password)
    loginPage.submitForm()

    I.seeTextEquals('Login Failure', 'h1');
    I.seeInCurrentUrl('https://authenticationtest.com/loginFail/');
})

Scenario('Проверим что почта не подходит', async ({ I, loginPage })=>{
    const url = await I.grabCurrentUrl();
    const wrongurl = config.wrongUrl 
    loginPage.fillEmail('123')
    loginPage.submitForm()
    
    I.seeInCurrentUrl(url);
    I.dontSeeInCurrentUrl(wrongurl);
    //тут делаю проверку что ничего не происходит, т.к тултипа нет в дом модели
})