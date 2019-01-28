import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WizardWizard5Component } from './wizard-wizard-5.component';
import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WizardWizard5Component
            }
        ]
    }
];
var WizardWizard5Module = /** @class */ (function () {
    function WizardWizard5Module() {
    }
    WizardWizard5Module = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WizardWizard5Component
            ] })
    ], WizardWizard5Module);
    return WizardWizard5Module;
}());
export { WizardWizard5Module };
//# sourceMappingURL=wizard-wizard-5.module.js.map