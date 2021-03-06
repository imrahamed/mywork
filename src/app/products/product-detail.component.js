"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        this.pageTitle = 'Status';
        this.analytic = 'Overall Status';
        this.overAll = false;
        this.fill = false;
    }
    ProductDetailComponent.prototype.togglefull = function () {
        this.overAll = !this.overAll;
        this.fill = false;
    };
    ProductDetailComponent.prototype.togglefill = function () {
        this.fill = !this.fill;
        this.overAll = false;
    };
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var colCode = +params['colCode'];
            _this.getStatus(colCode);
        });
        this.sub = this._route.params.subscribe(function (params) {
            var colCode = +params['colCode'];
            _this.getFilling(colCode);
        });
        this.sub = this._route.params.subscribe(function (params) {
            var colCode = +params['colCode'];
            _this.getProduct(colCode);
        });
        this.sub = this._route.params.subscribe(function (params) {
            var colCode = +params['colCode'];
            _this.getfillrate(colCode);
        });
        this.sub = this._route.params.subscribe(function (params) {
            var colCode = +params['colCode'];
            _this.getStartDate(colCode);
        });
        this.sub = this._route.params.subscribe(function (params) {
            var colCode = +params['colCode'];
            _this.getDate(colCode);
        });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductDetailComponent.prototype.getStatus = function (colCode) {
        var _this = this;
        this._productService.getStatus(colCode).subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.getFilling = function (colCode) {
        var _this = this;
        this._productService.getFilling(colCode).subscribe(function (fillings) { return _this.fillings = fillings; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.getProduct = function (colCode) {
        var _this = this;
        this._productService.getProduct(colCode).subscribe(function (pro) { return _this.pro = pro; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.getfillrate = function (colCode) {
        var _this = this;
        this._productService.getfillrate(colCode).subscribe(function (fillrate) { return _this.fillrate = fillrate; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.getStartDate = function (colCode) {
        var _this = this;
        this._productService.getStartDate(colCode).subscribe(function (first) { return _this.first = first; }, function (error) { return _this.errorMessage = error; });
        console.log(this.first);
    };
    ProductDetailComponent.prototype.getDate = function (colCode) {
        var _this = this;
        this._productService.getDate(colCode).subscribe(function (srt) { return _this.srt = srt; }, function (error) { return _this.errorMessage = error; });
        console.log(this.srt);
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/arts']);
    };
    ProductDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product Detail: ' + message;
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        product_service_1.ProductService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map