import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasicPaginationsComponent } from './basic-paginations.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BasicPaginationsComponent
            }
        ]
    }
];
var BasicPaginationsModule = /** @class */ (function () {
    function BasicPaginationsModule() {
    }
    BasicPaginationsModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BasicPaginationsComponent
            ] })
    ], BasicPaginationsModule);
    return BasicPaginationsModule;
}());
export { BasicPaginationsModule };
//# sourceMappingURL=basic-paginations.module.js.map