webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_app_error_handle__ = __webpack_require__("./src/common/app-error-handle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__github_followers_github_followers_component__ = __webpack_require__("./src/app/github-followers/github-followers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__github_followers_service__ = __webpack_require__("./src/app/github-followers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__posts_posts_component__ = __webpack_require__("./src/app/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__posts_service__ = __webpack_require__("./src/app/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notfound_notfound_component__ = __webpack_require__("./src/app/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__githubprofile_followers_githubprofile_followers_component__ = __webpack_require__("./src/app/githubprofile-followers/githubprofile-followers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__archives_archives_component__ = __webpack_require__("./src/app/archives/archives.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home1_home1_component__ = __webpack_require__("./src/app/home1/home1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__signup_form_signup_form_component__ = __webpack_require__("./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__changepassword_changepassword_component__ = __webpack_require__("./src/app/changepassword/changepassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__github_followers_github_followers_component__["a" /* GithubFollowersComponent */],
            __WEBPACK_IMPORTED_MODULE_8__posts_posts_component__["a" /* PostsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__githubprofile_followers_githubprofile_followers_component__["a" /* GithubprofileFollowersComponent */],
            __WEBPACK_IMPORTED_MODULE_11__notfound_notfound_component__["a" /* NotfoundComponent */],
            __WEBPACK_IMPORTED_MODULE_13__archives_archives_component__["a" /* ArchivesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home1_home1_component__["a" /* Home1Component */],
            __WEBPACK_IMPORTED_MODULE_15__signup_form_signup_form_component__["a" /* SignupFormComponent */],
            __WEBPACK_IMPORTED_MODULE_17__changepassword_changepassword_component__["a" /* ChangepasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_18__nav_nav_component__["a" /* NavComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_15__signup_form_signup_form_component__["a" /* SignupFormComponent */] },
                { path: 'followers', component: __WEBPACK_IMPORTED_MODULE_6__github_followers_github_followers_component__["a" /* GithubFollowersComponent */] },
                {
                    path: 'profile/:id/:login-name',
                    component: __WEBPACK_IMPORTED_MODULE_12__githubprofile_followers_githubprofile_followers_component__["a" /* GithubprofileFollowersComponent */]
                },
                { path: 'posts', component: __WEBPACK_IMPORTED_MODULE_8__posts_posts_component__["a" /* PostsComponent */] },
                { path: 'home', component: __WEBPACK_IMPORTED_MODULE_14__home1_home1_component__["a" /* Home1Component */] },
                { path: 'nav', component: __WEBPACK_IMPORTED_MODULE_18__nav_nav_component__["a" /* NavComponent */] },
                { path: 'archives/:year/:month', component: __WEBPACK_IMPORTED_MODULE_13__archives_archives_component__["a" /* ArchivesComponent */] },
                { path: 'changepassword', component: __WEBPACK_IMPORTED_MODULE_17__changepassword_changepassword_component__["a" /* ChangepasswordComponent */] }
                // { path: "**", component: NotfoundComponent }
            ])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__github_followers_service__["a" /* GithubFollowersService */],
            __WEBPACK_IMPORTED_MODULE_9__posts_service__["a" /* PostsService */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_0__common_app_error_handle__["a" /* AppErrorHandler */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/archives/archives.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/archives/archives.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Archive page of {{ y + \"/\" + month }}</h1>\n<button class=\"btn btn-warning\" (click)=\"getView()\">View</button>\n"

/***/ }),

/***/ "./src/app/archives/archives.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArchivesComponent = (function () {
    function ArchivesComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    ArchivesComponent.prototype.ngOnInit = function () {
        var m = this.route.snapshot.paramMap;
        this.y = +m.get("year");
        this.month = +m.get("month");
    };
    ArchivesComponent.prototype.getView = function () {
        this.router.navigate(["/home"]);
    };
    return ArchivesComponent;
}());
ArchivesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-archives",
        template: __webpack_require__("./src/app/archives/archives.component.html"),
        styles: [__webpack_require__("./src/app/archives/archives.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ArchivesComponent);

var _a, _b;
//# sourceMappingURL=archives.component.js.map

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"f\" (ngSubmit)=\"changePassword(f)\">\n  <div class=\"form-group\">\n    <label for=\"oldpassword\">Old Password:</label\n    ><input\n      type=\"password\"\n      class=\"form-control\"\n      formControlName=\"oldpassword\"\n      id=\"oldpassword\"\n    />\n  </div>\n  <div *ngIf=\"oldpassword.touched && oldpassword.invalid\">\n    <div *ngIf=\"oldpassword.errors.required\" class=\"alert alert-danger\">\n      Old Password is required.\n    </div>\n    <div\n      *ngIf=\"oldpassword.errors.oldPasswordShouldbeValid\"\n      class=\"alert alert-danger\"\n    >\n      OldPassword should match.\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"newpassword\">New Password:</label\n    ><input\n      type=\"password\"\n      class=\"form-control\"\n      formControlName=\"newpassword\"\n      id=\"newpassword\"\n    />\n  </div>\n  <div\n    *ngIf=\"newpassword.touched && newpassword.invalid\"\n    class=\"alert alert-danger\"\n  >\n    <div *ngIf=\"newpassword.errors.required\">New Password is required.</div>\n    <div *ngIf=\"newpassword.errors.pattern\">\n      Password must have atleast 6 characters with atleast one capital, one\n      small and a special character\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"confirmpassword\">Confirm Password:</label\n    ><input\n      type=\"password\"\n      class=\"form-control\"\n      formControlName=\"confirmpassword\"\n      id=\"confirmpassword\"\n    />\n  </div>\n  <div\n    *ngIf=\"confirmpassword.touched && confirmpassword.invalid\"\n    class=\"alert alert-danger\"\n  >\n    <div *ngIf=\"confirmpassword.errors.required\">\n      Confirm Password is required.\n    </div>\n  </div>\n  <div\n    *ngIf=\"confirmpassword.valid && f.invalid && f.errors.passwordShouldMatch\"\n    class=\"alert alert-danger\"\n  >\n    New and confirm password must be same.\n  </div>\n  <p>{{ f.value | json }}</p>\n  <button\n    class=\"btn btn-primary btn-sm\"\n    [disabled]=\"f.invalid\"\n    [routerLink]=\"['']\"\n  >\n    Change Password\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_uservalidators__ = __webpack_require__("./src/common/uservalidators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangepasswordComponent = (function () {
    function ChangepasswordComponent(fb) {
        this.f = fb.group({
            oldpassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__common_uservalidators__["a" /* UserValidations */].oldPasswordShouldbeValid),
            newpassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})')
            ]),
            confirmpassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required)
        }, { validator: __WEBPACK_IMPORTED_MODULE_0__common_uservalidators__["a" /* UserValidations */].passwordShouldMatch });
    }
    Object.defineProperty(ChangepasswordComponent.prototype, "oldpassword", {
        get: function () {
            return this.f.get('oldpassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangepasswordComponent.prototype, "newpassword", {
        get: function () {
            return this.f.get('newpassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangepasswordComponent.prototype, "confirmpassword", {
        get: function () {
            return this.f.get('confirmpassword');
        },
        enumerable: true,
        configurable: true
    });
    ChangepasswordComponent.prototype.changePassword = function (f) {
        console.log(f);
    };
    return ChangepasswordComponent;
}());
ChangepasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* Component */])({
        selector: 'changepassword',
        template: __webpack_require__("./src/app/changepassword/changepassword.component.html"),
        styles: [__webpack_require__("./src/app/changepassword/changepassword.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object])
], ChangepasswordComponent);

var _a;
//# sourceMappingURL=changepassword.component.js.map

/***/ }),

/***/ "./src/app/github-followers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_services_data_services__ = __webpack_require__("./src/services/data-services.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubFollowersService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubFollowersService = (function (_super) {
    __extends(GithubFollowersService, _super);
    function GithubFollowersService(http) {
        return _super.call(this, 'https://api.github.com/users/mosh-hamedani/followers', http) || this;
    }
    return GithubFollowersService;
}(__WEBPACK_IMPORTED_MODULE_2_services_data_services__["a" /* DataService */]));
GithubFollowersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GithubFollowersService);

