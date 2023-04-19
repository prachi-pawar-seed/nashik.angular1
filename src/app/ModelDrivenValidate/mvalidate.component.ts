import { Component } from "@angular/core"
import { Form, FormControl, FormGroup, Validators } from "@angular/forms"

@Component({
    selector:"mvalidate-comp",
    templateUrl:'./mvalidate.component.html'
})
export class MValidateComponent
{

    SignIn=new FormGroup({
        email : new FormControl('aa@gmail.com',[Validators.required,Validators.minLength(4)]),
        pwd : new FormControl(''),
        address:new FormGroup({
            street:new FormControl('mg road'),
            city:new FormControl('Nagar')
        })
    })


logform(f:any)
{
this.SignIn=f;
}

}

