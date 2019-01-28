import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseDataLocalComponent } from './base-data-local.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BaseDataLocalComponent
            }
        ]
    }
];
var BaseDataLocalModule = /** @class */ (function () {
    function BaseDataLocalModule() {
    }
    BaseDataLocalModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BaseDataLocalComponent
            ] })
    ], BaseDataLocalModule);
    return BaseDataLocalModule;
}());
export { BaseDataLocalModule };
//# sourceMappingURL=base-data-local.module.js.map