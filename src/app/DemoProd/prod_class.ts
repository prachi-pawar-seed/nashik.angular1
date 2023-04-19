export class ProdMaster {

    prodid: number;
    prodname: string ;
    prodrate: number ;
    prodiscount: number ;


    constructor(prodid: number, prodname: string, prodrate:number, prodiscount: number) {

    this.prodid = prodid;
    this.prodname = prodname;
    this.prodrate = prodrate;
    this.prodiscount = prodiscount ;

    }


}