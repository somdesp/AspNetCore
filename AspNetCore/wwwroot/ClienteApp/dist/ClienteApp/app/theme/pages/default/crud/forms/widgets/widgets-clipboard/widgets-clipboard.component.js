import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsClipboardComponent = /** @class */ (function () {
    function WidgetsClipboardComponent(_script) {
        this._script = _script;
    }
    WidgetsClipboardComponent.prototype.ngOnInit = function () {
    };
    WidgetsClipboardComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-clipboard', ['assets/demo/default/custom/crud/forms/widgets/clipboard.js']);
    };
    WidgetsClipboardComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-clipboard",
            templateUrl: "./widgets-clipboard.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsClipboardComponent);
    return WidgetsClipboardComponent;
}());
export { WidgetsClipboardComponent };
//# sourceMappingURL=widgets-clipboard.component.js.map