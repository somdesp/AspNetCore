import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsIonRangeSliderComponent = /** @class */ (function () {
    function WidgetsIonRangeSliderComponent(_script) {
        this._script = _script;
    }
    WidgetsIonRangeSliderComponent.prototype.ngOnInit = function () {
    };
    WidgetsIonRangeSliderComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-ion-range-slider', ['assets/demo/default/custom/crud/forms/widgets/ion-range-slider.js']);
    };
    WidgetsIonRangeSliderComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-ion-range-slider",
            templateUrl: "./widgets-ion-range-slider.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsIonRangeSliderComponent);
    return WidgetsIonRangeSliderComponent;
}());
export { WidgetsIonRangeSliderComponent };
//# sourceMappingURL=widgets-ion-range-slider.component.js.map