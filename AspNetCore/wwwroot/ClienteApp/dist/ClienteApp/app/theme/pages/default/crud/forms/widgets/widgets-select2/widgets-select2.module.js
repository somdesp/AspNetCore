import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsSelect2Component } from './widgets-select2.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsSelect2Component
            }
        ]
    }
];
var WidgetsSelect2Module = /** @class */ (function () {
    function WidgetsSelect2Module() {
    }
    WidgetsSelect2Module = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsSelect2Component
            ] })
    ], WidgetsSelect2Module);
    return WidgetsSelect2Module;
}());
export { WidgetsSelect2Module };
//# sourceMappingURL=widgets-select2.module.js.map