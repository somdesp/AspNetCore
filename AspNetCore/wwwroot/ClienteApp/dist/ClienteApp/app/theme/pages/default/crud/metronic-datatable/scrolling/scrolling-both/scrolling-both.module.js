import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollingBothComponent } from './scrolling-both.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ScrollingBothComponent
            }
        ]
    }
];
var ScrollingBothModule = /** @class */ (function () {
    function ScrollingBothModule() {
    }
    ScrollingBothModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ScrollingBothComponent
            ] })
    ], ScrollingBothModule);
    return ScrollingBothModule;
}());
export { ScrollingBothModule };
//# sourceMappingURL=scrolling-both.module.js.map