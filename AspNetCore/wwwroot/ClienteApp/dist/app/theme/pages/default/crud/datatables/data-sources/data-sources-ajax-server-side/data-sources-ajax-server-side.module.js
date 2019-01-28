import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataSourcesAjaxServerSideComponent } from './data-sources-ajax-server-side.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": DataSourcesAjaxServerSideComponent
            }
        ]
    }
];
var DataSourcesAjaxServerSideModule = /** @class */ (function () {
    function DataSourcesAjaxServerSideModule() {
    }
    DataSourcesAjaxServerSideModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                DataSourcesAjaxServerSideComponent
            ] })
    ], DataSourcesAjaxServerSideModule);
    return DataSourcesAjaxServerSideModule;
}());
export { DataSourcesAjaxServerSideModule };
//# sourceMappingURL=data-sources-ajax-server-side.module.js.map