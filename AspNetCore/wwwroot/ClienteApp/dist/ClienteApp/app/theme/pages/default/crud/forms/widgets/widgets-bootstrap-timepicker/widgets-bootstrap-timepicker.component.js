import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsBootstrapTimepickerComponent = /** @class */ (function () {
    function WidgetsBootstrapTimepickerComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapTimepickerComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapTimepickerComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-bootstrap-timepicker', ['assets/demo/default/custom/crud/forms/widgets/bootstrap-timepicker.js']);
    };
    WidgetsBootstrapTimepickerComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-bootstrap-timepicker",
            templateUrl: "./widgets-bootstrap-timepicker.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsBootstrapTimepickerComponent);
    return WidgetsBootstrapTimepickerComponent;
}());
export { WidgetsBootstrapTimepickerComponent };
//# sourceMappingURL=widgets-bootstrap-timepicker.component.js.map