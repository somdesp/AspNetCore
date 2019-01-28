import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsBootstrapMultipleselectsplitterComponent = /** @class */ (function () {
    function WidgetsBootstrapMultipleselectsplitterComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapMultipleselectsplitterComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapMultipleselectsplitterComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-bootstrap-multipleselectsplitter', ['assets/demo/default/custom/crud/forms/widgets/bootstrap-multipleselectsplitter.js']);
    };
    WidgetsBootstrapMultipleselectsplitterComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-bootstrap-multipleselectsplitter",
            templateUrl: "./widgets-bootstrap-multipleselectsplitter.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsBootstrapMultipleselectsplitterComponent);
    return WidgetsBootstrapMultipleselectsplitterComponent;
}());
export { WidgetsBootstrapMultipleselectsplitterComponent };
//# sourceMappingURL=widgets-bootstrap-multipleselectsplitter.component.js.map