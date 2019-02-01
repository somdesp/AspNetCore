import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsBootstrapDatetimepickerComponent = /** @class */ (function () {
    function WidgetsBootstrapDatetimepickerComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapDatetimepickerComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapDatetimepickerComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-bootstrap-datetimepicker', ['assets/demo/default/custom/crud/forms/widgets/bootstrap-datetimepicker.js']);
    };
    WidgetsBootstrapDatetimepickerComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-bootstrap-datetimepicker",
            templateUrl: "./widgets-bootstrap-datetimepicker.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsBootstrapDatetimepickerComponent);
    return WidgetsBootstrapDatetimepickerComponent;
}());
export { WidgetsBootstrapDatetimepickerComponent };
//# sourceMappingURL=widgets-bootstrap-datetimepicker.component.js.map