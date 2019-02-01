import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
var WizardWizard5Component = /** @class */ (function () {
    function WizardWizard5Component(_script) {
        this._script = _script;
    }
    WizardWizard5Component.prototype.ngOnInit = function () {
    };
    WizardWizard5Component.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-wizard-wizard-5', ['assets/demo/default/custom/crud/wizard/wizard.js']);
    };
    WizardWizard5Component = tslib_1.__decorate([
        Component({
            selector: "app-wizard-wizard-5",
            templateUrl: "./wizard-wizard-5.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WizardWizard5Component);
    return WizardWizard5Component;
}());
export { WizardWizard5Component };
//# sourceMappingURL=wizard-wizard-5.component.js.map