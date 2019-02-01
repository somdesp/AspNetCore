import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiEventsComponent } from './api-events.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ApiEventsComponent
            }
        ]
    }
];
var ApiEventsModule = /** @class */ (function () {
    function ApiEventsModule() {
    }
    ApiEventsModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                ApiEventsComponent
            ] })
    ], ApiEventsModule);
    return ApiEventsModule;
}());
export { ApiEventsModule };
//# sourceMappingURL=api-events.module.js.map