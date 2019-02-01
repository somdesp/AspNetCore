import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from "../services/dataService";
var ListaProduto = /** @class */ (function () {
    function ListaProduto(data) {
        this.data = data;
        this.produtos = [];
        this.produtos = data.produtos;
    }
    ListaProduto.prototype.ngOnInit = function () {
        var _this = this;
        this.data.carregarProdutos()
            .subscribe(function () { return _this.produtos = _this.data.produtos; });
    };
    ListaProduto = tslib_1.__decorate([
        Component({
            selector: "lista-produto",
            templateUrl: "./listaProduto.component.html",
            styleUrls: []
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], ListaProduto);
    return ListaProduto;
}());
export { ListaProduto };
//# sourceMappingURL=listaProduto.component.js.map