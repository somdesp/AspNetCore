import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
var WizardWizard2Component = /** @class */ (function () {
    function WizardWizard2Component(_script) {
        this._script = _script;
    }
    WizardWizard2Component.prototype.ngOnInit = function () {
    };
    WizardWizard2Component.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-wizard-wizard-2', ['assets/demo/default/custom/crud/wizard/wizard.js']);
    };
    WizardWizard2Component = tslib_1.__decorate([
        Component({
            selector: "app-wizard-wizard-2",
            templateUrl: "./wizard-wizard-2.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WizardWizard2Component);
    return WizardWizard2Component;
}());
export { WizardWizard2Component };
//# sourceMappingURL=wizard-wizard-2.component.js.map