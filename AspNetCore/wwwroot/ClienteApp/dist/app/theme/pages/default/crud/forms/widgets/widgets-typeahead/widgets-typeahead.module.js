import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsTypeaheadComponent } from './widgets-typeahead.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsTypeaheadComponent
            }
        ]
    }
];
var WidgetsTypeaheadModule = /** @class */ (function () {
    function WidgetsTypeaheadModule() {
    }
    WidgetsTypeaheadModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsTypeaheadComponent
            ] })
    ], WidgetsTypeaheadModule);
    return WidgetsTypeaheadModule;
}());
export { WidgetsTypeaheadModule };
//# sourceMappingURL=widgets-typeahead.module.js.map