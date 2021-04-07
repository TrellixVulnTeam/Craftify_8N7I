import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllComponent } from './all/all.component';
import { DiyComponent } from './diy/diy.component';
import { DrawingComponent } from './drawing/drawing.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { WoodworkComponent } from './woodwork/woodwork.component';

const routes: Routes = [
  {path:"",component:HomeComponent,
  children:[
    {path:"",component:AllComponent},
    {path:"drawing",component:DrawingComponent},
    {path:"diy",component:DiyComponent},
    {path:"woodwork",component:WoodworkComponent}
  ]
  },
  {path:"login",component:LoginComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"tutorials",component:TutorialsComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
0