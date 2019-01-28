import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var DataSourcesJavascriptComponent = /** @class */ (function () {
    function DataSourcesJavascriptComponent(_script) {
        this._script = _script;
    }
    DataSourcesJavascriptComponent.prototype.ngOnInit = function () {
    };
    DataSourcesJavascriptComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-data-sources-javascript', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/data-sources/javascript.js']);
    };
    DataSourcesJavascriptComponent = tslib_1.__decorate([
        Component({
            selector: "app-data-sources-javascript",
            templateUrl: "./data-sources-javascript.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], DataSourcesJavascriptComponent);
    return DataSourcesJavascriptComponent;
}());
export { DataSourcesJavascriptComponent };
//# sourceMappingURL=data-sources-javascript.component.js.map