import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchOptionsAdvancedSearchComponent } from './search-options-advanced-search.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": SearchOptionsAdvancedSearchComponent
            }
        ]
    }
];
var SearchOptionsAdvancedSearchModule = /** @class */ (function () {
    function SearchOptionsAdvancedSearchModule() {
    }
    SearchOptionsAdvancedSearchModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                SearchOptionsAdvancedSearchComponent
            ] })
    ], SearchOptionsAdvancedSearchModule);
    return SearchOptionsAdvancedSearchModule;
}());
export { SearchOptionsAdvancedSearchModule };
//# sourceMappingURL=search-options-advanced-search.module.js.map