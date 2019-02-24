import {Pipe,PipeTransform} from 'angular2/core'

@Pipe({
    name:'Power'
})

export class Pipeclass implements PipeTransform{
    transform(a:any,b:any):number {
        var c = Math.pow(a,b)
        return c;
    }
}