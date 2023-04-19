import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'ochild-comp',
    templateUrl:'./ochild.component.html'
        
})
export class OChildComp
{
   @Output() notify=new EventEmitter<string>()

    info="this is info"

    perform()
    {
        this.notify.emit("Child button has been clicked")
    }
}