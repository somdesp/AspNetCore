import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ExtensionsRowgroupComponent = /** @class */ (function () {
    function ExtensionsRowgroupComponent(_script) {
        this._script = _script;
    }
    ExtensionsRowgroupComponent.prototype.ngOnInit = function () {
    };
    ExtensionsRowgroupComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-extensions-rowgroup', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/extensions/rowgroup.js']);
    };
    ExtensionsRowgroupComponent = tslib_1.__decorate([
        Component({
            selector: "app-extensions-rowgroup",
            templateUrl: "./extensions-rowgroup.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ExtensionsRowgroupComponent);
    return ExtensionsRowgroupComponent;
}());
export { ExtensionsRowgroupComponent };
//# sourceMappingURL=extensions-rowgroup.component.js.map