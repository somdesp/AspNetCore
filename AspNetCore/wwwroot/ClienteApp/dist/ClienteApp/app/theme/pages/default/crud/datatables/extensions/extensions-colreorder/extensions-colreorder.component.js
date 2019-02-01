import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ExtensionsColreorderComponent = /** @class */ (function () {
    function ExtensionsColreorderComponent(_script) {
        this._script = _script;
    }
    ExtensionsColreorderComponent.prototype.ngOnInit = function () {
    };
    ExtensionsColreorderComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-extensions-colreorder', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/extensions/colreorder.js']);
    };
    ExtensionsColreorderComponent = tslib_1.__decorate([
        Component({
            selector: "app-extensions-colreorder",
            templateUrl: "./extensions-colreorder.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ExtensionsColreorderComponent);
    return ExtensionsColreorderComponent;
}());
export { ExtensionsColreorderComponent };
//# sourceMappingURL=extensions-colreorder.component.js.map