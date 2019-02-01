import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChildDataAjaxComponent } from './child-data-ajax.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ChildDataAjaxComponent
            }
        ]
    }
];
var ChildDataAjaxModule = /** @class */ (function () {
    function ChildDataAjaxModule() {
    }
    ChildDataAjaxModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ChildDataAjaxComponent
            ] })
    ], ChildDataAjaxModule);
    return ChildDataAjaxModule;
}());
export { ChildDataAjaxModule };
//# sourceMappingURL=child-data-ajax.module.js.map