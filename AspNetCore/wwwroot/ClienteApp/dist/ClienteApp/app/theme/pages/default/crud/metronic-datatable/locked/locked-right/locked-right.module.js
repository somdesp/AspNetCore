import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LockedRightComponent } from './locked-right.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": LockedRightComponent
            }
        ]
    }
];
var LockedRightModule = /** @class */ (function () {
    function LockedRightModule() {
    }
    LockedRightModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                LockedRightComponent
            ] })
    ], LockedRightModule);
    return LockedRightModule;
}());
export { LockedRightModule };
//# sourceMappingURL=locked-right.module.js.map