import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseColumnRenderingComponent } from './base-column-rendering.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BaseColumnRenderingComponent
            }
        ]
    }
];
var BaseColumnRenderingModule = /** @class */ (function () {
    function BaseColumnRenderingModule() {
    }
    BaseColumnRenderingModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BaseColumnRenderingComponent
            ] })
    ], BaseColumnRenderingModule);
    return BaseColumnRenderingModule;
}());
export { BaseColumnRenderingModule };
//# sourceMappingURL=base-column-rendering.module.js.map