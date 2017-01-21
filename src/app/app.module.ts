import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import {AuthGuard} from './login/auth.guard'

/* Feature Modules */
import { ProductModule } from './products/product.module';
import{LoginModule} from './login/login.module';
import{RegisterModule} from './register/register.module'
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    LoginModule,
    RegisterModule
    
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  providers: [
        AuthGuard
    ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
