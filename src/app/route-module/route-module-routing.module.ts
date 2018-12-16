import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {PostListComponent} from '../posts/post-list/post-list.component';
import {PostDetailsComponent} from '../posts/post-details/post-details.component';
import {LoginComponent} from '../auth/login/login.component';
import {SignupComponent} from '../auth/signup/signup.component';
import {AuthGuard} from '../auth/auth.guard';
import {CreateEventComponent} from '../event/create-event/create-event.component';
import {HireUsComponent} from '../client/hire-us/hire-us.component';
import {SuccesComponent} from '../client/succes/succes.component';
import {ShowDemandsComponent} from '../client/show-demands/show-demands.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'create-event', component: CreateEventComponent},
  {path: 'create-event/:id', component: CreateEventComponent},
  {path: 'hire-us', component: HireUsComponent},
  {path: 'success', component: SuccesComponent},
  {path: 'show-demands', component: ShowDemandsComponent},
  {path: 'blog', component: PostListComponent},
  {path: 'blog/:param', component: PostDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'}),],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RouteModuleRoutingModule { }
