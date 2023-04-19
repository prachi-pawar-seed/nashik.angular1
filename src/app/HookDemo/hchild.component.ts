import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core"

@Component({
    selector:'hchild-comp',
    templateUrl:'./hchild.component.html'
})
export class HChild implements OnChanges,OnInit
{
    @Input() cmsg:string="";

    constructor()
    {
        console.log("Inside the child constructor value of cmsg is "+this.cmsg)
    }
    ngOnChanges(changes: SimpleChanges): void {
        let c=changes["cmsg"]
        console.log("Changed "+c.previousValue+" to "+c.currentValue)
    }
    ngOnInit(): void {
       console.log("Inside the ngOnInit of cmsg is "+this.cmsg)

    }

    
    

}