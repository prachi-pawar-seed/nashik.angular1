import { Component } from "@angular/core"

@Component({
    selector:"ev1-comp",
    templateUrl:'./event1.component.html'
})
export class Event1Component
{
    msg1="This is message1"
    msg=""
    etype=""
    res=0

    changemsg1(ev:any)
    {
        this.msg1=ev.target.value
    }
    clicked()
    {
     this.msg="Clicked"
    }

    add(num1:string,num2:string)
    {
        let x = parseInt(num1)
        let y=parseInt(num2)
        this.res=x+y
    }
    showradio(info:any)
    {
        this.msg="U selected "+info
    }
    display(type:any)
    {
    this.etype="Emp type is "+type
    }

    show(info:string)
    {
        this.msg=info;
    }
}