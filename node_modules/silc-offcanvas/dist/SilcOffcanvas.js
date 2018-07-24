"use strict";
exports.__esModule = true;
var default_1 = (function () {
    /**
     * Constructor
     * @param element
     */
    function default_1(element) {
        var _this = this;
        // Shortcut to trigger
        this.trigger = element;
        // Get target element
        this.target = this.getTarget(this.trigger);
        // Event listener for trigger
        if (this.target !== undefined) {
            this.trigger.addEventListener('click', function (e) {
                _this.toggle(e);
            });
        }
    }
    /**
     * Get target element for trigger
     * @param trigger
     */
    default_1.prototype.getTarget = function (trigger) {
        if (!trigger.hasAttribute('href')) {
            console.log('silc offcanvas: Trigger is missing href attribute');
            return undefined;
        }
        var targetSelector = trigger.getAttribute('href');
        var targetEl = document.querySelector(targetSelector);
        if (targetEl === undefined) {
            console.log('silc offcanvas: Target element ' + targetSelector + ' does not exist');
        }
        return targetEl;
    };
    /**
     * Stop target iframe videos from playing
     * @param target
     */
    default_1.prototype.stopIframeVideo = function (target) {
        [].forEach.call(target.querySelectorAll('iframe'), function (el) {
            var src = el.getAttribute('src');
            el.setAttribute('src', src);
        });
    };
    /**
     * Toggle visibility of the target
     * @param event
     */
    default_1.prototype.toggle = function (event) {
        event.preventDefault();
        if (this.target.classList.contains('silc-offcanvas--visible')) {
            this.stopIframeVideo(this.target);
        }
        this.target.classList.toggle('silc-offcanvas--visible');
    };
    return default_1;
}());
exports["default"] = default_1;
