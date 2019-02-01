import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasicHeadersComponent } from './basic-headers.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BasicHeadersComponent
            }
        ]
    }
];
var BasicHeadersModule = /** @class */ (function () {
    function BasicHeadersModule() {
    }
    BasicHeadersModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BasicHeadersComponent
            ] })
    ], BasicHeadersModule);
    return BasicHeadersModule;
}());
export { BasicHeadersModule };
//# sourceMappingURL=basic-headers.module.js.map