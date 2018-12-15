import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {PostListComponent} from '../posts/post-list/post-list.component';
import {PostDetailsComponent} from '../posts/post-details/post-details.component';
import {LoginComponent} from '../auth/login/login.component';
import {SignupComponent} from '../auth/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: PostListComponent},
  {path: 'blog/:param', component: PostDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'}),],
  exports: [RouterModule]
})
export class RouteModuleRoutingModule { }
