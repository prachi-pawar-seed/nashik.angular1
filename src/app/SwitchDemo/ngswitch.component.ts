import { Component } from "@angular/core";

@Component({
    selector: 'switch-comp',
    templateUrl: './ngswitch.component.html',
    styleUrls: ['./ngswitch.component.css']
})
export class SwitchComponent
{
 employees : any[];

constructor() {
this.employees = [

    {
        code: 101,
        name: 'aaa',
        salary: 8900,
        gender: 'Male',
        dob: '25/6/1988',
        dept: 'Sales'

    },

 {
        code: 111,
        name: 'aaa',
        salary: 8900,
        gender: 'Male',
        dob: '25/6/1988',
        dept: 'Sales'

    },
    {
        code: 102,
        name: 'bbb',
        salary: 9800,
        gender: 'Female',
        dob: '20/6/1985',
        dept: 'Admin'
    },

    {
        code: 103,
        name: 'ccc',
        salary: 2900,
        gender: 'Female',
        dob: '5/8/1980',
        dept: 'Purchase'
    },
    {
        code: 104,
        name: 'ddd',
        salary: 8900,
        gender: 'Male',
        dob: '25/6/1988',
        dept: 'Accounts'
    },

];

}
}
