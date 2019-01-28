import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BasicPaginationsComponent = /** @class */ (function () {
    function BasicPaginationsComponent(_script) {
        this._script = _script;
    }
    BasicPaginationsComponent.prototype.ngOnInit = function () {
    };
    BasicPaginationsComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-basic-paginations', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/basic/paginations.js']);
    };
    BasicPaginationsComponent = tslib_1.__decorate([
        Component({
            selector: "app-basic-paginations",
            templateUrl: "./basic-paginations.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BasicPaginationsComponent);
    return BasicPaginationsComponent;
}());
export { BasicPaginationsComponent };
//# sourceMappingURL=basic-paginations.component.js.map