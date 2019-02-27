import {Component} from 'angular2/core'

@Component ({
    selector:'my-app',
    templateUrl:'./productEntry/view.html'
})

export class productEntry {
    item = 0;
    rate = 0;
    quantity =0;
    total = 0;
    color="";
    arr = [];
    ptotal = function(r,q) {
        var rate = r;
        var qua = q;
        this.total = Number(rate) * Number(qua);
        console.log("total" + this.total);
    }
    add = function(i,r,q,t) {
        this.arr.push({
            "item": i,
            "rate":r,
            "quantity":q,
            "total":t,
            "color":this.color
        })
        if(this.quantity < 10) {
            this.color = "red"
        } else {
            this.color = "green"
        }
    }
}