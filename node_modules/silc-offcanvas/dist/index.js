"use strict";
exports.__esModule = true;
var SilcOffcanvas_1 = require("./SilcOffcanvas");
exports.SilcOffcanvas = SilcOffcanvas_1["default"];
function silcOffcanvasInit() {
    [].forEach.call(document.querySelectorAll('.silc-offcanvas__trigger'), function (el) {
        new SilcOffcanvas_1["default"](el);
    });
}
exports.silcOffcanvasInit = silcOffcanvasInit;
