import {Injectable} from 'angular2/core'
@Injectable()

export class operation {
    addition = function(a:any,b:any):number {
        var c = Number(a) + Number(b)
        return c;
    }
    Substraction = function(a:any,b:any):number {
        var c = Number(a) - Number(b)
        return c;
    }
    Multiplication = function(a:any,b:any):number {
        var c = Number(a) * Number(b)
        return c;
    }
    Division = function(a:any,b:any):number {
        var c = Number(a) / Number(b)
        return c;
    }
}