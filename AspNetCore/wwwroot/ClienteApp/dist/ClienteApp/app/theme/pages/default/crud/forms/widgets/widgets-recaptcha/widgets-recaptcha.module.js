import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsRecaptchaComponent } from './widgets-recaptcha.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsRecaptchaComponent
            }
        ]
    }
];
var WidgetsRecaptchaModule = /** @class */ (function () {
    function WidgetsRecaptchaModule() {
    }
    WidgetsRecaptchaModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsRecaptchaComponent
            ] })
    ], WidgetsRecaptchaModule);
    return WidgetsRecaptchaModule;
}());
export { WidgetsRecaptchaModule };
//# sourceMappingURL=widgets-recaptcha.module.js.map