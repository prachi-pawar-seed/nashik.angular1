import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'raiseto'})
export class RaisePipe implements PipeTransform
{
    transform(value: any, power:number) {
        return Math.pow(value,power)
    }

}