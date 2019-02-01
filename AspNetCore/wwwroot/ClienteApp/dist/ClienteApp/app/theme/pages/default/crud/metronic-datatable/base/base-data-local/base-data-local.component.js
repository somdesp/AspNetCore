import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BaseDataLocalComponent = /** @class */ (function () {
    function BaseDataLocalComponent(_script) {
        this._script = _script;
    }
    BaseDataLocalComponent.prototype.ngOnInit = function () {
    };
    BaseDataLocalComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-base-data-local', ['assets/demo/default/custom/crud/metronic-datatable/base/data-local.js']);
    };
    BaseDataLocalComponent = tslib_1.__decorate([
        Component({
            selector: "app-base-data-local",
            templateUrl: "./base-data-local.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BaseDataLocalComponent);
    return BaseDataLocalComponent;
}());
export { BaseDataLocalComponent };
//# sourceMappingURL=base-data-local.component.js.map