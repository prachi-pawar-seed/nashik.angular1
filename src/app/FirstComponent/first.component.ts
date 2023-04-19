import { Component } from "@angular/core";

@Component({
    selector: 'first-comp',
    templateUrl:'./first.component.html',
    styleUrls:['./first.component.css']
    
})
export class FirstComp
{
msg:string="Welcome to Angu App"
num:number=100

}