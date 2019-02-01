import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsNouisliderComponent = /** @class */ (function () {
    function WidgetsNouisliderComponent(_script) {
        this._script = _script;
    }
    WidgetsNouisliderComponent.prototype.ngOnInit = function () {
    };
    WidgetsNouisliderComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-nouislider', ['assets/demo/default/custom/crud/forms/widgets/nouislider.js']);
    };
    WidgetsNouisliderComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-nouislider",
            templateUrl: "./widgets-nouislider.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsNouisliderComponent);
    return WidgetsNouisliderComponent;
}());
export { WidgetsNouisliderComponent };
//# sourceMappingURL=widgets-nouislider.component.js.map