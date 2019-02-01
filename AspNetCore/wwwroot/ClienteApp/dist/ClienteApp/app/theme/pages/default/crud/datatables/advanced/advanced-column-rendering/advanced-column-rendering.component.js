import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var AdvancedColumnRenderingComponent = /** @class */ (function () {
    function AdvancedColumnRenderingComponent(_script) {
        this._script = _script;
    }
    AdvancedColumnRenderingComponent.prototype.ngOnInit = function () {
    };
    AdvancedColumnRenderingComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-advanced-column-rendering', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/advanced/column-rendering.js']);
    };
    AdvancedColumnRenderingComponent = tslib_1.__decorate([
        Component({
            selector: "app-advanced-column-rendering",
            templateUrl: "./advanced-column-rendering.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], AdvancedColumnRenderingComponent);
    return AdvancedColumnRenderingComponent;
}());
export { AdvancedColumnRenderingComponent };
//# sourceMappingURL=advanced-column-rendering.component.js.map