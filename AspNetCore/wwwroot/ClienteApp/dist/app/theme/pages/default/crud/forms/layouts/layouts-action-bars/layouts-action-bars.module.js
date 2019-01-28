import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutsActionBarsComponent } from './layouts-action-bars.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": LayoutsActionBarsComponent
            }
        ]
    }
];
var LayoutsActionBarsModule = /** @class */ (function () {
    function LayoutsActionBarsModule() {
    }
    LayoutsActionBarsModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                LayoutsActionBarsComponent
            ] })
    ], LayoutsActionBarsModule);
    return LayoutsActionBarsModule;
}());
export { LayoutsActionBarsModule };
//# sourceMappingURL=layouts-action-bars.module.js.map