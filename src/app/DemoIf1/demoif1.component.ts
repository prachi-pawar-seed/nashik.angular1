import { Component } from "@angular/core";
import { Product } from "../ProductComponent/product";

@Component({
    selector: 'demoif1-comp',
    templateUrl:'./demoif1.component.html'
    
})
export class DemoIf1Comp
{
    flag:boolean =false
    status:boolean=false
    p1=new Product(101,"Dell Laptop",45666)
    estatus:boolean=true

    students=[{roll:1,sname:"abcd"},{roll:2,sname:"pqrs"},{roll:3,sname:"xyz"},{roll:11,sname:"abcd"},{roll:21,sname:"pqrs"},{roll:13,sname:"xyz"}]
}