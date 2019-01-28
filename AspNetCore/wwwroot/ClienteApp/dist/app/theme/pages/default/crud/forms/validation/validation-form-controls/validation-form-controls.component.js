import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ValidationFormControlsComponent = /** @class */ (function () {
    function ValidationFormControlsComponent(_script) {
        this._script = _script;
    }
    ValidationFormControlsComponent.prototype.ngOnInit = function () {
    };
    ValidationFormControlsComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-validation-form-controls', ['assets/demo/default/custom/crud/forms/validation/form-controls.js']);
    };
    ValidationFormControlsComponent = tslib_1.__decorate([
        Component({
            selector: "app-validation-form-controls",
            templateUrl: "./validation-form-controls.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ValidationFormControlsComponent);
    return ValidationFormControlsComponent;
}());
export { ValidationFormControlsComponent };
//# sourceMappingURL=validation-form-controls.component.js.map