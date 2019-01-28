import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsBootstrapMultipleselectsplitterComponent } from './widgets-bootstrap-multipleselectsplitter.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsBootstrapMultipleselectsplitterComponent
            }
        ]
    }
];
var WidgetsBootstrapMultipleselectsplitterModule = /** @class */ (function () {
    function WidgetsBootstrapMultipleselectsplitterModule() {
    }
    WidgetsBootstrapMultipleselectsplitterModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsBootstrapMultipleselectsplitterComponent
            ] })
    ], WidgetsBootstrapMultipleselectsplitterModule);
    return WidgetsBootstrapMultipleselectsplitterModule;
}());
export { WidgetsBootstrapMultipleselectsplitterModule };
//# sourceMappingURL=widgets-bootstrap-multipleselectsplitter.module.js.map