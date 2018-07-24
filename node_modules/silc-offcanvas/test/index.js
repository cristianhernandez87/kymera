const server = require('node-http-server');
const Browser = require('zombie');

describe('silc offcanvas module', function () {

    const browser = new Browser();

    before(function () {

        server.deploy({
            port: 9001
        });

        return browser.visit('http://localhost:9001/index.html');
    });

    describe('offcanvas trigger open click', function () {

        before(function() {
            return browser
                .fire('#silc-offcanvas-0-open', 'click');
        });

        it('should show exactly one offcanvas element', function () {
            browser.assert.elements('#silc-offcanvas-0.silc-offcanvas--visible', { exactly: 1 });
        });

    });

    describe('offcanvas trigger close click', function () {

        before(function() {
            return browser
                .fire('#silc-offcanvas-0 .silc-offcanvas__trigger--close', 'click');
        });

        it('should hide offcanvas element', function () {
            browser.assert.elements('#silc-offcanvas-0.silc-offcanvas--visible', { exactly: 0 });
        });

    });

});
