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
var operation_1 = require('./operation');
var student_1 = require("./student");
var Arithmatic = (function () {
    function Arithmatic() {
        this.s = new student_1.student(0, 0);
        this.addvalue = 0;
        this.subvalue = 0;
        this.mulvalue = 0;
        this.divvalue = 0;
        this.a1 = new operation_1.operation();
        //or you can use constructor as weel
        //constructor(private a1:operation) {}
        this.submit = function (p) {
            this.addvalue = this.a1.addition(p.a, p.b);
            this.subvalue = this.a1.Substraction(p.a, p.b);
            this.mulvalue = this.a1.Multiplication(p.a, p.b);
            this.divvalue = this.a1.Division(p.a, p.b);
        };
    }
    Arithmatic = __decorate([
        core_1.Component({
            selector: 'service-app',
            template: "\n    <h1>Services</h1>\n    <input type=\"text\" [(ngModel)] = \"s.a\" />\n    <input type=\"text\" [(ngModel)] = \"s.b\" />\n    <input type=\"button\" (click) = \"submit(s)\" value=\"ok\"/>\n    <hr/>\n    {{\"Add=\"+addvalue}}\n    <br/>\n    {{\"Sub=\"+subvalue}}\n    <br/>\n    {{\"Mul=\"+mulvalue}}\n    <br/>\n    {{\"Div=\"+divvalue}}\n\n    ",
            providers: [operation_1.operation]
        }), 
        __metadata('design:paramtypes', [])
    ], Arithmatic);
    return Arithmatic;
}());
exports.Arithmatic = Arithmatic;
//# sourceMappingURL=component.js.map