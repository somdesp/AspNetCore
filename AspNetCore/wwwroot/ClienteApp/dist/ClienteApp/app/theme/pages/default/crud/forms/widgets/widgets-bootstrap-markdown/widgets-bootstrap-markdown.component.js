import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsBootstrapMarkdownComponent = /** @class */ (function () {
    function WidgetsBootstrapMarkdownComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapMarkdownComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapMarkdownComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-bootstrap-markdown', ['assets/demo/default/custom/crud/forms/widgets/bootstrap-markdown.js']);
        $('[data-provide="markdown"]').markdown();
    };
    WidgetsBootstrapMarkdownComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-bootstrap-markdown",
            templateUrl: "./widgets-bootstrap-markdown.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsBootstrapMarkdownComponent);
    return WidgetsBootstrapMarkdownComponent;
}());
export { WidgetsBootstrapMarkdownComponent };
//# sourceMappingURL=widgets-bootstrap-markdown.component.js.map