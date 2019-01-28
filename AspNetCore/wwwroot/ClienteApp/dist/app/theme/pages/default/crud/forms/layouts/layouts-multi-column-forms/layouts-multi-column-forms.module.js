import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutsMultiColumnFormsComponent } from './layouts-multi-column-forms.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": LayoutsMultiColumnFormsComponent
            }
        ]
    }
];
var LayoutsMultiColumnFormsModule = /** @class */ (function () {
    function LayoutsMultiColumnFormsModule() {
    }
    LayoutsMultiColumnFormsModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                LayoutsMultiColumnFormsComponent
            ] })
    ], LayoutsMultiColumnFormsModule);
    return LayoutsMultiColumnFormsModule;
}());
export { LayoutsMultiColumnFormsModule };
//# sourceMappingURL=layouts-multi-column-forms.module.js.map