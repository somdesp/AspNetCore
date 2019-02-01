import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WizardWizard4Component } from './wizard-wizard-4.component';
import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WizardWizard4Component
            }
        ]
    }
];
var WizardWizard4Module = /** @class */ (function () {
    function WizardWizard4Module() {
    }
    WizardWizard4Module = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WizardWizard4Component
            ] })
    ], WizardWizard4Module);
    return WizardWizard4Module;
}());
export { WizardWizard4Module };
//# sourceMappingURL=wizard-wizard-4.module.js.map