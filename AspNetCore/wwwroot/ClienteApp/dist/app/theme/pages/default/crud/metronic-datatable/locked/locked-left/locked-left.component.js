import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var LockedLeftComponent = /** @class */ (function () {
    function LockedLeftComponent(_script) {
        this._script = _script;
    }
    LockedLeftComponent.prototype.ngOnInit = function () {
    };
    LockedLeftComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-locked-left', ['assets/demo/default/custom/crud/metronic-datatable/locked/left.js']);
    };
    LockedLeftComponent = tslib_1.__decorate([
        Component({
            selector: "app-locked-left",
            templateUrl: "./locked-left.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], LockedLeftComponent);
    return LockedLeftComponent;
}());
export { LockedLeftComponent };
//# sourceMappingURL=locked-left.component.js.map