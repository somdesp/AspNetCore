import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExtensionsButtonsComponent } from './extensions-buttons.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ExtensionsButtonsComponent
            }
        ]
    }
];
var ExtensionsButtonsModule = /** @class */ (function () {
    function ExtensionsButtonsModule() {
    }
    ExtensionsButtonsModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ExtensionsButtonsComponent
            ] })
    ], ExtensionsButtonsModule);
    return ExtensionsButtonsModule;
}());
export { ExtensionsButtonsModule };
//# sourceMappingURL=extensions-buttons.module.js.map