var _a;
//# sourceMappingURL=github-followers.service.js.map

/***/ }),

/***/ "./src/app/github-followers/github-followers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".avatar {\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/github-followers/github-followers.component.html":
/***/ (function(module, exports) {

module.exports = "<home></home><router-outlet></router-outlet>\n<div *ngFor=\"let follower of followers\" class=\"media\">\n  <div class=\"media-left\">\n    <a href=\"#\">\n      <img\n        class=\"avatar media-object\"\n        src=\"{{ follower.avatar_url }}\"\n        alt=\"...\"\n      />\n    </a>\n  </div>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">\n      <a [routerLink]=\"['/profile', follower.id, follower.login]\">{{\n        follower.login\n      }}</a>\n    </h4>\n    <a href=\"follower.html_url\">{{ follower.html_url }}</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/github-followers/github-followers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_github_followers_service__ = __webpack_require__("./src/app/github-followers.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubFollowersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GithubFollowersComponent = (function () {
    function GithubFollowersComponent(service) {
        this.service = service;
    }
    GithubFollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll().subscribe(function (followers) { return (_this.followers = followers); });
    };
    return GithubFollowersComponent;
}());
GithubFollowersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'github-followers',
        template: __webpack_require__("./src/app/github-followers/github-followers.component.html"),
        styles: [__webpack_require__("./src/app/github-followers/github-followers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_github_followers_service__["a" /* GithubFollowersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_github_followers_service__["a" /* GithubFollowersService */]) === "function" && _a || Object])
], GithubFollowersComponent);

var _a;
//# sourceMappingURL=github-followers.component.js.map

/***/ }),

