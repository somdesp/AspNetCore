import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Subject } from "rxjs/Subject";
var AlertService = /** @class */ (function () {
    function AlertService(_router) {
        var _this = this;
        this._router = _router;
        this.subject = new Subject();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        _router.events.subscribe(function (event) {
            if (event instanceof NavigationStart) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'danger', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AlertService);
    return AlertService;
}());
export { AlertService };
//# sourceMappingURL=alert.service.js.map