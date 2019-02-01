import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseDataJsonComponent } from './base-data-json.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BaseDataJsonComponent
            }
        ]
    }
];
var BaseDataJsonModule = /** @class */ (function () {
    function BaseDataJsonModule() {
    }
    BaseDataJsonModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BaseDataJsonComponent
            ] })
    ], BaseDataJsonModule);
    return BaseDataJsonModule;
}());
export { BaseDataJsonModule };
//# sourceMappingURL=base-data-json.module.js.map