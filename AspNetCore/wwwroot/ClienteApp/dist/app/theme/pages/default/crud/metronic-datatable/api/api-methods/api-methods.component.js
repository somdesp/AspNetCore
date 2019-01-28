import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ApiMethodsComponent = /** @class */ (function () {
    function ApiMethodsComponent(_script) {
        this._script = _script;
    }
    ApiMethodsComponent.prototype.ngOnInit = function () {
    };
    ApiMethodsComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-api-methods', ['assets/demo/default/custom/crud/metronic-datatable/api/methods.js']);
    };
    ApiMethodsComponent = tslib_1.__decorate([
        Component({
            selector: "app-api-methods",
            templateUrl: "./api-methods.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ApiMethodsComponent);
    return ApiMethodsComponent;
}());
export { ApiMethodsComponent };
//# sourceMappingURL=api-methods.component.js.map