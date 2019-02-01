import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsFormRepeaterComponent } from './widgets-form-repeater.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsFormRepeaterComponent
            }
        ]
    }
];
var WidgetsFormRepeaterModule = /** @class */ (function () {
    function WidgetsFormRepeaterModule() {
    }
    WidgetsFormRepeaterModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsFormRepeaterComponent
            ] })
    ], WidgetsFormRepeaterModule);
    return WidgetsFormRepeaterModule;
}());
export { WidgetsFormRepeaterModule };
//# sourceMappingURL=widgets-form-repeater.module.js.map