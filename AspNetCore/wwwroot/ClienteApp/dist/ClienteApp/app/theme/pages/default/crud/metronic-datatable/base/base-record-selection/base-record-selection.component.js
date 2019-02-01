import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var BaseRecordSelectionComponent = /** @class */ (function () {
    function BaseRecordSelectionComponent(_script) {
        this._script = _script;
    }
    BaseRecordSelectionComponent.prototype.ngOnInit = function () {
    };
    BaseRecordSelectionComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-base-record-selection', ['assets/demo/default/custom/crud/metronic-datatable/base/record-selection.js']);
    };
    BaseRecordSelectionComponent = tslib_1.__decorate([
        Component({
            selector: "app-base-record-selection",
            templateUrl: "./base-record-selection.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], BaseRecordSelectionComponent);
    return BaseRecordSelectionComponent;
}());
export { BaseRecordSelectionComponent };
//# sourceMappingURL=base-record-selection.component.js.map