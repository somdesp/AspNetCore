import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var LockedHtmlTableComponent = /** @class */ (function () {
    function LockedHtmlTableComponent(_script) {
        this._script = _script;
    }
    LockedHtmlTableComponent.prototype.ngOnInit = function () {
    };
    LockedHtmlTableComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-locked-html-table', ['assets/demo/default/custom/crud/metronic-datatable/locked/html-table.js']);
    };
    LockedHtmlTableComponent = tslib_1.__decorate([
        Component({
            selector: "app-locked-html-table",
            templateUrl: "./locked-html-table.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], LockedHtmlTableComponent);
    return LockedHtmlTableComponent;
}());
export { LockedHtmlTableComponent };
//# sourceMappingURL=locked-html-table.component.js.map