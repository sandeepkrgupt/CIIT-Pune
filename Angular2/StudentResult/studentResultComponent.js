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
var StudentResult = (function () {
    function StudentResult() {
        this.sRoll = 0;
        this.sName = "";
        this.sEng = 0;
        this.sMath = 0;
        this.sSci = 0;
        this.sTotal = 0;
        this.sPercent = 0;
        this.sGrade = "";
        this.color = "";
        this.studentArray = [];
        this.calResult = function (sR, sN, sM, sE, sS, sT, sP, sG) {
            this.studentArray.push({
                "roll": sR,
                "name": sN,
                "Eng": sE,
                "Math": sM,
                "Sci": sS,
                "Total": sT,
                "Percent": sP,
                "Grade": sG,
                "color": this.color
            });
            this.sRoll = sR + 1;
            this.sName = "";
            this.sEng = null;
            this.sMath = null;
            this.sSci = null;
            this.sTotal = null;
            this.sPercent = null;
            this.sGrade = "";
        };
        this.calSubject = function (sE, sM, sS) {
            this.sTotal = Number(sE) + Number(sM) + Number(sS);
            this.sPercent = (this.sTotal / 3).toFixed(2);
            if (this.sPercent < 50) {
                this.sGrade = "Fail";
                this.color = "red";
            }
            else {
                this.sGrade = "Pass";
                this.color = "green";
            }
            this.sRoll += 1;
        };
    }
    StudentResult = __decorate([
        core_1.Component({
            selector: 'studentResult-app',
            templateUrl: './StudentResult/view.html'
        }), 
        __metadata('design:paramtypes', [])
    ], StudentResult);
    return StudentResult;
}());
exports.StudentResult = StudentResult;
//# sourceMappingURL=studentResultComponent.js.map