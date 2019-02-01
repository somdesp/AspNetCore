import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ControlsInputGroupComponent } from './controls-input-group.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ControlsInputGroupComponent
            }
        ]
    }
];
var ControlsInputGroupModule = /** @class */ (function () {
    function ControlsInputGroupModule() {
    }
    ControlsInputGroupModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ControlsInputGroupComponent
            ] })
    ], ControlsInputGroupModule);
    return ControlsInputGroupModule;
}());
export { ControlsInputGroupModule };
//# sourceMappingURL=controls-input-group.module.js.map