import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { RegisterComponent } from './register.component';

import { UserService } from './register.service';
import{AlertService} from './alert.service'

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent},
      
      
    ])
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    UserService,
    AlertService
  ]
})
export class RegisterModule {}
