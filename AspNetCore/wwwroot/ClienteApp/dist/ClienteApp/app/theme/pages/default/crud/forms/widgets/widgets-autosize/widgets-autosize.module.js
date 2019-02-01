import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsAutosizeComponent } from './widgets-autosize.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsAutosizeComponent
            }
        ]
    }
];
var WidgetsAutosizeModule = /** @class */ (function () {
    function WidgetsAutosizeModule() {
    }
    WidgetsAutosizeModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsAutosizeComponent
            ] })
    ], WidgetsAutosizeModule);
    return WidgetsAutosizeModule;
}());
export { WidgetsAutosizeModule };
//# sourceMappingURL=widgets-autosize.module.js.map