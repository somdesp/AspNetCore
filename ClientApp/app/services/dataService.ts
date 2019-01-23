import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map"

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {


    }

    public produtos = [];


    carregarProdutos() {
        return this.http.get("api/produto/ListarProdutos")
            .map((data: any[]) => {
                this.produtos = data;
                return true;
            });
    }

}