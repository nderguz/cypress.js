describe('Автотесты для staya', function () {

    it('Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('nderguz@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type(' iLoveqastudio1');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.get('.profile-orders__title');
    })
})