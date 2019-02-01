import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ExtensionsScrollerComponent = /** @class */ (function () {
    function ExtensionsScrollerComponent(_script) {
        this._script = _script;
    }
    ExtensionsScrollerComponent.prototype.ngOnInit = function () {
    };
    ExtensionsScrollerComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-extensions-scroller', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/extensions/scroller.js']);
    };
    ExtensionsScrollerComponent = tslib_1.__decorate([
        Component({
            selector: "app-extensions-scroller",
            templateUrl: "./extensions-scroller.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ExtensionsScrollerComponent);
    return ExtensionsScrollerComponent;
}());
export { ExtensionsScrollerComponent };
//# sourceMappingURL=extensions-scroller.component.js.map