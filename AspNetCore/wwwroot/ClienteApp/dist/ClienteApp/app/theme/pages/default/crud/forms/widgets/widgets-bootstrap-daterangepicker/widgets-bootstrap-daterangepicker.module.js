import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsBootstrapDaterangepickerComponent } from './widgets-bootstrap-daterangepicker.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsBootstrapDaterangepickerComponent
            }
        ]
    }
];
var WidgetsBootstrapDaterangepickerModule = /** @class */ (function () {
    function WidgetsBootstrapDaterangepickerModule() {
    }
    WidgetsBootstrapDaterangepickerModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsBootstrapDaterangepickerComponent
            ] })
    ], WidgetsBootstrapDaterangepickerModule);
    return WidgetsBootstrapDaterangepickerModule;
}());
export { WidgetsBootstrapDaterangepickerModule };
//# sourceMappingURL=widgets-bootstrap-daterangepicker.module.js.map