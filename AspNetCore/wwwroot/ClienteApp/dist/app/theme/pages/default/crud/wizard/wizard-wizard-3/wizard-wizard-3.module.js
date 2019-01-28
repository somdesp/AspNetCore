import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WizardWizard3Component } from './wizard-wizard-3.component';
import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WizardWizard3Component
            }
        ]
    }
];
var WizardWizard3Module = /** @class */ (function () {
    function WizardWizard3Module() {
    }
    WizardWizard3Module = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WizardWizard3Component
            ] })
    ], WizardWizard3Module);
    return WizardWizard3Module;
}());
export { WizardWizard3Module };
//# sourceMappingURL=wizard-wizard-3.module.js.map