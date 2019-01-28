import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExtensionsRowgroupComponent } from './extensions-rowgroup.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ExtensionsRowgroupComponent
            }
        ]
    }
];
var ExtensionsRowgroupModule = /** @class */ (function () {
    function ExtensionsRowgroupModule() {
    }
    ExtensionsRowgroupModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ExtensionsRowgroupComponent
            ] })
    ], ExtensionsRowgroupModule);
    return ExtensionsRowgroupModule;
}());
export { ExtensionsRowgroupModule };
//# sourceMappingURL=extensions-rowgroup.module.js.map