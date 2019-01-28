import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BaseTranslationComponent = /** @class */ (function () {
    function BaseTranslationComponent(_script) {
        this._script = _script;
    }
    BaseTranslationComponent.prototype.ngOnInit = function () {
    };
    BaseTranslationComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-base-translation', ['assets/demo/default/custom/crud/metronic-datatable/base/translation.js']);
    };
    BaseTranslationComponent = tslib_1.__decorate([
        Component({
            selector: "app-base-translation",
            templateUrl: "./base-translation.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BaseTranslationComponent);
    return BaseTranslationComponent;
}());
export { BaseTranslationComponent };
//# sourceMappingURL=base-translation.component.js.map