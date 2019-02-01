import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
var WizardWizard3Component = /** @class */ (function () {
    function WizardWizard3Component(_script) {
        this._script = _script;
    }
    WizardWizard3Component.prototype.ngOnInit = function () {
    };
    WizardWizard3Component.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-wizard-wizard-3', ['assets/demo/default/custom/crud/wizard/wizard.js']);
    };
    WizardWizard3Component = tslib_1.__decorate([
        Component({
            selector: "app-wizard-wizard-3",
            templateUrl: "./wizard-wizard-3.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WizardWizard3Component);
    return WizardWizard3Component;
}());
export { WizardWizard3Component };
//# sourceMappingURL=wizard-wizard-3.component.js.map