import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeExample } from './PipeExample/pipeex.component';
import { HomeComponent } from './RoutingDemo/home.component';
import { MessagesComponent } from './RoutingDemo/messages.component';
import { NotFoundComponent } from './RoutingDemo/notfound.component';
import { PhotosComponent } from './RoutingDemo/photos.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
{path:'messages',component:MessagesComponent},
  {path:'photos',component:PhotosComponent},
  {path:'pipe1',component:PipeExample},
  {path:'aa',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
