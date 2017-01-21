import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService} from './alert.service';
import {UserService} from './register.service'

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
error ='';
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(status => {
                
                   this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                
            },
            error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    }

