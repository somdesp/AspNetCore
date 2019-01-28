import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var WidgetsDropzoneComponent = /** @class */ (function () {
    function WidgetsDropzoneComponent(_script) {
        this._script = _script;
    }
    WidgetsDropzoneComponent.prototype.ngOnInit = function () {
    };
    WidgetsDropzoneComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-dropzone', ['assets/demo/default/custom/crud/forms/widgets/dropzone.js']);
        Dropzone._autoDiscoverFunction();
    };
    WidgetsDropzoneComponent = tslib_1.__decorate([
        Component({
            selector: "app-widgets-dropzone",
            templateUrl: "./widgets-dropzone.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WidgetsDropzoneComponent);
    return WidgetsDropzoneComponent;
}());
export { WidgetsDropzoneComponent };
//# sourceMappingURL=widgets-dropzone.component.js.map