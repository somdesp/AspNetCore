import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExtensionsColreorderComponent } from './extensions-colreorder.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ExtensionsColreorderComponent
            }
        ]
    }
];
var ExtensionsColreorderModule = /** @class */ (function () {
    function ExtensionsColreorderModule() {
    }
    ExtensionsColreorderModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ExtensionsColreorderComponent
            ] })
    ], ExtensionsColreorderModule);
    return ExtensionsColreorderModule;
}());
export { ExtensionsColreorderModule };
//# sourceMappingURL=extensions-colreorder.module.js.map