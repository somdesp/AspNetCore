import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasicScrollableComponent } from './basic-scrollable.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BasicScrollableComponent
            }
        ]
    }
];
var BasicScrollableModule = /** @class */ (function () {
    function BasicScrollableModule() {
    }
    BasicScrollableModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BasicScrollableComponent
            ] })
    ], BasicScrollableModule);
    return BasicScrollableModule;
}());
export { BasicScrollableModule };
//# sourceMappingURL=basic-scrollable.module.js.map