/***/ "./src/app/githubprofile-followers/githubprofile-followers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/githubprofile-followers/githubprofile-followers.component.html":
/***/ (function(module, exports) {

module.exports = "<home></home><router-outlet></router-outlet>\n<p>\n  githubprofile-followers works!\n</p>\n"

/***/ }),

/***/ "./src/app/githubprofile-followers/githubprofile-followers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubprofileFollowersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GithubprofileFollowersComponent = (function () {
    function GithubprofileFollowersComponent(route) {
        this.route = route;
    }
    GithubprofileFollowersComponent.prototype.ngOnInit = function () {
        this.route.paramMap.subscribe(function (p) {
            var pid = +p.get('id');
            console.log(pid);
        });
    };
    return GithubprofileFollowersComponent;
}());
GithubprofileFollowersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-githubprofile-followers',
        template: __webpack_require__("./src/app/githubprofile-followers/githubprofile-followers.component.html"),
        styles: [__webpack_require__("./src/app/githubprofile-followers/githubprofile-followers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], GithubprofileFollowersComponent);

var _a;
//# sourceMappingURL=githubprofile-followers.component.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button\n        type=\"button\"\n        class=\"navbar-toggle collapsed\"\n        data-toggle=\"collapse\"\n        data-target=\"#main-menu\"\n        aria-expanded=\"false\"\n      >\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div id=\"main-menu\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active current\">\n          <a routerLink=\"/home\"> Home</a>\n        </li>\n        <li routerLinkActive=\"active current\">\n          <a routerLink=\"/posts\"> Posts</a>\n        </li>\n        <li routerLinkActive=\"active current\">\n          <a routerLink=\"/followers\"> Followers</a>\n        </li>\n\n        <!-- <li routerLinkActive=\"active current\">\n          <a routerLink=\"**\"> NotFound</a>\n        </li> -->\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/home1/home1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home1/home1.component.html":
/***/ (function(module, exports) {

module.exports = "<home></home><router-outlet></router-outlet>\n<h1>Home Page</h1>\n<ul>\n  <li *ngFor=\"let archive of myarchives\">\n    <a [routerLink]=\"['/archives', archive.year, archive.month]\">{{\n      archive.year + \"/\" + archive.month\n    }}</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/home1/home1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Home1Component = (function () {
    function Home1Component() {
        this.myarchives = [
            { year: 2019, month: 1 },
            { year: 2019, month: 2 },
            { year: 2019, month: 3 }
        ];
    }
    Home1Component.prototype.ngOnInit = function () { };
    return Home1Component;
}());
Home1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home1',
        template: __webpack_require__("./src/app/home1/home1.component.html"),
        styles: [__webpack_require__("./src/app/home1/home1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Home1Component);

//# sourceMappingURL=home1.component.js.map

/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<home></home><router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("./src/app/nav/nav.component.html"),
        styles: [__webpack_require__("./src/app/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    return NotfoundComponent;
}());
NotfoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-notfound',
        template: __webpack_require__("./src/app/notfound/notfound.component.html"),
        styles: [__webpack_require__("./src/app/notfound/notfound.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotfoundComponent);

//# sourceMappingURL=notfound.component.js.map

/***/ }),

/***/ "./src/app/posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import "rxjs/Observable/throw";

var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    PostsService.prototype.deletePost = function (id) {
        return this.http.delete(this.url + '/' + id);
        // .pipe(
        //   map(res => res),
        //catch((error: Response) => {
        //     if (error.status === 404)
        //       return Observable.throw(new NotFoundError(error));
        //     return Observable.throw(new AppError(error));
        //   })
        // );
    };
    PostsService.prototype.getPosts = function () {
        return this.http.get(this.url);
    };
    PostsService.prototype.createPost = function (post) {
        return this.http.post(this.url, JSON.stringify(post));
        // .pipe(
        //   map(res => res),
        //   catchError((error: Response) => {
        //     if (error.status === 400)
        //       return Observable.throw(new BadRequest(error));
        //     return Observable.throw(new AppError(error));
        //   })
        // );
    };
    PostsService.prototype.updatePost = function (post) {
        return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
    };
    return PostsService;
}());
PostsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PostsService);

var _a;
//# sourceMappingURL=posts.service.js.map

/***/ }),

