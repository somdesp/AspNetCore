import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../_services/authentication.service";
import { Helpers } from "../../helpers";
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        Helpers.setLoading(true);
        // reset login status
        this._authService.logout();
        this._router.navigate(['/login']);
    };
    LogoutComponent = tslib_1.__decorate([
        Component({
            selector: 'app-logout',
            templateUrl: './logout.component.html',
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AuthenticationService])
    ], LogoutComponent);
    return LogoutComponent;
}());
export { LogoutComponent };
//# sourceMappingURL=logout.component.js.map