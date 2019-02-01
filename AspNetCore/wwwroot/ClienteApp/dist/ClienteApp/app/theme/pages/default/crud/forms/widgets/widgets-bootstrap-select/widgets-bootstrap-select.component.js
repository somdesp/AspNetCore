import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsBootstrapSelectComponent = /** @class */ (function () {
    function WidgetsBootstrapSelectComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapSelectComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapSelectComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-bootstrap-select', ['assets/demo/default/custom/crud/forms/widgets/bootstrap-select.js']);
    };
    WidgetsBootstrapSelectComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-bootstrap-select",
            templateUrl: "./widgets-bootstrap-select.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsBootstrapSelectComponent);
    return WidgetsBootstrapSelectComponent;
}());
export { WidgetsBootstrapSelectComponent };
//# sourceMappingURL=widgets-bootstrap-select.component.js.map