import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseAutoColumnHideComponent } from './base-auto-column-hide.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BaseAutoColumnHideComponent
            }
        ]
    }
];
var BaseAutoColumnHideModule = /** @class */ (function () {
    function BaseAutoColumnHideModule() {
    }
    BaseAutoColumnHideModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BaseAutoColumnHideComponent
            ] })
    ], BaseAutoColumnHideModule);
    return BaseAutoColumnHideModule;
}());
export { BaseAutoColumnHideModule };
//# sourceMappingURL=base-auto-column-hide.module.js.map