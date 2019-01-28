import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { AlertService } from "../_services/index";
var AlertComponent = /** @class */ (function () {
    function AlertComponent(_alertService) {
        this._alertService = _alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent = tslib_1.__decorate([
        Component({
            selector: 'app-alert',
            templateUrl: './alert.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [AlertService])
    ], AlertComponent);
    return AlertComponent;
}());
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map