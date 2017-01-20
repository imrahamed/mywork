import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { LoginComponent } from './login.component';
import{IndexComponent} from './index.componet'
import { AuthenticationService } from './authentication.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent},
      {path:'index',component: IndexComponent}
      
    ])
  ],
  declarations: [
    LoginComponent,
    IndexComponent
  ],
  providers: [
    AuthenticationService
  ]
})
export class LoginModule {}
