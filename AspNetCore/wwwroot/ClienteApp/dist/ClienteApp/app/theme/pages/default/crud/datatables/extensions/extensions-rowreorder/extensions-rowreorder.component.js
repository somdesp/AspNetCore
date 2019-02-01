import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ExtensionsRowreorderComponent = /** @class */ (function () {
    function ExtensionsRowreorderComponent(_script) {
        this._script = _script;
    }
    ExtensionsRowreorderComponent.prototype.ngOnInit = function () {
    };
    ExtensionsRowreorderComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-extensions-rowreorder', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/extensions/rowreorder.js']);
    };
    ExtensionsRowreorderComponent = tslib_1.__decorate([
        Component({
            selector: "app-extensions-rowreorder",
            templateUrl: "./extensions-rowreorder.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ExtensionsRowreorderComponent);
    return ExtensionsRowreorderComponent;
}());
export { ExtensionsRowreorderComponent };
//# sourceMappingURL=extensions-rowreorder.component.js.map