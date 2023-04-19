import { InMemoryDbService } from "angular-in-memory-web-api";

export class BookData implements InMemoryDbService
{
    createDb()
    {
        let books=[{id:101,name:'Book1',price:800},
        {id:102,name:'Book2',price:900},
        {id:103,name:'Book3',price:450}];

        let customers=[{custid:1101,custname:"aaa"},
        {custid:1101,custname:"aaa"}];

        return {books,customers}
    }
}