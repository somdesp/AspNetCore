import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsIonRangeSliderComponent } from './widgets-ion-range-slider.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';
var routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsIonRangeSliderComponent
            }
        ]
    }
];
var WidgetsIonRangeSliderModule = /** @class */ (function () {
    function WidgetsIonRangeSliderModule() {
    }
    WidgetsIonRangeSliderModule = tslib_1.__decorate([
        NgModule({ imports: [
                CommonModule, RouterModule.forChild(routes), LayoutModule
            ], exports: [
                RouterModule
            ], declarations: [
                WidgetsIonRangeSliderComponent
            ] })
    ], WidgetsIonRangeSliderModule);
    return WidgetsIonRangeSliderModule;
}());
export { WidgetsIonRangeSliderModule };
//# sourceMappingURL=widgets-ion-range-slider.module.js.map