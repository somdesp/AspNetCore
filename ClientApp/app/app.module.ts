import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ListaProduto } from './loja/listaProduto.component'
import { DataService } from './services/dataService'


@
    NgModule({
        declarations: [
            AppComponent,
            ListaProduto
        ],
        imports: [
            BrowserModule,
            RouterModule.forRoot([], { useHash: true, enableTracing: true }),
            HttpClientModule

        ],
        providers: [DataService],
        bootstrap: [AppComponent]
    })
export class AppModule { }
