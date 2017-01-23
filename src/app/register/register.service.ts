import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from './user';
import{Observable} from 'rxjs'
import 'rxjs/add/operator/map'
@Injectable()
export class UserService {
    public status:string;
    constructor(private http: Http) { }


    create(user: User): Observable<boolean>{
        return this.http.post('http://127.0.0.1:3333/register', user)
.map((response: Response) => {
                // login successful if there's a jwt token in the response
                let status = response.json() && response.json().status;
                if (status) {
                    // set token property
                    this.status = status;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });    
}


    // private helper methods

   
}
