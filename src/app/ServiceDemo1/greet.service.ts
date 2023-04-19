import { Injectable } from "@angular/core";

@Injectable()
export class GreetService
{
    sayhello()
    {
        return "Hello from GreetService !"
    }
}