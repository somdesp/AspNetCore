import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsBootstrapTimepickerComponent } from './widgets-bootstrap-timepicker.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsBootstrapTimepickerComponent
            }
        ]
    }
];
var WidgetsBootstrapTimepickerModule = /** @class */ (function () {
    function WidgetsBootstrapTimepickerModule() {
    }
    WidgetsBootstrapTimepickerModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsBootstrapTimepickerComponent
            ] })
    ], WidgetsBootstrapTimepickerModule);
    return WidgetsBootstrapTimepickerModule;
}());
export { WidgetsBootstrapTimepickerModule };
//# sourceMappingURL=widgets-bootstrap-timepicker.module.js.map