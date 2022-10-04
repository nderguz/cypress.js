describe('Автотесты для qa studio', function () {

    it('Проверка на негативный кейс авторизации с неправильным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('idosщhhvvzsqqqqq');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
    })
})
