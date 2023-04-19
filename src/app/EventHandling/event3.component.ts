import { Component } from "@angular/core";

@Component({
    selector:'ev3-comp',
    templateUrl:'./event3.component.html'
})
export class Event3Component
{
    col1="red"
    msg1="Hello"
    day:string=""
    myDate=new Date()    

    changed(ev:any)
    {
     this.msg1 = ev.target.value
     this.col1="blue"
    }

    selectChangeHandler(ev:any)
    {
      this.day="U selected "+ev.target.value
    }
}