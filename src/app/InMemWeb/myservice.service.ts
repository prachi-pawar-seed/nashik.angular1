import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class MyService
{
    SERVER_URL: string = "http://localhost:4200/api/";

    constructor(private http:HttpClient)
    {

    }

    fetchbooks()
    {
        return this.http.get(this.SERVER_URL+"books")
    }

    public addbook(book: {id: number,name:string, price: number}){
        return this.http.post(this.SERVER_URL + 'books', book)
    }


    public deletebook(id:number){
        return this.http.delete(this.SERVER_URL + 'books/'+id);
    }
  
}