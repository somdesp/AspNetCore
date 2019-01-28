import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BasicHeadersComponent = /** @class */ (function () {
    function BasicHeadersComponent(_script) {
        this._script = _script;
    }
    BasicHeadersComponent.prototype.ngOnInit = function () {
    };
    BasicHeadersComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-basic-headers', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/basic/headers.js']);
    };
    BasicHeadersComponent = tslib_1.__decorate([
        Component({
            selector: "app-basic-headers",
            templateUrl: "./basic-headers.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BasicHeadersComponent);
    return BasicHeadersComponent;
}());
export { BasicHeadersComponent };
//# sourceMappingURL=basic-headers.component.js.map