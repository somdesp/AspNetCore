import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var SearchOptionsColumnSearchComponent = /** @class */ (function () {
    function SearchOptionsColumnSearchComponent(_script) {
        this._script = _script;
    }
    SearchOptionsColumnSearchComponent.prototype.ngOnInit = function () {
    };
    SearchOptionsColumnSearchComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-search-options-column-search', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/search-options/column-search.js']);
    };
    SearchOptionsColumnSearchComponent = tslib_1.__decorate([
        Component({
            selector: "app-search-options-column-search",
            templateUrl: "./search-options-column-search.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], SearchOptionsColumnSearchComponent);
    return SearchOptionsColumnSearchComponent;
}());
export { SearchOptionsColumnSearchComponent };
//# sourceMappingURL=search-options-column-search.component.js.map