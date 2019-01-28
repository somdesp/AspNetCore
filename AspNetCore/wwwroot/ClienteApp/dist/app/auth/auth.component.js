import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewEncapsulation, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptLoaderService } from '../_services/script-loader.service';
import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service';
import { UserService } from './_services/user.service';
import { AlertComponent } from './_directives/alert.component';
import { Helpers } from '../helpers';
var AuthComponent = /** @class */ (function () {
    function AuthComponent(_router, _script, _userService, _route, _authService, _alertService, cfr) {
        this._router = _router;
        this._script = _script;
        this._userService = _userService;
        this._route = _route;
        this._authService = _authService;
        this._alertService = _alertService;
        this.cfr = cfr;
        this.model = {};
        this.loading = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.remember = true;
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigate([this.returnUrl]);
        this._script.loadScripts('body', [
            'assets/vendors/base/vendors.bundle.js',
            'assets/demo/default/base/scripts.bundle.js'
        ], true).then(function () {
            Helpers.setLoading(false);
            _this.handleFormSwitch();
            _this.handleSignInFormSubmit();
            _this.handleSignUpFormSubmit();
            _this.handleForgetPasswordFormSubmit();
        });
    };
    AuthComponent.prototype.signin = function () {
        var _this = this;
        this.loading = true;
        this._authService.login(this.model.email, this.model.password).subscribe(function (data) {
            _this._router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.showAlert('alertSignin');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.signup = function () {
        var _this = this;
        this.loading = true;
        this._userService.create(this.model).subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Thank you. To complete your registration please check your email.', true);
            _this.loading = false;
            _this.displaySignInForm();
            _this.model = {};
        }, function (error) {
            _this.showAlert('alertSignup');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.forgotPass = function () {
        var _this = this;
        this.loading = true;
        this._userService.forgotPassword(this.model.email).subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Cool! Password recovery instruction has been sent to your email.', true);
            _this.loading = false;
            _this.displaySignInForm();
            _this.model = {};
        }, function (error) {
            _this.showAlert('alertForgotPass');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.showAlert = function (target) {
        this[target].clear();
        var factory = this.cfr.resolveComponentFactory(AlertComponent);
        var ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    };
    AuthComponent.prototype.handleSignInFormSubmit = function () {
        $('#m_login_signin_submit').click(function (e) {
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        required: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    AuthComponent.prototype.displaySignUpForm = function () {
        var login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--forget-password');
        mUtil.removeClass(login, 'm-login--signin');
        mUtil.addClass(login, 'm-login--signup');
        mUtil.animateClass(login.getElementsByClassName('m-login__signup')[0], 'flipInX animated');
    };
    AuthComponent.prototype.displaySignInForm = function () {
        var login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--forget-password');
        mUtil.removeClass(login, 'm-login--signup');
        try {
            $('form').data('validator').resetForm();
        }
        catch (e) {
        }
        mUtil.addClass(login, 'm-login--signin');
        mUtil.animateClass(login.getElementsByClassName('m-login__signin')[0], 'flipInX animated');
    };
    AuthComponent.prototype.displayForgetPasswordForm = function () {
        var login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--signin');
        mUtil.removeClass(login, 'm-login--signup');
        mUtil.addClass(login, 'm-login--forget-password');
        mUtil.animateClass(login.getElementsByClassName('m-login__forget-password')[0], 'flipInX animated');
    };
    AuthComponent.prototype.handleFormSwitch = function () {
        var _this = this;
        document.getElementById('m_login_forget_password').addEventListener('click', function (e) {
            e.preventDefault();
            _this.displayForgetPasswordForm();
        });
        document.getElementById('m_login_forget_password_cancel').addEventListener('click', function (e) {
            e.preventDefault();
            _this.displaySignInForm();
        });
        document.getElementById('m_login_signup').addEventListener('click', function (e) {
            e.preventDefault();
            _this.displaySignUpForm();
        });
        document.getElementById('m_login_signup_cancel').addEventListener('click', function (e) {
            e.preventDefault();
            _this.displaySignInForm();
        });
    };
    AuthComponent.prototype.handleSignUpFormSubmit = function () {
        document.getElementById('m_login_signup_submit').addEventListener('click', function (e) {
            var btn = $(e.target);
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    fullname: {
                        required: true,
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        required: true,
                    },
                    rpassword: {
                        required: true,
                    },
                    agree: {
                        required: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    AuthComponent.prototype.handleForgetPasswordFormSubmit = function () {
        document.getElementById('m_login_forget_password_submit').addEventListener('click', function (e) {
            var btn = $(e.target);
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    tslib_1.__decorate([
        ViewChild('alertSignin', { read: ViewContainerRef }),
        tslib_1.__metadata("design:type", ViewContainerRef)
    ], AuthComponent.prototype, "alertSignin", void 0);
    tslib_1.__decorate([
        ViewChild('alertSignup', { read: ViewContainerRef }),
        tslib_1.__metadata("design:type", ViewContainerRef)
    ], AuthComponent.prototype, "alertSignup", void 0);
    tslib_1.__decorate([
        ViewChild('alertForgotPass', { read: ViewContainerRef }),
        tslib_1.__metadata("design:type", ViewContainerRef)
    ], AuthComponent.prototype, "alertForgotPass", void 0);
    AuthComponent = tslib_1.__decorate([
        Component({
            selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
            templateUrl: './templates/login-1.component.html',
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ScriptLoaderService,
            UserService,
            ActivatedRoute,
            AuthenticationService,
            AlertService,
            ComponentFactoryResolver])
    ], AuthComponent);
    return AuthComponent;
}());
export { AuthComponent };
//# sourceMappingURL=auth.component.js.map