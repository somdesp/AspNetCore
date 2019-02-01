import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsDropzoneComponent } from './widgets-dropzone.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsDropzoneComponent
            }
        ]
    }
];
var WidgetsDropzoneModule = /** @class */ (function () {
    function WidgetsDropzoneModule() {
    }
    WidgetsDropzoneModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsDropzoneComponent
            ] })
    ], WidgetsDropzoneModule);
    return WidgetsDropzoneModule;
}());
export { WidgetsDropzoneModule };
//# sourceMappingURL=widgets-dropzone.module.js.map