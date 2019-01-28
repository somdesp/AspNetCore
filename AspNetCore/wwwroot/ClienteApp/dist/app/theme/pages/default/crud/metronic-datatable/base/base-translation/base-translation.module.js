import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseTranslationComponent } from './base-translation.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": BaseTranslationComponent
            }
        ]
    }
];
var BaseTranslationModule = /** @class */ (function () {
    function BaseTranslationModule() {
    }
    BaseTranslationModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                BaseTranslationComponent
            ] })
    ], BaseTranslationModule);
    return BaseTranslationModule;
}());
export { BaseTranslationModule };
//# sourceMappingURL=base-translation.module.js.map