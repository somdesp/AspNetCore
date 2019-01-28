import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LockedLeftComponent } from './locked-left.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": LockedLeftComponent
            }
        ]
    }
];
var LockedLeftModule = /** @class */ (function () {
    function LockedLeftModule() {
    }
    LockedLeftModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                LockedLeftComponent
            ] })
    ], LockedLeftModule);
    return LockedLeftModule;
}());
export { LockedLeftModule };
//# sourceMappingURL=locked-left.module.js.map