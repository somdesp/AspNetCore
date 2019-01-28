import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ChildDataLocalComponent = /** @class */ (function () {
    function ChildDataLocalComponent(_script) {
        this._script = _script;
    }
    ChildDataLocalComponent.prototype.ngOnInit = function () {
    };
    ChildDataLocalComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-child-data-local', ['assets/demo/default/custom/crud/metronic-datatable/child/data-local.js']);
    };
    ChildDataLocalComponent = tslib_1.__decorate([
        Component({
            selector: "app-child-data-local",
            templateUrl: "./child-data-local.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ChildDataLocalComponent);
    return ChildDataLocalComponent;
}());
export { ChildDataLocalComponent };
//# sourceMappingURL=child-data-local.component.js.map