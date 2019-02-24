import {Component} from 'angular2/core'
import {operation} from './operation'
import {student} from "./student"
@Component({
    selector:'service-app',
    template:`
    <h1>Services</h1>
    <input type="text" [(ngModel)] = "s.a" />
    <input type="text" [(ngModel)] = "s.b" />
    <input type="button" (click) = "submit(s)" value="ok"/>
    <hr/>
    {{"Add="+addvalue}}
    <br/>
    {{"Sub="+subvalue}}
    <br/>
    {{"Mul="+mulvalue}}
    <br/>
    {{"Div="+divvalue}}

    `,
    providers:[operation]
})

export class Arithmatic {
s=new student(0,0);
addvalue = 0;
subvalue = 0;
mulvalue = 0;
divvalue = 0;
a1 = new operation();
//or you can use constructor as weel
//constructor(private a1:operation) {}
submit = function(p) {
    this.addvalue = this.a1.addition(p.a,p.b)
    this.subvalue = this.a1.Substraction(p.a,p.b)
    this.mulvalue = this.a1.Multiplication(p.a,p.b)
    this.divvalue = this.a1.Division(p.a,p.b)
    
}
}