import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsTypeaheadComponent = /** @class */ (function () {
    function WidgetsTypeaheadComponent(_script) {
        this._script = _script;
    }
    WidgetsTypeaheadComponent.prototype.ngOnInit = function () {
    };
    WidgetsTypeaheadComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-typeahead', ['assets/demo/default/custom/crud/forms/widgets/typeahead.js']);
    };
    WidgetsTypeaheadComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-typeahead",
            templateUrl: "./widgets-typeahead.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsTypeaheadComponent);
    return WidgetsTypeaheadComponent;
}());
export { WidgetsTypeaheadComponent };
//# sourceMappingURL=widgets-typeahead.component.js.map