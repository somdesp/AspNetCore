import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { BlankComponent } from './blank.component';
var routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': BlankComponent,
            },
        ],
    },
];
var BlankModule = /** @class */ (function () {
    function BlankModule() {
    }
    BlankModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule,
            ], exports: [
                RouterModule,
            ], declarations: [
                BlankComponent,
            ],
        })
    ], BlankModule);
    return BlankModule;
}());
export { BlankModule };
//# sourceMappingURL=blank.module.js.map