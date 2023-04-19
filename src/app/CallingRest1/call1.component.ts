import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";


@Component({
selector: 'call1-comp',
templateUrl :  './call1.component.html'

})
export class Call1Component
{
 
    result:any
    
    constructor(private http:HttpClient)
    {}
    callserv()
    {
     let obs =  this.http.get("https://reqres.in/api/users/2")
    // obs.subscribe(() => console.log("Got it....."))
    
   // obs.subscribe((response) => console.log(response))
   obs.subscribe((response) => this.result=response)
    }
}
