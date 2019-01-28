import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ScrollingBothComponent = /** @class */ (function () {
    function ScrollingBothComponent(_script) {
        this._script = _script;
    }
    ScrollingBothComponent.prototype.ngOnInit = function () {
    };
    ScrollingBothComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-scrolling-both', ['assets/demo/default/custom/crud/metronic-datatable/scrolling/both.js']);
    };
    ScrollingBothComponent = tslib_1.__decorate([
        Component({
            selector: "app-scrolling-both",
            templateUrl: "./scrolling-both.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ScrollingBothComponent);
    return ScrollingBothComponent;
}());
export { ScrollingBothComponent };
//# sourceMappingURL=scrolling-both.component.js.map