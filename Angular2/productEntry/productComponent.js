"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var productEntry = (function () {
    function productEntry() {
        this.item = 0;
        this.rate = 0;
        this.quantity = 0;
        this.total = 0;
        this.color = "";
        this.arr = [];
        this.ptotal = function (r, q) {
            var rate = r;
            var qua = q;
            this.total = Number(rate) * Number(qua);
            console.log("total" + this.total);
        };
        this.add = function (i, r, q, t) {
            this.arr.push({
                "item": i,
                "rate": r,
                "quantity": q,
                "total": t,
                "color": this.color
            });
            if (this.quantity < 10) {
                this.color = "red";
            }
            else {
                this.color = "green";
            }
        };
    }
    productEntry = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './productEntry/view.html'
        }), 
        __metadata('design:paramtypes', [])
    ], productEntry);
    return productEntry;
}());
exports.productEntry = productEntry;
//# sourceMappingURL=productComponent.js.map