/***/ "./src/app/posts/posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<home></home><router-outlet></router-outlet>\n<input\n  type=\"text\"\n  class=\"form-control\"\n  #topic\n  (keyup.enter)=\"createPost(topic)\"\n/>\n<ul class=\"list-group\">\n  <li *ngFor=\"let post of posts\" class=\"list-group-item\">\n    <button class=\"btn btn-warning btn-sm\" (click)=\"deletePost(post)\">\n      Delete\n    </button>\n    {{ post.title }}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_service__ = __webpack_require__("./src/app/posts.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = (function () {
    function PostsComponent(service) {
        this.service = service;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPosts().subscribe(function (response) {
            _this.posts = response.json();
        }, function (error) {
            alert('An Unexpected Error Occured.');
            console.log(error);
        });
    };
    PostsComponent.prototype.createPost = function (input) {
        var _this = this;
        var post = { title: input.value };
        input.value = '';
        this.service.createPost(post).subscribe(function (response) {
            post['id'] = response.json().id;
            _this.posts.splice(0, 0, post);
            console.log(response.json());
        }, function (error) {
            alert('An Unexpected Error Occured.');
            console.log(error);
        });
    };
    PostsComponent.prototype.updatePost = function (post) {
        this.service.updatePost(post).subscribe(function (response) {
            console.log(response.json());
        }, function (error) {
            alert('An Unexpected Error Occured.');
            console.log(error);
        });
    };
    PostsComponent.prototype.deletePost = function (post) {
        var _this = this;
        var index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.service.deletePost('abc').subscribe(function (response) {
            alert('In response');
        }, function (error) {
            if (error.status === 404) {
                alert('Post has already been deleted.');
            }
            else {
                _this.posts.splice(0, 0, post);
                alert('An Unexpected Error Occured.');
            }
            console.log(error);
        });
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'posts',
        template: __webpack_require__("./src/app/posts/posts.component.html"),
        styles: [__webpack_require__("./src/app/posts/posts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */]) === "function" && _a || Object])
], PostsComponent);

var _a;
//# sourceMappingURL=posts.component.js.map

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"submit(form)\">\n  <h1>Please enter your details for successful sign in</h1>\n  <div class=\"form-group\">\n    <label for=\"username\">Username:</label\n    ><input type=\"text\" class=\"form-control\" formControlName=\"username\" />\n    <div\n      *ngIf=\"username.touched && username.invalid\"\n      class=\"alert alert-danger\"\n    >\n      <div *ngIf=\"username.errors.required\">\n        Username is required.\n      </div>\n      <div *ngIf=\"username.errors.minlength\">\n        Username should contain minimum\n        {{ username.errors.minlength.requiredLength }} characters\n      </div>\n      <div *ngIf=\"username.errors.pattern\">\n        Username cannot contain special characters.\n      </div>\n      <div *ngIf=\"username.errors.cannotContainSpace\">\n        Username cannot contain space.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Password:</label\n    ><input type=\"password\" class=\"form-control\" formControlName=\"password\" />\n    <div\n      *ngIf=\"password.touched && password.invalid\"\n      class=\"alert alert-danger\"\n    >\n      <div *ngIf=\"password.errors.required\">\n        Password is required.\n      </div>\n    </div>\n  </div>\n  <p>{{ form.value | json }}</p>\n\n  <div class=\"btn-toolbar\">\n    <button class=\"btn btn-primary btn-sm\" [disabled]=\"form.invalid\">\n      Sign Up\n    </button>\n    <button class=\"btn btn-primary btn-sm\" [routerLink]=\"['/**']\">\n      Forget Password\n    </button>\n    <button class=\"btn btn-primary btn-sm\" [routerLink]=\"['/changepassword']\">\n      Change Password\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_common_uservalidators__ = __webpack_require__("./src/common/uservalidators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupFormComponent = (function () {
    function SignupFormComponent(router) {
        this.router = router;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("^[A-Za-z0-9]+$"),
                __WEBPACK_IMPORTED_MODULE_2_common_uservalidators__["a" /* UserValidations */].cannotContainSpace
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required])
        });
    }
    Object.defineProperty(SignupFormComponent.prototype, "username", {
        get: function () {
            return this.form.get("username");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupFormComponent.prototype, "password", {
        get: function () {
            return this.form.get("password");
        },
        enumerable: true,
        configurable: true
    });
    SignupFormComponent.prototype.submit = function (x) {
        console.log(x);
        this.router.navigate(["/home"]);
    };
    return SignupFormComponent;
}());
SignupFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "signup-form",
        template: __webpack_require__("./src/app/signup-form/signup-form.component.html"),
        styles: [__webpack_require__("./src/app/signup-form/signup-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object])
], SignupFormComponent);

var _a;
//# sourceMappingURL=signup-form.component.js.map

/***/ }),

