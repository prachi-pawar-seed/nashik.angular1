import { Component } from "@angular/core";

@Component({
    selector: 'data-bind1',
    templateUrl:'./databind1.component.html'
})
export class DataBind1
{
msg:string="Welcome to Angu App"
num:number=100
greetmsg=""

changemsg()
{
    this.msg="This is new message"
}

greetme(nm:string,age:any)
{
    this.greetmsg="Good afternoon "+nm +"U are "+age+" years old !"
}

}