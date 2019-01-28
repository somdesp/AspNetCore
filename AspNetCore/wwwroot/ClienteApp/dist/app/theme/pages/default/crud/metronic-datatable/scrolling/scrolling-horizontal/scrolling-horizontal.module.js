import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollingHorizontalComponent } from './scrolling-horizontal.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ScrollingHorizontalComponent
            }
        ]
    }
];
var ScrollingHorizontalModule = /** @class */ (function () {
    function ScrollingHorizontalModule() {
    }
    ScrollingHorizontalModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ScrollingHorizontalComponent
            ] })
    ], ScrollingHorizontalModule);
    return ScrollingHorizontalModule;
}());
export { ScrollingHorizontalModule };
//# sourceMappingURL=scrolling-horizontal.module.js.map