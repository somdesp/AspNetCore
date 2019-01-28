import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ValidationFormControlsComponent } from './validation-form-controls.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ValidationFormControlsComponent
            }
        ]
    }
];
var ValidationFormControlsModule = /** @class */ (function () {
    function ValidationFormControlsModule() {
    }
    ValidationFormControlsModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ValidationFormControlsComponent
            ] })
    ], ValidationFormControlsModule);
    return ValidationFormControlsModule;
}());
export { ValidationFormControlsModule };
//# sourceMappingURL=validation-form-controls.module.js.map