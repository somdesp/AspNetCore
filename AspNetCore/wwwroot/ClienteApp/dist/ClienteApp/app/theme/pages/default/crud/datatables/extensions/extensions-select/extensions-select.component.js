import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ExtensionsSelectComponent = /** @class */ (function () {
    function ExtensionsSelectComponent(_script) {
        this._script = _script;
    }
    ExtensionsSelectComponent.prototype.ngOnInit = function () {
    };
    ExtensionsSelectComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-extensions-select', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/extensions/select.js']);
    };
    ExtensionsSelectComponent = tslib_1.__decorate([
        Component({
            selector: "app-extensions-select",
            templateUrl: "./extensions-select.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ExtensionsSelectComponent);
    return ExtensionsSelectComponent;
}());
export { ExtensionsSelectComponent };
//# sourceMappingURL=extensions-select.component.js.map