import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsSummernoteComponent = /** @class */ (function () {
    function WidgetsSummernoteComponent(_script) {
        this._script = _script;
    }
    WidgetsSummernoteComponent.prototype.ngOnInit = function () {
    };
    WidgetsSummernoteComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-summernote', ['assets/demo/default/custom/crud/forms/widgets/summernote.js']);
    };
    WidgetsSummernoteComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-summernote",
            templateUrl: "./widgets-summernote.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsSummernoteComponent);
    return WidgetsSummernoteComponent;
}());
export { WidgetsSummernoteComponent };
//# sourceMappingURL=widgets-summernote.component.js.map