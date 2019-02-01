import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClientModule } from "@angular/common/http"
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ListaProduto } from './loja/listaProduto.component';
import { DataService } from './services/dataService';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                ListaProduto
            ],
            imports: [
                BrowserModule,
                RouterModule.forRoot([], { useHash: true, enableTracing: true }),
                HttpModule
            ],
            providers: [DataService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map