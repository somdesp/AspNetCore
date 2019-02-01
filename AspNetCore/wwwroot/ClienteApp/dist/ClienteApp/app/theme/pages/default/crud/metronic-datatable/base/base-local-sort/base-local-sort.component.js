import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BaseLocalSortComponent = /** @class */ (function () {
    function BaseLocalSortComponent(_script) {
        this._script = _script;
    }
    BaseLocalSortComponent.prototype.ngOnInit = function () {
    };
    BaseLocalSortComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-base-local-sort', ['assets/demo/default/custom/crud/metronic-datatable/base/local-sort.js']);
    };
    BaseLocalSortComponent = tslib_1.__decorate([
        Component({
            selector: "app-base-local-sort",
            templateUrl: "./base-local-sort.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BaseLocalSortComponent);
    return BaseLocalSortComponent;
}());
export { BaseLocalSortComponent };
//# sourceMappingURL=base-local-sort.component.js.map