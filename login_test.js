Feature('login')

Scenario('login com sucesso', ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/')
    I.wait(3); // espera página carregar

    I.click('a[href="/login"]') // abre formulário de login
    I.waitForElement('#user', 10) // espera o campo #user estar visível

    I.fillField('#user', 'rodriguinho_0092@hotmail.com'); // email
    I.fillField('#password', '123456') // senha
    I.click('#btnLogin') // botão login
    I.waitForText('Login realizado', 3)

})  .tag('@sucesso')


Scenario('logar ditando apenas e-mail',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/');
    I.wait(3); // espera página carregar

    I.click('a[href="/login"]') // abre formulário de login
    I.waitForElement('#user', 10) // espera o campo #user estar visível

    I.fillField('#user', 'rodriguinho_0092@hotmail.com'); // email
    I.click('#btnLogin') // botão login
    I.waitForText('Senha inválida.', 3)

})


Scenario('logar sem digitar e-mail e senha',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/')
    I.wait(3)
    I.click('a[href="/login"]');
    I.waitForText('login', 10)//lembrar que quando for 'text' a pag aguarda o texto (login) em especifico aparecer apos 10seg para logar
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)

})

Scenario('logar digitando apenas senha',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/')
    I.wait(3)
    I.click('a[href="/login"]')
    I.waitForText('login' , 10)
    I.fillField('#password','123456')

    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)

})

