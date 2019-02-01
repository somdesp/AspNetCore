import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsBootstrapMarkdownComponent } from './widgets-bootstrap-markdown.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsBootstrapMarkdownComponent
            }
        ]
    }
];
var WidgetsBootstrapMarkdownModule = /** @class */ (function () {
    function WidgetsBootstrapMarkdownModule() {
    }
    WidgetsBootstrapMarkdownModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsBootstrapMarkdownComponent
            ] })
    ], WidgetsBootstrapMarkdownModule);
    return WidgetsBootstrapMarkdownModule;
}());
export { WidgetsBootstrapMarkdownModule };
//# sourceMappingURL=widgets-bootstrap-markdown.module.js.map