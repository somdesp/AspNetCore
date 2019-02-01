import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ValidationFormWidgetsComponent } from './validation-form-widgets.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ValidationFormWidgetsComponent
            }
        ]
    }
];
var ValidationFormWidgetsModule = /** @class */ (function () {
    function ValidationFormWidgetsModule() {
    }
    ValidationFormWidgetsModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ValidationFormWidgetsComponent
            ] })
    ], ValidationFormWidgetsModule);
    return ValidationFormWidgetsModule;
}());
export { ValidationFormWidgetsModule };
//# sourceMappingURL=validation-form-widgets.module.js.map