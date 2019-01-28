import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdvancedFooterCallbackComponent } from './advanced-footer-callback.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": AdvancedFooterCallbackComponent
            }
        ]
    }
];
var AdvancedFooterCallbackModule = /** @class */ (function () {
    function AdvancedFooterCallbackModule() {
    }
    AdvancedFooterCallbackModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                AdvancedFooterCallbackComponent
            ] })
    ], AdvancedFooterCallbackModule);
    return AdvancedFooterCallbackModule;
}());
export { AdvancedFooterCallbackModule };
//# sourceMappingURL=advanced-footer-callback.module.js.map