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
var studentclass_1 = require('./studentclass');
var stdRecord = (function () {
    function stdRecord() {
        this.students = [];
        this.s = new studentclass_1.studentclass(1, "xyz", "asdasdasd");
        this.addNewStd = function (s) {
            this.students.push(s);
            this.s = new studentclass_1.studentclass(s.roll + 1, null, null);
        };
        this.deleteStd = function (p) {
            var i = this.students.indexOf(p);
            this.students.splice(i, 1);
        };
    }
    stdRecord = __decorate([
        core_1.Component({
            selector: "std-comp",
            template: "\n    <div>\n    <label>Std Roll:</label>\n    <input [(ngModel)] = \"s.roll\" />\n    <label>Std Name:</label>\n    <input [(ngModel)] = \"s.sName\" />\n    <label>Std Address:</label>\n    <input [(ngModel)] = \"s.sAddress\" />\n    <input type=\"button\" (click) = \"addNewStd(s)\" value=\"add New\"/>\n    </div>\n    <table border=\"1\">\n        <tbody>\n            <tr *ngFor=\"#std of students\">\n                <td>{{std.roll}}</td>\n\n                <td>{{std.sName}}</td>\n\n                <td>{{std.sAddress}}</td>\n                <td><a href=\"#\" (click) =\"deleteStd(std)\">delete</a>\n                <input type=\"button\" (click) = \"deleteStd(std)\" value=\"Delete\"/>\n                </td>\n            </tr>\n        </tbody>\n    </table>"
        }), 
        __metadata('design:paramtypes', [])
    ], stdRecord);
    return stdRecord;
}());
exports.stdRecord = stdRecord;
//# sourceMappingURL=studentComponent.js.map