import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttribComponent } from './AttributeDirectives/attrib1.component';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { MyComponent } from './CustomDirective/mycomp.component';
import { DataBind1 } from './DataBind1/databind1.component';
import { DataBind2 } from './DataBind2/databind2.component';
import { DemoIf1Comp } from './DemoIf1/demoif1.component';
import { PList1Component } from './DemoProd/prod_class.component';
import { Ass1Comp } from './DirAss/ass1.component';
import { Event1Component } from './EventHandling/event1.component';
import { Event2Component } from './EventHandling/event2.component';
import { Event3Component } from './EventHandling/event3.component';
import { Event4Component } from './EventHandling/event4.component';
import { FirstComp } from './FirstComponent/first.component';
import { ChildComp } from './NestedComponent/child.component';
import { Child2Comp } from './NestedComponent/child2.component';
import { ParentComp } from './NestedComponent/parent.component';
import { EmpListComponent } from './ngForDemo/ngfor.component';
import { OChildComp } from './OutputDecor/ochild.component';
import { OParentComp } from './OutputDecor/oparent.component';
import { PipeExample } from './PipeExample/pipeex.component';
import { RaisePipe } from './PipeExample/raiseto.pipe';
import { ProdComp } from './ProductComponent/prodcomp.component';
import { HomeComponent } from './RoutingDemo/home.component';
import { MessagesComponent } from './RoutingDemo/messages.component';
import { NotFoundComponent } from './RoutingDemo/notfound.component';
import { PhotosComponent } from './RoutingDemo/photos.component';
import { SecondComponent } from './second/second.component';
import { GreetService } from './ServiceDemo1/greet.service';
import { InfoService } from './ServiceDemo1/info.service';
import { UseGreetComponent } from './ServiceDemo1/usegreet.component';
import { UseInfoComponent } from './ServiceDemo1/useinfo.component';
import { SubModule1 } from './SubModule1/sub1.module';
import { SwitchComponent } from './SwitchDemo/ngswitch.component';
import { HttpClientModule } from '@angular/common/http';
import { Call1Component } from './CallingRest1/call1.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookData } from './InMemWeb/bookdata';
import { UseInMemoryComponent } from './InMemWeb/use-inmem.component';
import { MyService } from './InMemWeb/myservice.service';
import { HParent } from './HookDemo/hparent.component';
import { HChild } from './HookDemo/hchild.component';
import { TDriven1Component } from './TemplateDrivenDemo1/tdriven1.component';
import { TDriven2Component } from './TDriven2/StudComponent.component';
import { TValidateComponent } from './TDrivenValidate/tvalidate.component';
import { MDriven1Component } from './ModelDriven1/mdriven1.component';
import { MValidateComponent } from './ModelDrivenValidate/mvalidate.component';

@NgModule({
  declarations: [
    AppComponent, FirstComp, ProdComp, SecondComponent,ParentComp,ChildComp,
    Child2Comp, DemoIf1Comp,EmpListComponent,Ass1Comp, SwitchComponent,
    MyComponent, HighlightDirective, AttribComponent,PipeExample,RaisePipe,
    DataBind1,DataBind2,Event1Component,Event2Component,Event3Component,
    Event4Component,OParentComp,OChildComp,HomeComponent,MessagesComponent,PhotosComponent,
    NotFoundComponent, PList1Component,UseGreetComponent,UseInfoComponent,
    Call1Component,UseInMemoryComponent,HParent,HChild,TDriven1Component,
    TDriven2Component,TValidateComponent,MDriven1Component,MValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubModule1,
    FormsModule,
   HttpClientModule  ,
   ReactiveFormsModule,
   
   InMemoryWebApiModule.forRoot (BookData)
  ],
  providers: [GreetService,InfoService,MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
