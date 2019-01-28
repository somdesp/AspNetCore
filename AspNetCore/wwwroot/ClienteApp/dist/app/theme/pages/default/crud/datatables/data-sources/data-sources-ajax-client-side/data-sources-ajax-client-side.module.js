import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataSourcesAjaxClientSideComponent } from './data-sources-ajax-client-side.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": DataSourcesAjaxClientSideComponent
            }
        ]
    }
];
var DataSourcesAjaxClientSideModule = /** @class */ (function () {
    function DataSourcesAjaxClientSideModule() {
    }
    DataSourcesAjaxClientSideModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                DataSourcesAjaxClientSideComponent
            ] })
    ], DataSourcesAjaxClientSideModule);
    return DataSourcesAjaxClientSideModule;
}());
export { DataSourcesAjaxClientSideModule };
//# sourceMappingURL=data-sources-ajax-client-side.module.js.map