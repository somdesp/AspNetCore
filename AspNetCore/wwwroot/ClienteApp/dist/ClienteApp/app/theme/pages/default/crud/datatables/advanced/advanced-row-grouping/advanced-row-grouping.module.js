import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdvancedRowGroupingComponent } from './advanced-row-grouping.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": AdvancedRowGroupingComponent
            }
        ]
    }
];
var AdvancedRowGroupingModule = /** @class */ (function () {
    function AdvancedRowGroupingModule() {
    }
    AdvancedRowGroupingModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                AdvancedRowGroupingComponent
            ] })
    ], AdvancedRowGroupingModule);
    return AdvancedRowGroupingModule;
}());
export { AdvancedRowGroupingModule };
//# sourceMappingURL=advanced-row-grouping.module.js.map