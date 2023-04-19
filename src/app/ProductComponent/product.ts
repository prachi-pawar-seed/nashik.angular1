export class Product
{
    prodid:number =0 
    prodname:string ="xxx"
    price:number=0

    constructor(id:number,nm:string,price:number)
    {
        this.prodid=id
        this.prodname=nm
        this.price=price
    }
}