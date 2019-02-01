import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExtensionsSelectComponent } from './extensions-select.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ExtensionsSelectComponent
            }
        ]
    }
];
var ExtensionsSelectModule = /** @class */ (function () {
    function ExtensionsSelectModule() {
    }
    ExtensionsSelectModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ExtensionsSelectComponent
            ] })
    ], ExtensionsSelectModule);
    return ExtensionsSelectModule;
}());
export { ExtensionsSelectModule };
//# sourceMappingURL=extensions-select.module.js.map