import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseRowDetailsComponent } from './base-row-details.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BaseRowDetailsComponent
            }
        ]
    }
];
var BaseRowDetailsModule = /** @class */ (function () {
    function BaseRowDetailsModule() {
    }
    BaseRowDetailsModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BaseRowDetailsComponent
            ] })
    ], BaseRowDetailsModule);
    return BaseRowDetailsModule;
}());
export { BaseRowDetailsModule };
//# sourceMappingURL=base-row-details.module.js.map