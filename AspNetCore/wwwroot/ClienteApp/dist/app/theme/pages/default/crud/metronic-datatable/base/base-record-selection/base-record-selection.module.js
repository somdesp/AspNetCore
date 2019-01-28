import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseRecordSelectionComponent } from './base-record-selection.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BaseRecordSelectionComponent
            }
        ]
    }
];
var BaseRecordSelectionModule = /** @class */ (function () {
    function BaseRecordSelectionModule() {
    }
    BaseRecordSelectionModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BaseRecordSelectionComponent
            ] })
    ], BaseRecordSelectionModule);
    return BaseRecordSelectionModule;
}());
export { BaseRecordSelectionModule };
//# sourceMappingURL=base-record-selection.module.js.map