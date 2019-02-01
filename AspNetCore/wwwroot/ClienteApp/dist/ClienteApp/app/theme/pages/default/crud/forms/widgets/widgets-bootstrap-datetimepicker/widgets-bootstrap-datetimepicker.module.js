import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsBootstrapDatetimepickerComponent } from './widgets-bootstrap-datetimepicker.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsBootstrapDatetimepickerComponent
            }
        ]
    }
];
var WidgetsBootstrapDatetimepickerModule = /** @class */ (function () {
    function WidgetsBootstrapDatetimepickerModule() {
    }
    WidgetsBootstrapDatetimepickerModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsBootstrapDatetimepickerComponent
            ] })
    ], WidgetsBootstrapDatetimepickerModule);
    return WidgetsBootstrapDatetimepickerModule;
}());
export { WidgetsBootstrapDatetimepickerModule };
//# sourceMappingURL=widgets-bootstrap-datetimepicker.module.js.map