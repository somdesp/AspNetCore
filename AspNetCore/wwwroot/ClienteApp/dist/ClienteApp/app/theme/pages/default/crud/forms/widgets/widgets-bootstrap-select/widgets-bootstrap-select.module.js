import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsBootstrapSelectComponent } from './widgets-bootstrap-select.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsBootstrapSelectComponent
            }
        ]
    }
];
var WidgetsBootstrapSelectModule = /** @class */ (function () {
    function WidgetsBootstrapSelectModule() {
    }
    WidgetsBootstrapSelectModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsBootstrapSelectComponent
            ] })
    ], WidgetsBootstrapSelectModule);
    return WidgetsBootstrapSelectModule;
}());
export { WidgetsBootstrapSelectModule };
//# sourceMappingURL=widgets-bootstrap-select.module.js.map