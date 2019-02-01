import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var AdvancedRowCallbackComponent = /** @class */ (function () {
    function AdvancedRowCallbackComponent(_script) {
        this._script = _script;
    }
    AdvancedRowCallbackComponent.prototype.ngOnInit = function () {
    };
    AdvancedRowCallbackComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-advanced-row-callback', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/advanced/row-callback.js']);
    };
    AdvancedRowCallbackComponent = tslib_1.__decorate([
        Component({
            selector: "app-advanced-row-callback",
            templateUrl: "./advanced-row-callback.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], AdvancedRowCallbackComponent);
    return AdvancedRowCallbackComponent;
}());
export { AdvancedRowCallbackComponent };
//# sourceMappingURL=advanced-row-callback.component.js.map