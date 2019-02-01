import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var DataSourcesAjaxServerSideComponent = /** @class */ (function () {
    function DataSourcesAjaxServerSideComponent(_script) {
        this._script = _script;
    }
    DataSourcesAjaxServerSideComponent.prototype.ngOnInit = function () {
    };
    DataSourcesAjaxServerSideComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-data-sources-ajax-server-side', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/data-sources/ajax-server-side.js']);
    };
    DataSourcesAjaxServerSideComponent = tslib_1.__decorate([
        Component({
            selector: "app-data-sources-ajax-server-side",
            templateUrl: "./data-sources-ajax-server-side.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], DataSourcesAjaxServerSideComponent);
    return DataSourcesAjaxServerSideComponent;
}());
export { DataSourcesAjaxServerSideComponent };
//# sourceMappingURL=data-sources-ajax-server-side.component.js.map