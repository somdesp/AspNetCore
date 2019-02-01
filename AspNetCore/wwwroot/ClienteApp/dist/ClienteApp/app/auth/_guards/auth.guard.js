import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../_services/user.service";
var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this._userService.verify().map(function (data) {
            if (data !== null) {
                // logged in so return true
                return true;
            }
            // error when verify so redirect to login page with the return url
            _this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }, function (error) {
            // error when verify so redirect to login page with the return url
            _this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    };
    AuthGuard = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router, UserService])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map