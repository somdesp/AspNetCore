import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
var WizardWizard1Component = /** @class */ (function () {
    function WizardWizard1Component(_script) {
        this._script = _script;
    }
    WizardWizard1Component.prototype.ngOnInit = function () {
    };
    WizardWizard1Component.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-wizard-wizard-1', ['assets/demo/default/custom/crud/wizard/wizard.js']);
    };
    WizardWizard1Component = tslib_1.__decorate([
        Component({
            selector: "app-wizard-wizard-1",
            templateUrl: "./wizard-wizard-1.component.html",
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [ScriptLoaderService])
    ], WizardWizard1Component);
    return WizardWizard1Component;
}());
export { WizardWizard1Component };
//# sourceMappingURL=wizard-wizard-1.component.js.map