import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExtensionsRowreorderComponent } from './extensions-rowreorder.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ExtensionsRowreorderComponent
            }
        ]
    }
];
var ExtensionsRowreorderModule = /** @class */ (function () {
    function ExtensionsRowreorderModule() {
    }
    ExtensionsRowreorderModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ExtensionsRowreorderComponent
            ] })
    ], ExtensionsRowreorderModule);
    return ExtensionsRowreorderModule;
}());
export { ExtensionsRowreorderModule };
//# sourceMappingURL=extensions-rowreorder.module.js.map