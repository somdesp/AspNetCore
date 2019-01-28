import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InvoicesInvoice2Component } from './invoices-invoice-2.component';
import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": InvoicesInvoice2Component
            }
        ]
    }
];
var InvoicesInvoice2Module = /** @class */ (function () {
    function InvoicesInvoice2Module() {
    }
    InvoicesInvoice2Module = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                InvoicesInvoice2Component
            ] })
    ], InvoicesInvoice2Module);
    return InvoicesInvoice2Module;
}());
export { InvoicesInvoice2Module };
//# sourceMappingURL=invoices-invoice-2.module.js.map