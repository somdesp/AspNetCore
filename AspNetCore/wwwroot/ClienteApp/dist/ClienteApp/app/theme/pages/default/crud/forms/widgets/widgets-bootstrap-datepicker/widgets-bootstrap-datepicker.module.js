import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsBootstrapDatepickerComponent } from './widgets-bootstrap-datepicker.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsBootstrapDatepickerComponent
            }
        ]
    }
];
var WidgetsBootstrapDatepickerModule = /** @class */ (function () {
    function WidgetsBootstrapDatepickerModule() {
    }
    WidgetsBootstrapDatepickerModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsBootstrapDatepickerComponent
            ] })
    ], WidgetsBootstrapDatepickerModule);
    return WidgetsBootstrapDatepickerModule;
}());
export { WidgetsBootstrapDatepickerModule };
//# sourceMappingURL=widgets-bootstrap-datepicker.module.js.map