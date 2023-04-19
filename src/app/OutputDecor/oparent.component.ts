import { Component } from "@angular/core";

@Component({
    selector: 'oparent-comp',
    templateUrl:'./oparent.component.html'
        
})
export class OParentComp
{
 msg="xxx"   

 onNotify(str:string)
 {
  this.msg=str
 }
}