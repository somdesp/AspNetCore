import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BaseRowDetailsComponent = /** @class */ (function () {
    function BaseRowDetailsComponent(_script) {
        this._script = _script;
    }
    BaseRowDetailsComponent.prototype.ngOnInit = function () {
    };
    BaseRowDetailsComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-base-row-details', ['assets/demo/default/custom/crud/metronic-datatable/base/row-details.js']);
    };
    BaseRowDetailsComponent = tslib_1.__decorate([
        Component({
            selector: "app-base-row-details",
            templateUrl: "./base-row-details.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BaseRowDetailsComponent);
    return BaseRowDetailsComponent;
}());
export { BaseRowDetailsComponent };
//# sourceMappingURL=base-row-details.component.js.map