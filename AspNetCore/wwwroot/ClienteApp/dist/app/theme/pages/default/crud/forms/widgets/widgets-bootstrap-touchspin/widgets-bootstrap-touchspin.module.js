import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsBootstrapTouchspinComponent } from './widgets-bootstrap-touchspin.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsBootstrapTouchspinComponent
            }
        ]
    }
];
var WidgetsBootstrapTouchspinModule = /** @class */ (function () {
    function WidgetsBootstrapTouchspinModule() {
    }
    WidgetsBootstrapTouchspinModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsBootstrapTouchspinComponent
            ] })
    ], WidgetsBootstrapTouchspinModule);
    return WidgetsBootstrapTouchspinModule;
}());
export { WidgetsBootstrapTouchspinModule };
//# sourceMappingURL=widgets-bootstrap-touchspin.module.js.map