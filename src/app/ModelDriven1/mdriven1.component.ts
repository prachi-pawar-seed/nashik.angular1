import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector:'mdriven1-comp',
    templateUrl: './mdriven1.component.html'
})
export class MDriven1Component
{
    countries = ['USA', 'Germany', 'Italy', 'France']


    SignIn=new FormGroup({
        username: new FormControl("user1"),
        password:new FormControl("pass1"),
        address:new FormGroup({
            street:new FormControl("MG Road"),
            city:new FormControl("Pune"),
            country:new FormControl()
        })
    })
}