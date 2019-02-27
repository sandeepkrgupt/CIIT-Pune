import {Component} from 'angular2/core'

@Component({
    selector:'studentResult-app',
    templateUrl:'./StudentResult/view.html'
})

export class StudentResult {
    sRoll =0;
    sName="";
    sEng=0;
    sMath=0;
    sSci=0;
    sTotal=0;
    sPercent=0;
    sGrade="";
    color="";
    studentArray = [];
    calResult = function(sR,sN,sM,sE,sS,sT,sP,sG) {
        this.studentArray.push({
            "roll":sR,
            "name":sN,
            "Eng":sE,
            "Math":sM,
            "Sci":sS,
            "Total":sT,
            "Percent":sP,
            "Grade":sG,
            "color":this.color
        });
        this.sRoll = sR+1;
        this.sName="";
        this.sEng=null;
        this.sMath=null;
        this.sSci=null;
        this.sTotal=null;
        this.sPercent=null;
        this.sGrade="";
    }
    calSubject = function(sE,sM,sS) {
       this.sTotal = Number(sE) +Number(sM) +Number(sS);
       this.sPercent = (this.sTotal/3).toFixed(2);
       if(this.sPercent < 50) {
           this.sGrade = "Fail"
           this.color = "red"
       } else {
           this.sGrade = "Pass"
           this.color = "green"
       }
       this.sRoll +=1;
    }
}