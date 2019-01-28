import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsBootstrapSwitchComponent } from './widgets-bootstrap-switch.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsBootstrapSwitchComponent
            }
        ]
    }
];
var WidgetsBootstrapSwitchModule = /** @class */ (function () {
    function WidgetsBootstrapSwitchModule() {
    }
    WidgetsBootstrapSwitchModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsBootstrapSwitchComponent
            ] })
    ], WidgetsBootstrapSwitchModule);
    return WidgetsBootstrapSwitchModule;
}());
export { WidgetsBootstrapSwitchModule };
//# sourceMappingURL=widgets-bootstrap-switch.module.js.map