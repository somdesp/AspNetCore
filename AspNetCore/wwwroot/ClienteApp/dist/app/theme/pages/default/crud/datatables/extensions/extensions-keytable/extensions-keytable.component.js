import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ExtensionsKeytableComponent = /** @class */ (function () {
    function ExtensionsKeytableComponent(_script) {
        this._script = _script;
    }
    ExtensionsKeytableComponent.prototype.ngOnInit = function () {
    };
    ExtensionsKeytableComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-extensions-keytable', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/extensions/keytable.js']);
    };
    ExtensionsKeytableComponent = tslib_1.__decorate([
        Component({
            selector: "app-extensions-keytable",
            templateUrl: "./extensions-keytable.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ExtensionsKeytableComponent);
    return ExtensionsKeytableComponent;
}());
export { ExtensionsKeytableComponent };
//# sourceMappingURL=extensions-keytable.component.js.map