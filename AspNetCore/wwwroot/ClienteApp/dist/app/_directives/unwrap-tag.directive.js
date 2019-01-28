import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
import { Helpers } from '../helpers';
var UnwrapTagDirective = /** @class */ (function () {
    function UnwrapTagDirective(el) {
        this.el = el;
    }
    UnwrapTagDirective.prototype.ngAfterViewInit = function () {
        var nativeElement = this.el.nativeElement;
        Helpers.unwrapTag(nativeElement);
    };
    UnwrapTagDirective = tslib_1.__decorate([
        Directive({
            selector: "[appunwraptag]",
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], UnwrapTagDirective);
    return UnwrapTagDirective;
}());
export { UnwrapTagDirective };
//# sourceMappingURL=unwrap-tag.directive.js.map