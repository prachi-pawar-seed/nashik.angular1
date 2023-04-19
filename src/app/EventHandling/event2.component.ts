import { ThisReceiver } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector:'ev2-comp',
    templateUrl:'./event2.component.html'
})
export class Event2Component
{
  num1:number=0
  num2:number=0
  res:number=0
  res1:number=0

  op:string=""
  gender:string=""

  ans:string=""
  total=0

  add()
  {
  this.res = parseInt(this.num1.toString()) + parseInt(this.num2.toString())
  
  }

  calculate(state:boolean,val:string)
  {
    let price=parseFloat(val)
    if(state==true)
    this.total=this.total+price
    else
    this.total=this.total-price
  }
  add1(t1:any,t2:any)
  {
    this.num1=parseInt(t1)
    this.num2=parseInt(t2)
  this.res1=this.num1 +this.num2
  }

  show()
  {
    
  }
  check(sage:any)
  {
   let age = parseInt(sage)
   if(age >=18)
   this.ans="U can vote"
   else
   this.ans="U cannot vote"
  }
}