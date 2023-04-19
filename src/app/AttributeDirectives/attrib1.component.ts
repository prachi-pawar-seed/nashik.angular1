import { Component } from "@angular/core";

@Component({
    selector:'attrib-comp',
    templateUrl:'./attrib1.component.html',
    styleUrls:['./attrib1.component.css']
})
export class AttribComponent
{

    color:string ="magenta"
    size:number = 4
    svar:string="SEED Infotech Ltd"
    display:string='hide-class'
}