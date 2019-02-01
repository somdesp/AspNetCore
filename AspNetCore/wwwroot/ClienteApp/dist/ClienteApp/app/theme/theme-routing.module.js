import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';
var routes = [
    {
        'path': '',
        'component': ThemeComponent,
        'canActivate': [AuthGuard],
        'children': [
            {
                'path': 'index',
                'loadChildren': '.\/pages\/default\/blank\/blank.module#BlankModule',
            },
            {
                'path': '',
                'redirectTo': 'index',
                'pathMatch': 'full',
            },
        ],
    },
    {
        'path': '**',
        'redirectTo': 'index',
        'pathMatch': 'full',
    },
];
var ThemeRoutingModule = /** @class */ (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());
export { ThemeRoutingModule };
//# sourceMappingURL=theme-routing.module.js.map