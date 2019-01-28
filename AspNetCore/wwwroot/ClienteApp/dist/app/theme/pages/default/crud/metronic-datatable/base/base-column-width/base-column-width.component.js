import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BaseColumnWidthComponent = /** @class */ (function () {
    function BaseColumnWidthComponent(_script) {
        this._script = _script;
    }
    BaseColumnWidthComponent.prototype.ngOnInit = function () {
    };
    BaseColumnWidthComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-base-column-width', ['assets/demo/default/custom/crud/metronic-datatable/base/column-width.js']);
    };
    BaseColumnWidthComponent = tslib_1.__decorate([
        Component({
            selector: "app-base-column-width",
            templateUrl: "./base-column-width.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BaseColumnWidthComponent);
    return BaseColumnWidthComponent;
}());
export { BaseColumnWidthComponent };
//# sourceMappingURL=base-column-width.component.js.map