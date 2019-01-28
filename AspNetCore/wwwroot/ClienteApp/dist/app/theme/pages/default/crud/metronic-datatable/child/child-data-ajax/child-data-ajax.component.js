import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ChildDataAjaxComponent = /** @class */ (function () {
    function ChildDataAjaxComponent(_script) {
        this._script = _script;
    }
    ChildDataAjaxComponent.prototype.ngOnInit = function () {
    };
    ChildDataAjaxComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-child-data-ajax', ['assets/demo/default/custom/crud/metronic-datatable/child/data-ajax.js']);
    };
    ChildDataAjaxComponent = tslib_1.__decorate([
        Component({
            selector: "app-child-data-ajax",
            templateUrl: "./child-data-ajax.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ChildDataAjaxComponent);
    return ChildDataAjaxComponent;
}());
export { ChildDataAjaxComponent };
//# sourceMappingURL=child-data-ajax.component.js.map