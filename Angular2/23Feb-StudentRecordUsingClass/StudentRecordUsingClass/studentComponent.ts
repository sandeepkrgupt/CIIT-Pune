import {Component} from 'angular2/core'
import {studentclass} from './studentclass'
@Component({
    selector:"std-comp",
    template:`
    <div>
    <label>Std Roll:</label>
    <input [(ngModel)] = "s.roll" />
    <label>Std Name:</label>
    <input [(ngModel)] = "s.sName" />
    <label>Std Address:</label>
    <input [(ngModel)] = "s.sAddress" />
    <input type="button" (click) = "addNewStd(s)" value="add New"/>
    </div>
    <table border="1">
        <tbody>
            <tr *ngFor="#std of students">
                <td>{{std.roll}}</td>

                <td>{{std.sName}}</td>

                <td>{{std.sAddress}}</td>
                <td><a href="#" (click) ="deleteStd(std)">delete</a>
                <input type="button" (click) = "deleteStd(std)" value="Delete"/>
                </td>
            </tr>
        </tbody>
    </table>`
})

export class stdRecord {
students = [];
s = new studentclass(1,"xyz","asdasdasd");
addNewStd = function(s) {
this.students.push(s);
this.s = new studentclass(s.roll+1,null,null);
}

deleteStd = function(p) {
    var i = this.students.indexOf(p);
    this.students.splice(i,1);
}
}