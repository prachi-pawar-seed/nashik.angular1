import { Component } from "@angular/core";


@Component({
    selector:'tvalidate-comp',
    templateUrl:'./tvalidate.component.html',
    styleUrls:['./tvalidate.component.css']

})
export class TValidateComponent
{
    fvalue:any
   
    show(fvalue:any)
    {
     this.fvalue=fvalue
     
    }
}