import { Component } from "@angular/core";


@Component({
    selector: 'ass1-comp',
    templateUrl:'./ass1.component.html'
    
})
export class Ass1Comp
{
    age:number=25

    customers=[{custid:101,custname:"aaa"},{custid:102,custname:"bbb"},{custid:103,custname:"ccc"}]

}