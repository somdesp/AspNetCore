import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BasicBasicComponent = /** @class */ (function () {
    function BasicBasicComponent(_script) {
        this._script = _script;
    }
    BasicBasicComponent.prototype.ngOnInit = function () {
    };
    BasicBasicComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-basic-basic', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/basic/basic.js']);
    };
    BasicBasicComponent = tslib_1.__decorate([
        Component({
            selector: "app-basic-basic",
            templateUrl: "./basic-basic.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BasicBasicComponent);
    return BasicBasicComponent;
}());
export { BasicBasicComponent };
//# sourceMappingURL=basic-basic.component.js.map