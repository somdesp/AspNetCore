import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsBootstrapTouchspinComponent = /** @class */ (function () {
    function WidgetsBootstrapTouchspinComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapTouchspinComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapTouchspinComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-bootstrap-touchspin', ['assets/demo/default/custom/crud/forms/widgets/bootstrap-touchspin.js']);
    };
    WidgetsBootstrapTouchspinComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-bootstrap-touchspin",
            templateUrl: "./widgets-bootstrap-touchspin.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsBootstrapTouchspinComponent);
    return WidgetsBootstrapTouchspinComponent;
}());
export { WidgetsBootstrapTouchspinComponent };
//# sourceMappingURL=widgets-bootstrap-touchspin.component.js.map