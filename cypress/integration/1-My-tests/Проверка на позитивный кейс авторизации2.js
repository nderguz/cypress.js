describe('Автотесты для qa studio', function () {

    it('Проверка негативный кейс авторизации с неправильным логином', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('astrtr@yandex.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
})