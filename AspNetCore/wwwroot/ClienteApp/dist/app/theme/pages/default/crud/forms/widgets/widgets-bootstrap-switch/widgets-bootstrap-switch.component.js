import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsBootstrapSwitchComponent = /** @class */ (function () {
    function WidgetsBootstrapSwitchComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapSwitchComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapSwitchComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-bootstrap-switch', ['assets/demo/default/custom/crud/forms/widgets/bootstrap-switch.js']);
    };
    WidgetsBootstrapSwitchComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-bootstrap-switch",
            templateUrl: "./widgets-bootstrap-switch.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsBootstrapSwitchComponent);
    return WidgetsBootstrapSwitchComponent;
}());
export { WidgetsBootstrapSwitchComponent };
//# sourceMappingURL=widgets-bootstrap-switch.component.js.map