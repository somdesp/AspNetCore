import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BaseDataAjaxComponent = /** @class */ (function () {
    function BaseDataAjaxComponent(_script) {
        this._script = _script;
    }
    BaseDataAjaxComponent.prototype.ngOnInit = function () {
    };
    BaseDataAjaxComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-base-data-ajax', ['assets/demo/default/custom/crud/metronic-datatable/base/data-ajax.js']);
    };
    BaseDataAjaxComponent = tslib_1.__decorate([
        Component({
            selector: "app-base-data-ajax",
            templateUrl: "./base-data-ajax.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BaseDataAjaxComponent);
    return BaseDataAjaxComponent;
}());
export { BaseDataAjaxComponent };
//# sourceMappingURL=base-data-ajax.component.js.map