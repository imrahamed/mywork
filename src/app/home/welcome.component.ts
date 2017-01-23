import { Component } from '@angular/core';
import {User} from '../register/user';
import{AuthenticationService} from '../login/authentication.service'
@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    currentUser: any;
    public pageTitle: string = 'Welcome';
    constructor(private userService: AuthenticationService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    
}
