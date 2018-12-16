import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import {ReactiveFormsModule,FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RouteModuleRoutingModule} from './route-module/route-module-routing.module';
import { HomeComponent } from './home/home.component';
import { PostViewComponent } from './posts/post-view/post-view.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxEditorModule} from 'ngx-editor';
import { SafeHtmlPipe } from './posts/safe-html.pipe';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {AuthInterceptor} from './auth/auth-interceptor';
import { SignupComponent } from './auth/signup/signup.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { HireUsComponent } from './client/hire-us/hire-us.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HomeComponent,
    PostViewComponent,
    PostCreateComponent,
    PostDetailsComponent,
    SafeHtmlPipe,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    CreateEventComponent,
    HireUsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouteModuleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxEditorModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
