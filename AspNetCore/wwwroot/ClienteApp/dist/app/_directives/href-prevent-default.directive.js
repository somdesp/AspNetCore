import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
var HrefPreventDefaultDirective = /** @class */ (function () {
    function HrefPreventDefaultDirective(el) {
        this.el = el;
    }
    HrefPreventDefaultDirective.prototype.ngAfterViewInit = function () {
    };
    HrefPreventDefaultDirective.prototype.preventDefault = function (event) {
        if (this.href.length === 0 || this.href === '#') {
            event.preventDefault();
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], HrefPreventDefaultDirective.prototype, "href", void 0);
    HrefPreventDefaultDirective = tslib_1.__decorate([
        Directive({
            selector: "[href]",
            host: { '(click)': 'preventDefault($event)' },
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], HrefPreventDefaultDirective);
    return HrefPreventDefaultDirective;
}());
export { HrefPreventDefaultDirective };
//# sourceMappingURL=href-prevent-default.directive.js.map