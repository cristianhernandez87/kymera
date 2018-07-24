import SilcOffcanvas from './SilcOffcanvas';

function silcOffcanvasInit() {
    [].forEach.call(document.querySelectorAll('.silc-offcanvas__trigger'), (el) => {
        new SilcOffcanvas(el);
    });
}

export { SilcOffcanvas, silcOffcanvasInit }
