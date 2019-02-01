import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ExtensionsButtonsComponent = /** @class */ (function () {
    function ExtensionsButtonsComponent(_script) {
        this._script = _script;
    }
    ExtensionsButtonsComponent.prototype.ngOnInit = function () {
    };
    ExtensionsButtonsComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-extensions-buttons', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/extensions/buttons.js']);
    };
    ExtensionsButtonsComponent = tslib_1.__decorate([
        Component({
            selector: "app-extensions-buttons",
            templateUrl: "./extensions-buttons.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ExtensionsButtonsComponent);
    return ExtensionsButtonsComponent;
}());
export { ExtensionsButtonsComponent };
//# sourceMappingURL=extensions-buttons.component.js.map