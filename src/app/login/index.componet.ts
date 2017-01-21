import { Component } from '@angular/core';
import {User} from '../register/user';
import{AuthenticationService} from '../login/authentication.service'
@Component({
    templateUrl: './index.component.html'
})
export class IndexComponent {
    currentUser: any;
    public pageTitle: string = 'Welcome';
    constructor(private userService: AuthenticationService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    
}
