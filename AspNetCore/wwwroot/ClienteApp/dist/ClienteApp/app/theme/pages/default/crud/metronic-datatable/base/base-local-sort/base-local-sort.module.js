import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseLocalSortComponent } from './base-local-sort.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BaseLocalSortComponent
            }
        ]
    }
];
var BaseLocalSortModule = /** @class */ (function () {
    function BaseLocalSortModule() {
    }
    BaseLocalSortModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BaseLocalSortComponent
            ] })
    ], BaseLocalSortModule);
    return BaseLocalSortModule;
}());
export { BaseLocalSortModule };
//# sourceMappingURL=base-local-sort.module.js.map