import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var SearchOptionsAdvancedSearchComponent = /** @class */ (function () {
    function SearchOptionsAdvancedSearchComponent(_script) {
        this._script = _script;
    }
    SearchOptionsAdvancedSearchComponent.prototype.ngOnInit = function () {
    };
    SearchOptionsAdvancedSearchComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-search-options-advanced-search', ['assets/vendors/custom/datatables/datatables.bundle.js',
            'assets/demo/default/custom/crud/datatables/search-options/advanced-search.js']);
    };
    SearchOptionsAdvancedSearchComponent = tslib_1.__decorate([
        Component({
            selector: "app-search-options-advanced-search",
            templateUrl: "./search-options-advanced-search.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], SearchOptionsAdvancedSearchComponent);
    return SearchOptionsAdvancedSearchComponent;
}());
export { SearchOptionsAdvancedSearchComponent };
//# sourceMappingURL=search-options-advanced-search.component.js.map