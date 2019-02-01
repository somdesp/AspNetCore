import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataSourcesJavascriptComponent } from './data-sources-javascript.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": DataSourcesJavascriptComponent
            }
        ]
    }
];
var DataSourcesJavascriptModule = /** @class */ (function () {
    function DataSourcesJavascriptModule() {
    }
    DataSourcesJavascriptModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                DataSourcesJavascriptComponent
            ] })
    ], DataSourcesJavascriptModule);
    return DataSourcesJavascriptModule;
}());
export { DataSourcesJavascriptModule };
//# sourceMappingURL=data-sources-javascript.module.js.map