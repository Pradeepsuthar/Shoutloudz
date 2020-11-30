import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CoachingDetailsComponent } from './pages/coaching-details/coaching-details.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"details", component:CoachingDetailsComponent},
  {path:"auth", component:AuthComponent, children:[
    {path:"", component:SigninComponent},
    {path:"signup", component:SignupComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
