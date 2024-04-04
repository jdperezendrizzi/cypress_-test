import LoginPage from "../PageObject/loginPage";

describe('nueva_web_ase_login', function () {
    const loginPage = new LoginPage();

    it('Test_login', function () {
        loginPage.visit();
        loginPage.clickIraAutogestion('#btn-tablet');
        cy.get('#cuil-cuit-login').type(27226755344 );
        cy.get('#password-login').type(123456);
        cy.get('#btn-ingresar').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .box-titulo > .titulo').should('have.text', 'Comprobantes');
       
        // loginPage.clickIngresar();
       // loginPage.escribirEnLoginCuitCuil(20823213123)
       // loginPage.escribirEnLoginContraseña('')
       // loginPage.clickIngresar('#btn-ingresar)
        //loginPage.verificarlogin();

    });

});
