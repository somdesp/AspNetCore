import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExtensionsScrollerComponent } from './extensions-scroller.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ExtensionsScrollerComponent
            }
        ]
    }
];
var ExtensionsScrollerModule = /** @class */ (function () {
    function ExtensionsScrollerModule() {
    }
    ExtensionsScrollerModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ExtensionsScrollerComponent
            ] })
    ], ExtensionsScrollerModule);
    return ExtensionsScrollerModule;
}());
export { ExtensionsScrollerModule };
//# sourceMappingURL=extensions-scroller.module.js.map