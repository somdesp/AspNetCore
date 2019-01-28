import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseColumnWidthComponent } from './base-column-width.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BaseColumnWidthComponent
            }
        ]
    }
];
var BaseColumnWidthModule = /** @class */ (function () {
    function BaseColumnWidthModule() {
    }
    BaseColumnWidthModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BaseColumnWidthComponent
            ] })
    ], BaseColumnWidthModule);
    return BaseColumnWidthModule;
}());
export { BaseColumnWidthModule };
//# sourceMappingURL=base-column-width.module.js.map