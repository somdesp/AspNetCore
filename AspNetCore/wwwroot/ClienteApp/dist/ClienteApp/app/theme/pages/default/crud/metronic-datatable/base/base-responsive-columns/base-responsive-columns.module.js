import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseResponsiveColumnsComponent } from './base-responsive-columns.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BaseResponsiveColumnsComponent
            }
        ]
    }
];
var BaseResponsiveColumnsModule = /** @class */ (function () {
    function BaseResponsiveColumnsModule() {
    }
    BaseResponsiveColumnsModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BaseResponsiveColumnsComponent
            ] })
    ], BaseResponsiveColumnsModule);
    return BaseResponsiveColumnsModule;
}());
export { BaseResponsiveColumnsModule };
//# sourceMappingURL=base-responsive-columns.module.js.map