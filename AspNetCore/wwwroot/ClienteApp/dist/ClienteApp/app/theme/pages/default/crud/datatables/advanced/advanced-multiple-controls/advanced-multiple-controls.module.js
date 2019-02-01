import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdvancedMultipleControlsComponent } from './advanced-multiple-controls.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": AdvancedMultipleControlsComponent
            }
        ]
    }
];
var AdvancedMultipleControlsModule = /** @class */ (function () {
    function AdvancedMultipleControlsModule() {
    }
    AdvancedMultipleControlsModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                AdvancedMultipleControlsComponent
            ] })
    ], AdvancedMultipleControlsModule);
    return AdvancedMultipleControlsModule;
}());
export { AdvancedMultipleControlsModule };
//# sourceMappingURL=advanced-multiple-controls.module.js.map