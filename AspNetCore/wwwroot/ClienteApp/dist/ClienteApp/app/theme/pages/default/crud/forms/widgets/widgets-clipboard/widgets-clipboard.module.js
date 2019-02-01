import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsClipboardComponent } from './widgets-clipboard.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsClipboardComponent
            }
        ]
    }
];
var WidgetsClipboardModule = /** @class */ (function () {
    function WidgetsClipboardModule() {
    }
    WidgetsClipboardModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsClipboardComponent
            ] })
    ], WidgetsClipboardModule);
    return WidgetsClipboardModule;
}());
export { WidgetsClipboardModule };
//# sourceMappingURL=widgets-clipboard.module.js.map