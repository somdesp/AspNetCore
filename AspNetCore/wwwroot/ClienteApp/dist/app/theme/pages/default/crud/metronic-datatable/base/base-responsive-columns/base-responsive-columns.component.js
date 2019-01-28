import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BaseResponsiveColumnsComponent = /** @class */ (function () {
    function BaseResponsiveColumnsComponent(_script) {
        this._script = _script;
    }
    BaseResponsiveColumnsComponent.prototype.ngOnInit = function () {
    };
    BaseResponsiveColumnsComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-base-responsive-columns', ['assets/demo/default/custom/crud/metronic-datatable/base/responsive-columns.js']);
    };
    BaseResponsiveColumnsComponent = tslib_1.__decorate([
        Component({
            selector: "app-base-responsive-columns",
            templateUrl: "./base-responsive-columns.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BaseResponsiveColumnsComponent);
    return BaseResponsiveColumnsComponent;
}());
export { BaseResponsiveColumnsComponent };
//# sourceMappingURL=base-responsive-columns.component.js.map