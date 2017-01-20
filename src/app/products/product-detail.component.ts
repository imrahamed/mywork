import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IProduct } from './product';
import {Dates} from './dates'
import { ProductService } from './product.service';
import * as moment from 'moment/moment';
@Component({
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Status';
    analytic: string = 'Overall Status';
    products: IProduct[];
    fillings: IProduct[];
    fillrate: IProduct[];
    errorMessage: string;
    private sub: Subscription;
    overAll: boolean = false;
    fill: boolean = false;
    start: boolean=false;
    colname:string;
    pro:IProduct;
    first:IProduct;
    a: number;
    srt: Dates[];
    

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {
    }
  
     togglefull(): void {
        this.overAll = !this.overAll;
        this.fill=false;
        this.start=false;
    }
    togglefill(): void {
        this.fill = !this.fill;
        this.overAll=false;
        this.start=false;
    }
    togglestart(): void {
        this.start = !this.start;
        this.overAll=false;
        this.fill=false;
    }
   

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let colCode = +params['colCode'];
                this.getStatus(colCode);
        });
        this.sub = this._route.params.subscribe(
            params => {
                let colCode = +params['colCode'];
                this.getFilling(colCode);
        });
        this.sub = this._route.params.subscribe(
            params => {
                let colCode = +params['colCode'];
                this.getProduct(colCode);
        });
       this.sub = this._route.params.subscribe(
            params => {
                let colCode = +params['colCode'];
                this.getfillrate(colCode);
        });
        this.sub = this._route.params.subscribe(
            params => {
                let colCode = +params['colCode'];
                this.getStartDate(colCode);
        });
        this.sub = this._route.params.subscribe(
            params => {
                let colCode = +params['colCode'];
                this.getDate(colCode);
        });
        
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getStatus(colCode: number) {
        this._productService.getStatus(colCode).subscribe(
            products => this.products = products, 
            error => this.errorMessage = <any>error);
            
    }
    getFilling(colCode: number){
        this._productService.getFilling(colCode).subscribe(
            fillings => this.fillings = fillings, 
            error => this.errorMessage = <any>error);
            
    }
     getProduct(colCode: number){
        this._productService.getProduct(colCode).subscribe(
            pro => this.pro = pro, 
            error => this.errorMessage = <any>error);
            
    }
   getfillrate(colCode : number){
        this._productService.getfillrate(colCode).subscribe(
            fillrate => this.fillrate = fillrate, 
            error => this.errorMessage = <any>error);

    }
getStartDate(colCode : number){
this._productService.getStartDate(colCode).subscribe(
            first => this.first = first, 
            error => this.errorMessage = <any>error);
            console.log(this.first)
}
getDate(colCode : number){
this._productService.getDate(colCode).subscribe(
            srt => this.srt = srt, 
            error => this.errorMessage = <any>error);
            console.log(this.srt)
}

    onBack(): void {
        this._router.navigate(['/arts']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}
