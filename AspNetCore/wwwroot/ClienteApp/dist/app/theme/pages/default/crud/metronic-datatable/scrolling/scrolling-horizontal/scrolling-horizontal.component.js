import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ScrollingHorizontalComponent = /** @class */ (function () {
    function ScrollingHorizontalComponent(_script) {
        this._script = _script;
    }
    ScrollingHorizontalComponent.prototype.ngOnInit = function () {
    };
    ScrollingHorizontalComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-scrolling-horizontal', ['assets/demo/default/custom/crud/metronic-datatable/scrolling/horizontal.js']);
    };
    ScrollingHorizontalComponent = tslib_1.__decorate([
        Component({
            selector: "app-scrolling-horizontal",
            templateUrl: "./scrolling-horizontal.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ScrollingHorizontalComponent);
    return ScrollingHorizontalComponent;
}());
export { ScrollingHorizontalComponent };
//# sourceMappingURL=scrolling-horizontal.component.js.map