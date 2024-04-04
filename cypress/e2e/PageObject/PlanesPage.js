
class PlanesPage {
    visit() {
        cy.visit('10.3.0.50/');
    }

    clickMostrarMas(bannerId) {
        cy.get(`${bannerId} > label > .container-banner > .title-and-btn-container > .mostrar-mas`).click();
        cy.wait(1000); // Considera usar una espera implícita o condicional
    }

    clickMostrarMenos(bannerId) {
        cy.get(`${bannerId} > label > .container-banner > .title-and-btn-container > .btns-desktop > .mostrar-menos`).click();
    }

    clickAsesorarme(bannerId) {
        cy.get(`${bannerId} > label > .container-banner > .title-and-btn-container > .btns-desktop > .asesorarme`).click();
    }

    clickArrowDown(bannerId) {
        cy.get(`${bannerId} > label > .container-banner > i > .arrow-down`).click();
        cy.wait(1000); // Considera usar una espera implícita o condicional
    }

    verificarTituloNuestrosPlanes() {
        cy.get('.nuestros-planes-title').should('have.text', 'Nuestros planes');
    }

    setViewport(width, height) {
        cy.viewport(width, height);
    }
    //Asesorarme Plan Eco
     
    clickAsesorarme(bannerId) {
        cy.get(`${bannerId} > label > .container-banner > .title-and-btn-container > .btns-desktop > .asesorarme`).click();
    }
    
    escribirEnContactoNombre(nombre) {
        cy.get('#input-contacto-nombre').clear().type(nombre);
    }
    escribirEnContactoApellido(apellido) {
        cy.get(`#input-contacto-apellido`).clear().type(apellido);
    }
    escribirEnContactoCuil(cuil) {
        cy.get(`#input-contacto-cuil`).clear().type(cuil);
    }
    escribirEnContactoEmpresa(empresa) {
        cy.get(`#input-contacto-empresa`).clear().type(empresa);
    }
    escribirEnContactoCuit(cuit) {
        cy.get(`#input-contacto-cuit`).clear().type(cuit);
    }
    escribirEnContactoCodArea(CodArea) {
        cy.get(`#input-contacto-cod-area`).clear().type(CodArea);
    }
    escribirEnContactoTelefono(telefono) {
        cy.get(`#input-contacto-telefono`).clear().type(telefono);
    }
    escribirEnContactoCiudad(ciudad) {
        cy.get(`#input-contacto-ciudad`).clear().type(ciudad);
    }
    escribirEnContactoCodigoPostal(codigopostal) {
        cy.get(`#input-contacto-codigopostal`).clear().type(codigopostal);
    }
    escribirEnContactoEmail(email) {
        cy.get(`#input-contacto-email`).clear().type(email);
    }
    escribirEnContactoMensaje(mensaje) {
        cy.get(`#input-contacto-mensaje`).clear().type(mensaje);
    } 
    clickEnviar(bannerId) {
        cy.get(`${bannerId} #btn-enviar-contacto`).click();
    }
    
}

export default PlanesPage;
