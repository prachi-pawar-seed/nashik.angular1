import { Component } from "@angular/core";
import { ProdMaster } from "./prod_class";

@Component({
selector: 'prodclass-list',
templateUrl :  './prod_class.component.html'

})
export class PList1Component
{
    p = new ProdMaster(0, '' , 0, 0) ;
    pos: number = -1;

    products:  ProdMaster[];

    constructor()    {
this.products = [
    new ProdMaster(101, 'Reynolds Pen', 20, 0),
    new ProdMaster(102, 'Natraj Pencil Box', 80, 0),
    new ProdMaster(103, 'Chart Paper', 20, 0),
    ];

    }



    delprod(pos: number)
    {
     this.products.splice(pos, 1);
    console.log('Deleting at pos ' + pos);
    }

    clearall()   {

        this.p.prodid = 0;
        this.p.prodname = ' ';
        this.p.prodrate = 0;
        this.p.prodiscount = 0;

    }

    addprod()    {
       let  p1 = new ProdMaster(this.p.prodid,this.p.prodname, this.p.prodrate ,this.p.prodiscount);
this.products.push(p1);
this.clearall();
    }

    updateprod(pos: number)
    {
    this.p.prodid = this.products[pos].prodid;
    this.p.prodname = this.products[pos].prodname;
    this.p.prodrate = this.products[pos].prodrate;
    this.p.prodiscount = this.products[pos].prodiscount;
    console.log('Updating at pos ' + pos);
    this.pos = pos;
   }

    modifyprod()    {
     this.products[this.pos].prodid = this.p.prodid ;
     this.products[this.pos].prodname = this.p.prodname ;
     this.products[this.pos].prodrate = this.p.prodrate ;
    this.products[this.pos].prodiscount = this.p.prodiscount;
    this.clearall();
    }
}
