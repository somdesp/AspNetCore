import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InvoicesInvoice1Component } from './invoices-invoice-1.component';
import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": InvoicesInvoice1Component
            }
        ]
    }
];
var InvoicesInvoice1Module = /** @class */ (function () {
    function InvoicesInvoice1Module() {
    }
    InvoicesInvoice1Module = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                InvoicesInvoice1Component
            ] })
    ], InvoicesInvoice1Module);
    return InvoicesInvoice1Module;
}());
export { InvoicesInvoice1Module };
//# sourceMappingURL=invoices-invoice-1.module.js.map