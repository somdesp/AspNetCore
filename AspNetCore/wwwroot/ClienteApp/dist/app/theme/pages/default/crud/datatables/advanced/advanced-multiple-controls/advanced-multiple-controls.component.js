import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var AdvancedMultipleControlsComponent = /** @class */ (function () {
    function AdvancedMultipleControlsComponent(_script) {
        this._script = _script;
    }
    AdvancedMultipleControlsComponent.prototype.ngOnInit = function () {
    };
    AdvancedMultipleControlsComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-advanced-multiple-controls', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/advanced/multiple-controls.js']);
    };
    AdvancedMultipleControlsComponent = tslib_1.__decorate([
        Component({
            selector: "app-advanced-multiple-controls",
            templateUrl: "./advanced-multiple-controls.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], AdvancedMultipleControlsComponent);
    return AdvancedMultipleControlsComponent;
}());
export { AdvancedMultipleControlsComponent };
//# sourceMappingURL=advanced-multiple-controls.component.js.map