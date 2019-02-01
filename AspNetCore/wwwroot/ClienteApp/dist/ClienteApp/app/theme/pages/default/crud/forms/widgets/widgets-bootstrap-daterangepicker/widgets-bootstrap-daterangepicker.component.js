import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsBootstrapDaterangepickerComponent = /** @class */ (function () {
    function WidgetsBootstrapDaterangepickerComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapDaterangepickerComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapDaterangepickerComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-bootstrap-daterangepicker', ['assets/demo/default/custom/crud/forms/widgets/bootstrap-daterangepicker.js']);
    };
    WidgetsBootstrapDaterangepickerComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-bootstrap-daterangepicker",
            templateUrl: "./widgets-bootstrap-daterangepicker.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsBootstrapDaterangepickerComponent);
    return WidgetsBootstrapDaterangepickerComponent;
}());
export { WidgetsBootstrapDaterangepickerComponent };
//# sourceMappingURL=widgets-bootstrap-daterangepicker.component.js.map