import { Injectable } from "@angular/core";
import { Service1 } from "./service1.service";

@Injectable()
export class Service2
{
    constructor(private serv1:Service1)
    {}

   getinfo()
   {
    return this.serv1.show()
   }
}