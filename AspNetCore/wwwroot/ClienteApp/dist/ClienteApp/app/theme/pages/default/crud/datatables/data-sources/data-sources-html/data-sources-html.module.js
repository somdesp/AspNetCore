import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataSourcesHtmlComponent } from './data-sources-html.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": DataSourcesHtmlComponent
            }
        ]
    }
];
var DataSourcesHtmlModule = /** @class */ (function () {
    function DataSourcesHtmlModule() {
    }
    DataSourcesHtmlModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                DataSourcesHtmlComponent
            ] })
    ], DataSourcesHtmlModule);
    return DataSourcesHtmlModule;
}());
export { DataSourcesHtmlModule };
//# sourceMappingURL=data-sources-html.module.js.map