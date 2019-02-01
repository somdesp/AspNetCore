import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BaseHtmlTableComponent = /** @class */ (function () {
    function BaseHtmlTableComponent(_script) {
        this._script = _script;
    }
    BaseHtmlTableComponent.prototype.ngOnInit = function () {
    };
    BaseHtmlTableComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-base-html-table', ['assets/demo/default/custom/crud/metronic-datatable/base/html-table.js']);
    };
    BaseHtmlTableComponent = tslib_1.__decorate([
        Component({
            selector: "app-base-html-table",
            templateUrl: "./base-html-table.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BaseHtmlTableComponent);
    return BaseHtmlTableComponent;
}());
export { BaseHtmlTableComponent };
//# sourceMappingURL=base-html-table.component.js.map