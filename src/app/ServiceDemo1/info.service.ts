import { Injectable } from "@angular/core";
import { GreetService } from "./greet.service";

@Injectable()
export class InfoService
{

    constructor(private gserv:GreetService)
    {}
    giveinfo()
    {
        return "Important info from server...."
    }

    getgreetinfo()
       {
      return this.gserv.sayhello()
       }
}