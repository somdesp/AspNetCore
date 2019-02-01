import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ControlsBaseComponent } from './controls-base.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ControlsBaseComponent
            }
        ]
    }
];
var ControlsBaseModule = /** @class */ (function () {
    function ControlsBaseModule() {
    }
    ControlsBaseModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ControlsBaseComponent
            ] })
    ], ControlsBaseModule);
    return ControlsBaseModule;
}());
export { ControlsBaseModule };
//# sourceMappingURL=controls-base.module.js.map