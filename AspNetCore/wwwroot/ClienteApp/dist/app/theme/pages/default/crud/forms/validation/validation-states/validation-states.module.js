import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ValidationStatesComponent } from './validation-states.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ValidationStatesComponent
            }
        ]
    }
];
var ValidationStatesModule = /** @class */ (function () {
    function ValidationStatesModule() {
    }
    ValidationStatesModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ValidationStatesComponent
            ] })
    ], ValidationStatesModule);
    return ValidationStatesModule;
}());
export { ValidationStatesModule };
//# sourceMappingURL=validation-states.module.js.map