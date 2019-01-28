import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WizardWizard2Component } from './wizard-wizard-2.component';
import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WizardWizard2Component
            }
        ]
    }
];
var WizardWizard2Module = /** @class */ (function () {
    function WizardWizard2Module() {
    }
    WizardWizard2Module = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WizardWizard2Component
            ] })
    ], WizardWizard2Module);
    return WizardWizard2Module;
}());
export { WizardWizard2Module };
//# sourceMappingURL=wizard-wizard-2.module.js.map