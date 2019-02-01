import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsBootstrapMaxlengthComponent = /** @class */ (function () {
    function WidgetsBootstrapMaxlengthComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapMaxlengthComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapMaxlengthComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-bootstrap-maxlength', ['assets/demo/default/custom/crud/forms/widgets/bootstrap-maxlength.js']);
    };
    WidgetsBootstrapMaxlengthComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-bootstrap-maxlength",
            templateUrl: "./widgets-bootstrap-maxlength.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsBootstrapMaxlengthComponent);
    return WidgetsBootstrapMaxlengthComponent;
}());
export { WidgetsBootstrapMaxlengthComponent };
//# sourceMappingURL=widgets-bootstrap-maxlength.component.js.map