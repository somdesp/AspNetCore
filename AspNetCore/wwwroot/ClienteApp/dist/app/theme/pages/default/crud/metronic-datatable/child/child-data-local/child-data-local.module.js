import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChildDataLocalComponent } from './child-data-local.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ChildDataLocalComponent
            }
        ]
    }
];
var ChildDataLocalModule = /** @class */ (function () {
    function ChildDataLocalModule() {
    }
    ChildDataLocalModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ChildDataLocalComponent
            ] })
    ], ChildDataLocalModule);
    return ChildDataLocalModule;
}());
export { ChildDataLocalModule };
//# sourceMappingURL=child-data-local.module.js.map