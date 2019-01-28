import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsNouisliderComponent } from './widgets-nouislider.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsNouisliderComponent
            }
        ]
    }
];
var WidgetsNouisliderModule = /** @class */ (function () {
    function WidgetsNouisliderModule() {
    }
    WidgetsNouisliderModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsNouisliderComponent
            ] })
    ], WidgetsNouisliderModule);
    return WidgetsNouisliderModule;
}());
export { WidgetsNouisliderModule };
//# sourceMappingURL=widgets-nouislider.module.js.map