import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BaseDataJsonComponent = /** @class */ (function () {
    function BaseDataJsonComponent(_script) {
        this._script = _script;
    }
    BaseDataJsonComponent.prototype.ngOnInit = function () {
    };
    BaseDataJsonComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-base-data-json', ['assets/demo/default/custom/crud/metronic-datatable/base/data-json.js']);
    };
    BaseDataJsonComponent = tslib_1.__decorate([
        Component({
            selector: "app-base-data-json",
            templateUrl: "./base-data-json.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BaseDataJsonComponent);
    return BaseDataJsonComponent;
}());
export { BaseDataJsonComponent };
//# sourceMappingURL=base-data-json.component.js.map