import { Component } from "@angular/core";
import { InfoService } from "./info.service";

@Component({
    selector:'use-info',
    templateUrl:'./useinfo.component.html',

})
export class UseInfoComponent
{
    info:string=""
    result:string=""

    constructor(private infoserv: InfoService)
    {}

    callserv()
    {

        this.info=this.infoserv.giveinfo()
    }


    callnested()
    {
  this.result=this.infoserv.getgreetinfo()

    }
}