import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsAutosizeComponent = /** @class */ (function () {
    function WidgetsAutosizeComponent(_script) {
        this._script = _script;
    }
    WidgetsAutosizeComponent.prototype.ngOnInit = function () {
    };
    WidgetsAutosizeComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-autosize', ['assets/demo/default/custom/crud/forms/widgets/autosize.js']);
    };
    WidgetsAutosizeComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-autosize",
            templateUrl: "./widgets-autosize.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsAutosizeComponent);
    return WidgetsAutosizeComponent;
}());
export { WidgetsAutosizeComponent };
//# sourceMappingURL=widgets-autosize.component.js.map