import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsFormRepeaterComponent = /** @class */ (function () {
    function WidgetsFormRepeaterComponent(_script) {
        this._script = _script;
    }
    WidgetsFormRepeaterComponent.prototype.ngOnInit = function () {
    };
    WidgetsFormRepeaterComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-form-repeater', ['assets/demo/default/custom/crud/forms/widgets/form-repeater.js']);
    };
    WidgetsFormRepeaterComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-form-repeater",
            templateUrl: "./widgets-form-repeater.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsFormRepeaterComponent);
    return WidgetsFormRepeaterComponent;
}());
export { WidgetsFormRepeaterComponent };
//# sourceMappingURL=widgets-form-repeater.component.js.map