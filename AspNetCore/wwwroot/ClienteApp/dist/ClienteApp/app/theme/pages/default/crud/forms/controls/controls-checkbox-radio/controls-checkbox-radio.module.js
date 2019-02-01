import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ControlsCheckboxRadioComponent } from './controls-checkbox-radio.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ControlsCheckboxRadioComponent
            }
        ]
    }
];
var ControlsCheckboxRadioModule = /** @class */ (function () {
    function ControlsCheckboxRadioModule() {
    }
    ControlsCheckboxRadioModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ControlsCheckboxRadioComponent
            ] })
    ], ControlsCheckboxRadioModule);
    return ControlsCheckboxRadioModule;
}());
export { ControlsCheckboxRadioModule };
//# sourceMappingURL=controls-checkbox-radio.module.js.map