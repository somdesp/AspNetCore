import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchOptionsColumnSearchComponent } from './search-options-column-search.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": SearchOptionsColumnSearchComponent
            }
        ]
    }
];
var SearchOptionsColumnSearchModule = /** @class */ (function () {
    function SearchOptionsColumnSearchModule() {
    }
    SearchOptionsColumnSearchModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                SearchOptionsColumnSearchComponent
            ] })
    ], SearchOptionsColumnSearchModule);
    return SearchOptionsColumnSearchModule;
}());
export { SearchOptionsColumnSearchModule };
//# sourceMappingURL=search-options-column-search.module.js.map