import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FaqFaq1Component } from './faq-faq-1.component';
import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": FaqFaq1Component
            }
        ]
    }
];
var FaqFaq1Module = /** @class */ (function () {
    function FaqFaq1Module() {
    }
    FaqFaq1Module = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                FaqFaq1Component
            ] })
    ], FaqFaq1Module);
    return FaqFaq1Module;
}());
export { FaqFaq1Module };
//# sourceMappingURL=faq-faq-1.module.js.map