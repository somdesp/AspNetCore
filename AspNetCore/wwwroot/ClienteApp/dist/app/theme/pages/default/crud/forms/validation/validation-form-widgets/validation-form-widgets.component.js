import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ValidationFormWidgetsComponent = /** @class */ (function () {
    function ValidationFormWidgetsComponent(_script) {
        this._script = _script;
    }
    ValidationFormWidgetsComponent.prototype.ngOnInit = function () {
    };
    ValidationFormWidgetsComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-validation-form-widgets', ['assets/demo/default/custom/crud/forms/validation/form-widgets.js']);
    };
    ValidationFormWidgetsComponent = tslib_1.__decorate([
        Component({
            selector: "app-validation-form-widgets",
            templateUrl: "./validation-form-widgets.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ValidationFormWidgetsComponent);
    return ValidationFormWidgetsComponent;
}());
export { ValidationFormWidgetsComponent };
//# sourceMappingURL=validation-form-widgets.component.js.map