import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ControlsOptionComponent } from './controls-option.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ControlsOptionComponent
            }
        ]
    }
];
var ControlsOptionModule = /** @class */ (function () {
    function ControlsOptionModule() {
    }
    ControlsOptionModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ControlsOptionComponent
            ] })
    ], ControlsOptionModule);
    return ControlsOptionModule;
}());
export { ControlsOptionModule };
//# sourceMappingURL=controls-option.module.js.map