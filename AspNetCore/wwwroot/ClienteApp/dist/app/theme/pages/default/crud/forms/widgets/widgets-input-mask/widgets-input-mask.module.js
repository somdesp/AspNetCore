import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsInputMaskComponent } from './widgets-input-mask.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsInputMaskComponent
            }
        ]
    }
];
var WidgetsInputMaskModule = /** @class */ (function () {
    function WidgetsInputMaskModule() {
    }
    WidgetsInputMaskModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsInputMaskComponent
            ] })
    ], WidgetsInputMaskModule);
    return WidgetsInputMaskModule;
}());
export { WidgetsInputMaskModule };
//# sourceMappingURL=widgets-input-mask.module.js.map