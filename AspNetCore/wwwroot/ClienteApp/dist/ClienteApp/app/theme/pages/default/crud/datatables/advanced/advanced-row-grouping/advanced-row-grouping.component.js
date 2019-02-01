import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var AdvancedRowGroupingComponent = /** @class */ (function () {
    function AdvancedRowGroupingComponent(_script) {
        this._script = _script;
    }
    AdvancedRowGroupingComponent.prototype.ngOnInit = function () {
    };
    AdvancedRowGroupingComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-advanced-row-grouping', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/advanced/row-grouping.js']);
    };
    AdvancedRowGroupingComponent = tslib_1.__decorate([
        Component({
            selector: "app-advanced-row-grouping",
            templateUrl: "./advanced-row-grouping.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], AdvancedRowGroupingComponent);
    return AdvancedRowGroupingComponent;
}());
export { AdvancedRowGroupingComponent };
//# sourceMappingURL=advanced-row-grouping.component.js.map