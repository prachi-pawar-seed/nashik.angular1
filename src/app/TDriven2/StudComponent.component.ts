import { Component } from "@angular/core";
import { Student } from "./Student";

@Component({
    selector: 'tdriven2-comp',
    templateUrl: './StudComponent.component.html',
    
})
export class TDriven2Component {

    //stud : Student ={'rollno':0, 'sname':'xxx', 'marks' :0};
 stud = new Student(0,"xxx",0)
    saveStud(fvalue:Student)
    {
   this.stud = fvalue;
   

    }
}