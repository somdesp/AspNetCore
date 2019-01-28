import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BaseAutoColumnHideComponent = /** @class */ (function () {
    function BaseAutoColumnHideComponent(_script) {
        this._script = _script;
    }
    BaseAutoColumnHideComponent.prototype.ngOnInit = function () {
    };
    BaseAutoColumnHideComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-base-auto-column-hide', ['assets/demo/default/custom/crud/metronic-datatable/base/auto-column-hide.js']);
    };
    BaseAutoColumnHideComponent = tslib_1.__decorate([
        Component({
            selector: "app-base-auto-column-hide",
            templateUrl: "./base-auto-column-hide.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BaseAutoColumnHideComponent);
    return BaseAutoColumnHideComponent;
}());
export { BaseAutoColumnHideComponent };
//# sourceMappingURL=base-auto-column-hide.component.js.map