import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsInputMaskComponent = /** @class */ (function () {
    function WidgetsInputMaskComponent(_script) {
        this._script = _script;
    }
    WidgetsInputMaskComponent.prototype.ngOnInit = function () {
    };
    WidgetsInputMaskComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-input-mask', ['assets/demo/default/custom/crud/forms/widgets/input-mask.js']);
    };
    WidgetsInputMaskComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-input-mask",
            templateUrl: "./widgets-input-mask.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsInputMaskComponent);
    return WidgetsInputMaskComponent;
}());
export { WidgetsInputMaskComponent };
//# sourceMappingURL=widgets-input-mask.component.js.map