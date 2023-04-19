import { Component } from "@angular/core";


@Component({
    selector:'tdriven-one',
    templateUrl:'./tdriven1.component.html'

})
export class TDriven1Component
{
    fvalue:any
    phno:any=""
    nm:any=""

    show(fvalue:any)
    {
     this.fvalue=fvalue
     this.phno = this.fvalue.phone
     this.nm=this.fvalue.custname
    }
}