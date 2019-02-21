import {Component} from "angular2/core";
@Component({
    selector:'sample-view',
    templateUrl:'./citylist/citylistpage.html'
})
export class sampleclass{
    cities = [];
    AddcityDetails = function(cn,cc,cs) {
        this.cities.push({
            cityName:cn,
            cityCode:cc,
            cityState:cs
        });
    }
}   