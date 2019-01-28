import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var DataSourcesAjaxClientSideComponent = /** @class */ (function () {
    function DataSourcesAjaxClientSideComponent(_script) {
        this._script = _script;
    }
    DataSourcesAjaxClientSideComponent.prototype.ngOnInit = function () {
    };
    DataSourcesAjaxClientSideComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-data-sources-ajax-client-side', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/data-sources/ajax-client-side.js']);
    };
    DataSourcesAjaxClientSideComponent = tslib_1.__decorate([
        Component({
            selector: "app-data-sources-ajax-client-side",
            templateUrl: "./data-sources-ajax-client-side.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], DataSourcesAjaxClientSideComponent);
    return DataSourcesAjaxClientSideComponent;
}());
export { DataSourcesAjaxClientSideComponent };
//# sourceMappingURL=data-sources-ajax-client-side.component.js.map