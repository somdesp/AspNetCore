import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdvancedRowCallbackComponent } from './advanced-row-callback.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": AdvancedRowCallbackComponent
            }
        ]
    }
];
var AdvancedRowCallbackModule = /** @class */ (function () {
    function AdvancedRowCallbackModule() {
    }
    AdvancedRowCallbackModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                AdvancedRowCallbackComponent
            ] })
    ], AdvancedRowCallbackModule);
    return AdvancedRowCallbackModule;
}());
export { AdvancedRowCallbackModule };
//# sourceMappingURL=advanced-row-callback.module.js.map