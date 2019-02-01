import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsSummernoteComponent } from './widgets-summernote.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsSummernoteComponent
            }
        ]
    }
];
var WidgetsSummernoteModule = /** @class */ (function () {
    function WidgetsSummernoteModule() {
    }
    WidgetsSummernoteModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsSummernoteComponent
            ] })
    ], WidgetsSummernoteModule);
    return WidgetsSummernoteModule;
}());
export { WidgetsSummernoteModule };
//# sourceMappingURL=widgets-summernote.module.js.map