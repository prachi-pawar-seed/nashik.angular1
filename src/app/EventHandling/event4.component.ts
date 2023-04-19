import { Component } from "@angular/core"

@Component({
    selector:"ev4-comp",
    templateUrl:'./event4.component.html'
})
export class Event4Component
{
    msg:string="Hey!";

    entered()
    {
        this.msg="Mouse entered the div !"
    }

    exited()
    {
        this.msg="This is DIV"
    }
}