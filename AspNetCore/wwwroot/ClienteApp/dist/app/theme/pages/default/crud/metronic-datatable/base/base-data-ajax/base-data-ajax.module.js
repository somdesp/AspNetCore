import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseDataAjaxComponent } from './base-data-ajax.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BaseDataAjaxComponent
            }
        ]
    }
];
var BaseDataAjaxModule = /** @class */ (function () {
    function BaseDataAjaxModule() {
    }
    BaseDataAjaxModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BaseDataAjaxComponent
            ] })
    ], BaseDataAjaxModule);
    return BaseDataAjaxModule;
}());
export { BaseDataAjaxModule };
//# sourceMappingURL=base-data-ajax.module.js.map