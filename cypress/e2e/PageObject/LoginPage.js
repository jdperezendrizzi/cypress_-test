
class LoginPage {
    visit() {
        cy.visit('10.3.0.50/login');
    }

    clickIraAutogestion(bannerId) {
        cy.get(`${bannerId} > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link > .elementor-button-content-wrapper > .elementor-button-text`).click();
        cy.wait(1000); // Considera usar una espera implícita o condicional
    }    
    escribirEnLoginCuitCuil(cuil) {
        cy.get('#cuil-cuit-login').clear().type(cuil);
    }
    escribirEnLoginContraseña(contraseña) {
        cy.get('#password-login').clear().type(contraseña);
    }
    clickIngresar(bannerId) {
        cy.get(`${bannerId} #btn-ingresar`).click();
        cy.wait(1000); // Considera usar una espera implícita o condicional
    }
    verificarlogin() {
        cy.get(':nth-child(1) > .box-titulo > .titulo').should('have.text', 'Comprobantes');
    }
    
}

export default LoginPage;
