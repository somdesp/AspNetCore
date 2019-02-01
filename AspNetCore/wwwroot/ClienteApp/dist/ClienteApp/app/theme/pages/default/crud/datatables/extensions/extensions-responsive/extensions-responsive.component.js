import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ExtensionsResponsiveComponent = /** @class */ (function () {
    function ExtensionsResponsiveComponent(_script) {
        this._script = _script;
    }
    ExtensionsResponsiveComponent.prototype.ngOnInit = function () {
    };
    ExtensionsResponsiveComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-extensions-responsive', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/extensions/responsive.js']);
    };
    ExtensionsResponsiveComponent = tslib_1.__decorate([
        Component({
            selector: "app-extensions-responsive",
            templateUrl: "./extensions-responsive.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ExtensionsResponsiveComponent);
    return ExtensionsResponsiveComponent;
}());
export { ExtensionsResponsiveComponent };
//# sourceMappingURL=extensions-responsive.component.js.map