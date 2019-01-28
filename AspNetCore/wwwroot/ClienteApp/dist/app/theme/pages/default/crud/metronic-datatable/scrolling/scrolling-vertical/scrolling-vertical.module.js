import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollingVerticalComponent } from './scrolling-vertical.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ScrollingVerticalComponent
            }
        ]
    }
];
var ScrollingVerticalModule = /** @class */ (function () {
    function ScrollingVerticalModule() {
    }
    ScrollingVerticalModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ScrollingVerticalComponent
            ] })
    ], ScrollingVerticalModule);
    return ScrollingVerticalModule;
}());
export { ScrollingVerticalModule };
//# sourceMappingURL=scrolling-vertical.module.js.map