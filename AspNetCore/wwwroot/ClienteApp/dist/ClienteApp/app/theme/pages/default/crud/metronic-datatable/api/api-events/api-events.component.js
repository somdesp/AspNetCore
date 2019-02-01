import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
var ApiEventsComponent = /** @class */ (function () {
    function ApiEventsComponent(_script) {
        this._script = _script;
    }
    ApiEventsComponent.prototype.ngOnInit = function () {
    };
    ApiEventsComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-api-events', ['assets/demo/default/custom/crud/metronic-datatable/api/events.js']);
    };
    ApiEventsComponent = tslib_1.__decorate([
        Component({
            selector: "app-api-events",
            templateUrl: "./api-events.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], ApiEventsComponent);
    return ApiEventsComponent;
}());
export { ApiEventsComponent };
//# sourceMappingURL=api-events.component.js.map