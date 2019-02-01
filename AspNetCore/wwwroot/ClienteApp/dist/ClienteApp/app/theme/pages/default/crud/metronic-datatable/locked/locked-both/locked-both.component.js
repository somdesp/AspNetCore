import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var LockedBothComponent = /** @class */ (function () {
    function LockedBothComponent(_script) {
        this._script = _script;
    }
    LockedBothComponent.prototype.ngOnInit = function () {
    };
    LockedBothComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-locked-both', ['assets/demo/default/custom/crud/metronic-datatable/locked/both.js']);
    };
    LockedBothComponent = tslib_1.__decorate([
        Component({
            selector: "app-locked-both",
            templateUrl: "./locked-both.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], LockedBothComponent);
    return LockedBothComponent;
}());
export { LockedBothComponent };
//# sourceMappingURL=locked-both.component.js.map