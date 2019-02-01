import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ControlsSwitchComponent } from './controls-switch.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ControlsSwitchComponent
            }
        ]
    }
];
var ControlsSwitchModule = /** @class */ (function () {
    function ControlsSwitchModule() {
    }
    ControlsSwitchModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ControlsSwitchComponent
            ] })
    ], ControlsSwitchModule);
    return ControlsSwitchModule;
}());
export { ControlsSwitchModule };
//# sourceMappingURL=controls-switch.module.js.map