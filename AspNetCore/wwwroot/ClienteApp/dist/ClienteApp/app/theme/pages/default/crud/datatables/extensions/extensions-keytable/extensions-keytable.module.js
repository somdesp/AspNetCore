import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExtensionsKeytableComponent } from './extensions-keytable.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ExtensionsKeytableComponent
            }
        ]
    }
];
var ExtensionsKeytableModule = /** @class */ (function () {
    function ExtensionsKeytableModule() {
    }
    ExtensionsKeytableModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ExtensionsKeytableComponent
            ] })
    ], ExtensionsKeytableModule);
    return ExtensionsKeytableModule;
}());
export { ExtensionsKeytableModule };
//# sourceMappingURL=extensions-keytable.module.js.map