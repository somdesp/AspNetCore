import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LockedBothComponent } from './locked-both.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": LockedBothComponent
            }
        ]
    }
];
var LockedBothModule = /** @class */ (function () {
    function LockedBothModule() {
    }
    LockedBothModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                LockedBothComponent
            ] })
    ], LockedBothModule);
    return LockedBothModule;
}());
export { LockedBothModule };
//# sourceMappingURL=locked-both.module.js.map