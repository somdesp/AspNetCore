import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
var HeaderNavComponent = /** @class */ (function () {
    function HeaderNavComponent() {
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
    };
    HeaderNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initHeader();
    };
    HeaderNavComponent = tslib_1.__decorate([
        Component({
            selector: "app-header-nav",
            templateUrl: "./header-nav.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());
export { HeaderNavComponent };
//# sourceMappingURL=header-nav.component.js.map