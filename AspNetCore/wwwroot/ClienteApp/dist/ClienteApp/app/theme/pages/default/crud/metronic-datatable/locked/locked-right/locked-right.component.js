import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var LockedRightComponent = /** @class */ (function () {
    function LockedRightComponent(_script) {
        this._script = _script;
    }
    LockedRightComponent.prototype.ngOnInit = function () {
    };
    LockedRightComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-locked-right', ['assets/demo/default/custom/crud/metronic-datatable/locked/right.js']);
    };
    LockedRightComponent = tslib_1.__decorate([
        Component({
            selector: "app-locked-right",
            templateUrl: "./locked-right.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], LockedRightComponent);
    return LockedRightComponent;
}());
export { LockedRightComponent };
//# sourceMappingURL=locked-right.component.js.map