import { Component } from "@angular/core";


@Component({
    selector: 'pipe-example',
    templateUrl:'./pipeex.component.html'
    
})
export class PipeExample
{
    title:string="hello dear friends"
    num:number=12345
    x:number=0.3423
    bdate=new Date(2020,4-1,22,14,34)
}