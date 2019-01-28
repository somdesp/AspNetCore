import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BaseColumnRenderingComponent = /** @class */ (function () {
    function BaseColumnRenderingComponent(_script) {
        this._script = _script;
    }
    BaseColumnRenderingComponent.prototype.ngOnInit = function () {
    };
    BaseColumnRenderingComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-base-column-rendering', ['assets/demo/default/custom/crud/metronic-datatable/base/column-rendering.js']);
    };
    BaseColumnRenderingComponent = tslib_1.__decorate([
        Component({
            selector: "app-base-column-rendering",
            templateUrl: "./base-column-rendering.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BaseColumnRenderingComponent);
    return BaseColumnRenderingComponent;
}());
export { BaseColumnRenderingComponent };
//# sourceMappingURL=base-column-rendering.component.js.map