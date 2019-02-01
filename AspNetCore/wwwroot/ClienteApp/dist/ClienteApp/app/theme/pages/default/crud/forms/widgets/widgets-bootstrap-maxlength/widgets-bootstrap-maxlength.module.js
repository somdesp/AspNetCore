import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsBootstrapMaxlengthComponent } from './widgets-bootstrap-maxlength.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsBootstrapMaxlengthComponent
            }
        ]
    }
];
var WidgetsBootstrapMaxlengthModule = /** @class */ (function () {
    function WidgetsBootstrapMaxlengthModule() {
    }
    WidgetsBootstrapMaxlengthModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsBootstrapMaxlengthComponent
            ] })
    ], WidgetsBootstrapMaxlengthModule);
    return WidgetsBootstrapMaxlengthModule;
}());
export { WidgetsBootstrapMaxlengthModule };
//# sourceMappingURL=widgets-bootstrap-maxlength.module.js.map