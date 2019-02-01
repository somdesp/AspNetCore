import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var DataSourcesHtmlComponent = /** @class */ (function () {
    function DataSourcesHtmlComponent(_script) {
        this._script = _script;
    }
    DataSourcesHtmlComponent.prototype.ngOnInit = function () {
    };
    DataSourcesHtmlComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-data-sources-html', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/data-sources/html.js']);
    };
    DataSourcesHtmlComponent = tslib_1.__decorate([
        Component({
            selector: "app-data-sources-html",
            templateUrl: "./data-sources-html.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], DataSourcesHtmlComponent);
    return DataSourcesHtmlComponent;
}());
export { DataSourcesHtmlComponent };
//# sourceMappingURL=data-sources-html.component.js.map