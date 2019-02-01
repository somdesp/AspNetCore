import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasicBasicComponent } from './basic-basic.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BasicBasicComponent
            }
        ]
    }
];
var BasicBasicModule = /** @class */ (function () {
    function BasicBasicModule() {
    }
    BasicBasicModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BasicBasicComponent
            ] })
    ], BasicBasicModule);
    return BasicBasicModule;
}());
export { BasicBasicModule };
//# sourceMappingURL=basic-basic.module.js.map