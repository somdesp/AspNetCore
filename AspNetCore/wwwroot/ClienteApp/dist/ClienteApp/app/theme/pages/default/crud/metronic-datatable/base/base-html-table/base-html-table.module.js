import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseHtmlTableComponent } from './base-html-table.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BaseHtmlTableComponent
            }
        ]
    }
];
var BaseHtmlTableModule = /** @class */ (function () {
    function BaseHtmlTableModule() {
    }
    BaseHtmlTableModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BaseHtmlTableComponent
            ] })
    ], BaseHtmlTableModule);
    return BaseHtmlTableModule;
}());
export { BaseHtmlTableModule };
//# sourceMappingURL=base-html-table.module.js.map