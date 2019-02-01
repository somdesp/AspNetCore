import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var AdvancedColumnVisibilityComponent = /** @class */ (function () {
    function AdvancedColumnVisibilityComponent(_script) {
        this._script = _script;
    }
    AdvancedColumnVisibilityComponent.prototype.ngOnInit = function () {
    };
    AdvancedColumnVisibilityComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-advanced-column-visibility', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/advanced/column-visibility.js']);
    };
    AdvancedColumnVisibilityComponent = tslib_1.__decorate([
        Component({
            selector: "app-advanced-column-visibility",
            templateUrl: "./advanced-column-visibility.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], AdvancedColumnVisibilityComponent);
    return AdvancedColumnVisibilityComponent;
}());
export { AdvancedColumnVisibilityComponent };
//# sourceMappingURL=advanced-column-visibility.component.js.map