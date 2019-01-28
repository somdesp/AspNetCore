import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExtensionsResponsiveComponent } from './extensions-responsive.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ExtensionsResponsiveComponent
            }
        ]
    }
];
var ExtensionsResponsiveModule = /** @class */ (function () {
    function ExtensionsResponsiveModule() {
    }
    ExtensionsResponsiveModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ExtensionsResponsiveComponent
            ] })
    ], ExtensionsResponsiveModule);
    return ExtensionsResponsiveModule;
}());
export { ExtensionsResponsiveModule };
//# sourceMappingURL=extensions-responsive.module.js.map