import { Component } from "@angular/core";
import { GreetService } from "./greet.service";

@Component({
    selector:'use-greet',
    templateUrl:'./usegreet.component.html',

})
export class UseGreetComponent
{
    result:string=""

    constructor(private gserv:GreetService)
    {

    }
    callservice()
    {
     this.result = this.gserv.sayhello()
    }
}