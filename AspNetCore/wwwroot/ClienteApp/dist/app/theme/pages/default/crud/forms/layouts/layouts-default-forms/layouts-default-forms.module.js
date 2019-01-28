import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutsDefaultFormsComponent } from './layouts-default-forms.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": LayoutsDefaultFormsComponent
            }
        ]
    }
];
var LayoutsDefaultFormsModule = /** @class */ (function () {
    function LayoutsDefaultFormsModule() {
    }
    LayoutsDefaultFormsModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                LayoutsDefaultFormsComponent
            ] })
    ], LayoutsDefaultFormsModule);
    return LayoutsDefaultFormsModule;
}());
export { LayoutsDefaultFormsModule };
//# sourceMappingURL=layouts-default-forms.module.js.map