import { Component, OnInit } from "@angular/core"
import { DataService } from "../services/dataService";


@Component({
    selector: "lista-produto",
    templateUrl: "./listaProduto.component.html",
    styleUrls: []
})
export class ListaProduto implements OnInit {
    ngOnInit(): void {
        this.data.carregarProdutos()
            .subscribe(success => {
                this.produtos = this.data.produtos;
            });
    }

    constructor(private data: DataService) {
        this.produtos = data.produtos;
    }

    public produtos = [];
} 