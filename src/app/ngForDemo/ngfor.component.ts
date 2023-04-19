import { Component } from "@angular/core";

@Component({
    selector: 'emplist-comp',
    templateUrl: './ngfor.component.html'
})
export class EmpListComponent
{
 employees : any[];

constructor() {
this.employees = [

    {
        code: 101,
        name: 'aaa',
        salary: 9802,
        gender: 'Male',
        dob: '25/6/1988'
    },

    {
        code: 102,
        name: 'bbb',
        salary: 9800,
        gender: 'Female',
        dob: '20/6/1985'
    },

    {
        code: 103,
        name: 'ccc',
        salary: 2900,
        gender: 'Female',
        dob: '5/8/1980'
    },
    {
        code: 104,
        name: 'ddd',
        salary: 8900,
        gender: 'Male',
        dob: '25/6/1988'
    },

];

}
}
