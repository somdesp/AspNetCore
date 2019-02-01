import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WizardWizard1Component } from './wizard-wizard-1.component';
import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WizardWizard1Component
            }
        ]
    }
];
var WizardWizard1Module = /** @class */ (function () {
    function WizardWizard1Module() {
    }
    WizardWizard1Module = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WizardWizard1Component
            ] })
    ], WizardWizard1Module);
    return WizardWizard1Module;
}());
export { WizardWizard1Module };
//# sourceMappingURL=wizard-wizard-1.module.js.map