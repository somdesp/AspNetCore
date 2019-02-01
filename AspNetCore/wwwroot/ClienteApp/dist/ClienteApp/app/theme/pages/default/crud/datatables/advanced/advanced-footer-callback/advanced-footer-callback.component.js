import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var AdvancedFooterCallbackComponent = /** @class */ (function () {
    function AdvancedFooterCallbackComponent(_script) {
        this._script = _script;
    }
    AdvancedFooterCallbackComponent.prototype.ngOnInit = function () {
    };
    AdvancedFooterCallbackComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-advanced-footer-callback', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/advanced/footer-callback.js']);
    };
    AdvancedFooterCallbackComponent = tslib_1.__decorate([
        Component({
            selector: "app-advanced-footer-callback",
            templateUrl: "./advanced-footer-callback.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], AdvancedFooterCallbackComponent);
    return AdvancedFooterCallbackComponent;
}());
export { AdvancedFooterCallbackComponent };
//# sourceMappingURL=advanced-footer-callback.component.js.map