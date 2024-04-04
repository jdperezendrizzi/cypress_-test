// En /cypress/integration/planesTest.cy.js

import PlanesPage from '../PageObject/PlanesPage';

describe('nueva_web_ase', function () {
    const planesPage = new PlanesPage();

    it.skip('Test_public_planes', function () {
        planesPage.visit();
        planesPage.clickMostrarMas('#img1');
        planesPage.clickMostrarMas('#img2');
        planesPage.clickMostrarMas('#img3');
        planesPage.clickMostrarMas('#img4');
        planesPage.clickMostrarMenos('#img4');
        planesPage.verificarTituloNuestrosPlanes();
    });

    it('Test_public_planes_asesorarme', function () {
        planesPage.visit();
        planesPage.clickMostrarMas('#img1');
        planesPage.clickAsesorarme('#img1');
        planesPage.escribirEnContactoNombre('Juan ');
        planesPage.escribirEnContactoApellido(' Pérez');
        planesPage.escribirEnContactoEmpresa('Medife')
        planesPage.escribirEnContactoCuil('34447931119')
        planesPage.escribirEnContactoCuit('34447931119')
        planesPage.escribirEnContactoCodArea('011');
        planesPage.escribirEnContactoTelefono(698762312)
        planesPage.escribirEnContactoCiudad('olivos')
        planesPage.escribirEnContactoCodigoPostal(1636)
        planesPage.escribirEnContactoEmail('joseperez@medife.com.ar')
        planesPage.escribirEnContactoMensaje('mensaje en descripcion para llenar formulario')
        planesPage.clickEnviar();

    });

    it.skip('Test_public_planes_responsive', function () {
        planesPage.setViewport(550, 750);
        planesPage.visit();
        planesPage.clickArrowDown('#img1');
        planesPage.clickArrowDown('#img2');
        planesPage.clickArrowDown('#img3');
        planesPage.clickArrowDown('#img4');
        planesPage.clickArrowDown('#img4');
        planesPage.verificarTituloNuestrosPlanes();
    });
});
