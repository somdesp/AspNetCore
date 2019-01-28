import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsSelect2Component = /** @class */ (function () {
    function WidgetsSelect2Component(_script) {
        this._script = _script;
    }
    WidgetsSelect2Component.prototype.ngOnInit = function () {
    };
    WidgetsSelect2Component.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-select2', ['assets/demo/default/custom/crud/forms/widgets/select2.js']);
    };
    WidgetsSelect2Component = tslib_1.__decorate([
        Component({
            selector: "app-widgets-select2",
            templateUrl: "./widgets-select2.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsSelect2Component);
    return WidgetsSelect2Component;
}());
export { WidgetsSelect2Component };
//# sourceMappingURL=widgets-select2.component.js.map