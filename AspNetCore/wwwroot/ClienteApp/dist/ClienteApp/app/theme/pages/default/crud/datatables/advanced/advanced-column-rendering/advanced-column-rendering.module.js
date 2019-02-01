import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdvancedColumnRenderingComponent } from './advanced-column-rendering.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": AdvancedColumnRenderingComponent
            }
        ]
    }
];
var AdvancedColumnRenderingModule = /** @class */ (function () {
    function AdvancedColumnRenderingModule() {
    }
    AdvancedColumnRenderingModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                AdvancedColumnRenderingComponent
            ] })
    ], AdvancedColumnRenderingModule);
    return AdvancedColumnRenderingModule;
}());
export { AdvancedColumnRenderingModule };
//# sourceMappingURL=advanced-column-rendering.module.js.map