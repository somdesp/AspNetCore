import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutsStickyActionBarComponent } from './layouts-sticky-action-bar.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": LayoutsStickyActionBarComponent
            }
        ]
    }
];
var LayoutsStickyActionBarModule = /** @class */ (function () {
    function LayoutsStickyActionBarModule() {
    }
    LayoutsStickyActionBarModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                LayoutsStickyActionBarComponent
            ] })
    ], LayoutsStickyActionBarModule);
    return LayoutsStickyActionBarModule;
}());
export { LayoutsStickyActionBarModule };
//# sourceMappingURL=layouts-sticky-action-bar.module.js.map