/***/ "./src/common/app-error-handle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorHandler; });
var AppErrorHandler = (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        alert('An unexpected error occured'), console.log(error);
    };
    return AppErrorHandler;
}());

//# sourceMappingURL=app-error-handle.js.map

/***/ }),

/***/ "./src/common/app-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppError; });
var AppError = (function () {
    function AppError(originalError) {
        this.originalError = originalError;
    }
    return AppError;
}());

//# sourceMappingURL=app-error.js.map

/***/ }),

/***/ "./src/common/bad-request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error__ = __webpack_require__("./src/common/app-error.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadRequest; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BadRequest = (function (_super) {
    __extends(BadRequest, _super);
    function BadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BadRequest;
}(__WEBPACK_IMPORTED_MODULE_0__app_error__["a" /* AppError */]));

//# sourceMappingURL=bad-request.js.map

/***/ }),

/***/ "./src/common/not-found-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error__ = __webpack_require__("./src/common/app-error.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundError; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NotFoundError = (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundError;
}(__WEBPACK_IMPORTED_MODULE_0__app_error__["a" /* AppError */]));

//# sourceMappingURL=not-found-error.js.map

/***/ }),

/***/ "./src/common/uservalidators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserValidations; });
var UserValidations = (function () {
    function UserValidations() {
    }
    UserValidations.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    };
    UserValidations.oldPasswordShouldbeValid = function (control) {
        return new Promise(function (resolve, reject) {
            if (control.value === '1234')
                resolve(null);
            else
                resolve({ oldPasswordShouldbeValid: true });
        });
    };
    UserValidations.passwordShouldMatch = function (control) {
        var npassword = control.get('newpassword').value;
        var cpassword = control.get('confirmpassword').value;
        if (npassword !== cpassword) {
            return { passwordShouldMatch: true };
        }
        return null;
    };
    return UserValidations;
}());

//# sourceMappingURL=uservalidators.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./src/services/data-services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_not_found_error__ = __webpack_require__("./src/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_app_error__ = __webpack_require__("./src/common/app-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_common_bad_request__ = __webpack_require__("./src/common/bad-request.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DataService = (function () {
    function DataService(url, http) {
        this.url = url;
        this.http = http;
    }
    DataService.prototype.getAll = function () {
        return this.http
            .get(this.url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.create = function (resource) {
        return this.http
            .post(this.url, JSON.stringify(resource))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.update = function (resource) {
        return this.http
            .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.delete = function (id) {
        return this.http
            .delete(this.url + '/' + id)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        if (error.status === 400)
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new __WEBPACK_IMPORTED_MODULE_9_common_bad_request__["a" /* BadRequest */](error.json()));
        if (error.status === 404)
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new __WEBPACK_IMPORTED_MODULE_0_common_not_found_error__["a" /* NotFoundError */](error));
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new __WEBPACK_IMPORTED_MODULE_1_common_app_error__["a" /* AppError */](error));
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [String, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data-services.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map