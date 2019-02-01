import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BasicScrollableComponent = /** @class */ (function () {
    function BasicScrollableComponent(_script) {
        this._script = _script;
    }
    BasicScrollableComponent.prototype.ngOnInit = function () {
    };
    BasicScrollableComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-basic-scrollable', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/basic/scrollable.js']);
    };
    BasicScrollableComponent = tslib_1.__decorate([
        Component({
            selector: "app-basic-scrollable",
            templateUrl: "./basic-scrollable.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BasicScrollableComponent);
    return BasicScrollableComponent;
}());
export { BasicScrollableComponent };
//# sourceMappingURL=basic-scrollable.component.js.map