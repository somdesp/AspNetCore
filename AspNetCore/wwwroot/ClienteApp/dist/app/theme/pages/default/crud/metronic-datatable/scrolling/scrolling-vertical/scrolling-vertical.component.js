import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ScrollingVerticalComponent = /** @class */ (function () {
    function ScrollingVerticalComponent(_script) {
        this._script = _script;
    }
    ScrollingVerticalComponent.prototype.ngOnInit = function () {
    };
    ScrollingVerticalComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-scrolling-vertical', ['assets/demo/default/custom/crud/metronic-datatable/scrolling/vertical.js']);
    };
    ScrollingVerticalComponent = tslib_1.__decorate([
        Component({
            selector: "app-scrolling-vertical",
            templateUrl: "./scrolling-vertical.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ScrollingVerticalComponent);
    return ScrollingVerticalComponent;
}());
export { ScrollingVerticalComponent };
//# sourceMappingURL=scrolling-vertical.component.js.map