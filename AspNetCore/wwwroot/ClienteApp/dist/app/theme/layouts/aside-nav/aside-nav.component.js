import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
var AsideNavComponent = /** @class */ (function () {
    function AsideNavComponent() {
    }
    AsideNavComponent.prototype.ngOnInit = function () {
    };
    AsideNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initAside();
    };
    AsideNavComponent = tslib_1.__decorate([
        Component({
            selector: "app-aside-nav",
            templateUrl: "./aside-nav.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AsideNavComponent);
    return AsideNavComponent;
}());
export { AsideNavComponent };
//# sourceMappingURL=aside-nav.component.js.map