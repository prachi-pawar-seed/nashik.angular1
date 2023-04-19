import { Component } from "@angular/core";
import { MyService } from "./myservice.service";

@Component({
    selector: 'in-mem-comp',
    templateUrl:'./use-inmem.component.html'
})
export class UseInMemoryComponent
{
    books : any[]=[]
    book:any
    msg:any
    constructor(private myserv:MyService)
    {

    }

    getbooks()
    {
     let obs =  this.myserv.fetchbooks()
     obs.subscribe((response:any)=>this.books=response)
    }

    addbook(bid:string,bname:string,bprice:string)
    {

        this.book={'id':bid,'name':bname,'price':bprice}
      let obs = this.myserv.addbook(this.book).subscribe((ret)=>console.log(ret))
        return obs;
    }

    delbook(bid:string)
    {
        let obs=this.myserv.deletebook(parseInt(bid)).subscribe((ret)=>this.msg=ret)
        return obs
    }
}