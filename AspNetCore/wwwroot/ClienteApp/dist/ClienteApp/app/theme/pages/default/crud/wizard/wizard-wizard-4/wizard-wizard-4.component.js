import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
var WizardWizard4Component = /** @class */ (function () {
    function WizardWizard4Component(_script) {
        this._script = _script;
    }
    WizardWizard4Component.prototype.ngOnInit = function () {
    };
    WizardWizard4Component.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-wizard-wizard-4', ['assets/demo/default/custom/crud/wizard/wizard.js']);
    };
    WizardWizard4Component = tslib_1.__decorate([
        Component({
            selector: "app-wizard-wizard-4",
            templateUrl: "./wizard-wizard-4.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WizardWizard4Component);
    return WizardWizard4Component;
}());
export { WizardWizard4Component };
//# sourceMappingURL=wizard-wizard-4.component.js.map