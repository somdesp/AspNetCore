import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LockedHtmlTableComponent } from './locked-html-table.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": LockedHtmlTableComponent
            }
        ]
    }
];
var LockedHtmlTableModule = /** @class */ (function () {
    function LockedHtmlTableModule() {
    }
    LockedHtmlTableModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                LockedHtmlTableComponent
            ] })
    ], LockedHtmlTableModule);
    return LockedHtmlTableModule;
}());
export { LockedHtmlTableModule };
//# sourceMappingURL=locked-html-table.module.js.map