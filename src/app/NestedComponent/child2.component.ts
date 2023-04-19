import { Component,Input } from "@angular/core";


@Component({
    selector: 'child2-comp',
    templateUrl:'./child2.component.html'
    
})
export class Child2Comp
{
   @Input() imp:string=""
}