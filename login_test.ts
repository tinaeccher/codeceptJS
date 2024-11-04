Feature('login');

Scenario('Login com Sucesso',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.wait(2);
    //clicar para efetuar o login
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','cristinadeccher@gmail.com') //preenche o campo e-mail 
    I.fillField('#password','tina1234') //preenche o campo password
    I.click('#btnLogin') //clica no botão login
    I.waitForText('Login realizado',3)
    //
}).tag('@sucesso')

Scenario('Tentando Logar apenas com o e-mail',  ({ I }) => {
    I.amOnPage('https://automationpratice.com.br/')
    I.wait(2);
    //clicar para efetuar o login
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','cristinadeccher@gmail.com')  //preenche o campo e-mail 
    I.fillField('#password','') //não preencher o campo senha
    I.click('#btnLogin') //clica no botão login
    I.waitForText('Senha inválida.',10) //mensagem de erro
    //
})

Scenario('Tentando Logar apenas com a Senha',  ({ I }) => {
    I.amOnPage('https://automationpratice.com.br/')
    I.wait(2);
    //clicar para efetuar o login
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','')//nao preenche o email
    I.fillField('#password','tina1234') //preenche o campo senha
    I.click('#btnLogin') //clica no botão login
    I.waitForText('E-mail inválido',10) //retorna o erro
    //
})

Scenario('Tentando Logar apenas sem o e-mail e sem senha',  ({ I }) => {
    I.amOnPage('https://automationpratice.com.br/')
    I.wait(2);
    //clicar para efetuar o login
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','') //não preenche o usuário
    I.fillField('#password','') //não preenche a senha
    I.click('#btnLogin') //clicar em login
    I.waitForText('E-mail Inválido',10) //retorna o erro
    //
});
