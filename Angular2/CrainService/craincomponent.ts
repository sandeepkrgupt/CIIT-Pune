import {Component} from 'angular2/core'
@Component({
    selector:"crain-app",
    templateUrl:"./CrainService/view.html"
})

export class CrainService {
    stime = "";
    etime = "";
    rest = "";
    totalDur ="";
    rate="";
    totalAmt ="";
arr = [];
    caltime = function(sT,eT,r,rt) {
        var sd = new Date("2019 01 01 " +sT);
        var ed = new Date("2019 01 01 " +eT);
        var time = ((ed-sd)/1000)/60;
        time = time - r;
        var hour = Math.floor(time/60);
        var minute = time%60;
        this.totalDur = hour+ ":" + minute;
        var rate = rt/60;
        var Amt = rate*time;
        this.totalAmt = Amt.toFixed(2);

    }

    add = function (sT,eT,r,tD,rT,tA) {
        this.arr.push({
            "startTime":sT,
            "endTime":eT,
            "rest":r,
            "totalDur":tD,
            "rate":rT,
            "totalAmt":tA
        })
    }
}