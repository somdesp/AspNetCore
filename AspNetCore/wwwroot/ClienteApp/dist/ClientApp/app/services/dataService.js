import * as tslib_1 from "tslib";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.produtos = [];
    }
    DataService.prototype.carregarProdutos = function () {
        var _this = this;
        return this.http.get("api/produto/ListarProdutos")
            .map(function (result) { return _this.produtos = result.json(); });
    };
    DataService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=dataService.js.map