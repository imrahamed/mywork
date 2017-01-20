import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AuthenticationService } from '../login/authentication.service';
import { IProduct } from './product';
import{Dates} from './dates'

@Injectable()
export class ProductService {
    private _productUrl = 'http://192.168.1.142:8080/';

    constructor(private _http: Http, private authenticationService: AuthenticationService) { }

    getProducts(): Observable<IProduct[]> {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this._productUrl + "arts/get",options)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    getStatus(colCode: number): Observable<IProduct[]> {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
        return this._http.get(this._productUrl+ "arts/get/"+colCode,options)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    getfillrate(colCode: number): Observable<IProduct[]> {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
        return this._http.get(this._productUrl+ "arts/get/status/"+colCode,options)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(colCode: number): Observable<IProduct> {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.colCode === colCode));
    }
    getFilling(colCode: number): Observable<IProduct[]> {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
        return this._http.get(this._productUrl+ "arts/get/filled/session/" + colCode,options)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    getStartDate(colCode: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.colCode === colCode));
    }
     getDate(colCode: number): Observable<Dates[]> {
         let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
        return this._http.get(this._productUrl+ "arts/get/first/" + colCode,options)
            .map((response: Response) => <Dates[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
