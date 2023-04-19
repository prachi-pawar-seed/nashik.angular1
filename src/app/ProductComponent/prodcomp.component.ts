import { Component } from "@angular/core";
import { Product } from "./product";

@Component({
    selector: 'prod-comp',
    templateUrl:'./prodcomp.component.html'
})
export class ProdComp
{
p1=new Product(101,"Pen",20)

}