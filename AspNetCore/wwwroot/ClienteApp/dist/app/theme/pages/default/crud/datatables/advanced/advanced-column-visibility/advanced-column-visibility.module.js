import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdvancedColumnVisibilityComponent } from './advanced-column-visibility.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": AdvancedColumnVisibilityComponent
            }
        ]
    }
];
var AdvancedColumnVisibilityModule = /** @class */ (function () {
    function AdvancedColumnVisibilityModule() {
    }
    AdvancedColumnVisibilityModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                AdvancedColumnVisibilityComponent
            ] })
    ], AdvancedColumnVisibilityModule);
    return AdvancedColumnVisibilityModule;
}());
export { AdvancedColumnVisibilityModule };
//# sourceMappingURL=advanced-column-visibility.module.js.map