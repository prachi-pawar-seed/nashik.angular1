import { Component } from "@angular/core"

@Component({
    selector:'hparent-comp',
    templateUrl:'./hparent.component.html'
})
export class HParent
{
    msg:string="abcde"

    clicked()
    {
        this.msg="Hello from Parent component"
    }
}