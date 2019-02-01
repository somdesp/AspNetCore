import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsBootstrapDatepickerComponent = /** @class */ (function () {
    function WidgetsBootstrapDatepickerComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapDatepickerComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapDatepickerComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-bootstrap-datepicker', ['assets/demo/default/custom/crud/forms/widgets/bootstrap-datepicker.js']);
    };
    WidgetsBootstrapDatepickerComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-bootstrap-datepicker",
            templateUrl: "./widgets-bootstrap-datepicker.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsBootstrapDatepickerComponent);
    return WidgetsBootstrapDatepickerComponent;
}());
export { WidgetsBootstrapDatepickerComponent };
//# sourceMappingURL=widgets-bootstrap-datepicker.component.js.map