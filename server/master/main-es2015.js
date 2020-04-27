(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");



class AppComponent {
    constructor() {
        this.title = 'k-master';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout");
    } }, directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _materials_materials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./materials/materials.module */ "./src/app/materials/materials.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _layout_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/login/login.component */ "./src/app/layout/login/login.component.ts");
/* harmony import */ var _layout_contents_contents_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/contents/contents.component */ "./src/app/layout/contents/contents.component.ts");
/* harmony import */ var _layout_controls_controls_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/controls/controls.component */ "./src/app/layout/controls/controls.component.ts");
/* harmony import */ var _layout_uploads_uploads_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/uploads/uploads.component */ "./src/app/layout/uploads/uploads.component.ts");
/* harmony import */ var _layout_uploads_modal_upload_modal_upload_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/uploads/modal/upload-modal/upload-modal.component */ "./src/app/layout/uploads/modal/upload-modal/upload-modal.component.ts");
/* harmony import */ var _layout_uploads_modal_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/uploads/modal/delete-modal/delete-modal.component */ "./src/app/layout/uploads/modal/delete-modal/delete-modal.component.ts");
/* harmony import */ var _layout_uploads_modal_preview_modal_preview_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/uploads/modal/preview-modal/preview-modal.component */ "./src/app/layout/uploads/modal/preview-modal/preview-modal.component.ts");
/* harmony import */ var _layout_uploads_modal_import_modal_import_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/uploads/modal/import-modal/import-modal.component */ "./src/app/layout/uploads/modal/import-modal/import-modal.component.ts");
/* harmony import */ var _directive_uppercase_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directive/uppercase.directive */ "./src/app/directive/uppercase.directive.ts");




















const path = 'http://' + window.location.hostname + ':3003';
const config = { url: path, options: {} };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["SocketIoModule"].forRoot(config),
            _materials_materials_module__WEBPACK_IMPORTED_MODULE_5__["MaterialsModule"],
            _services_services_module__WEBPACK_IMPORTED_MODULE_6__["ServicesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
        _layout_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
        _layout_contents_contents_component__WEBPACK_IMPORTED_MODULE_10__["ContentsComponent"],
        _layout_controls_controls_component__WEBPACK_IMPORTED_MODULE_11__["ControlsComponent"],
        _layout_uploads_uploads_component__WEBPACK_IMPORTED_MODULE_12__["UploadsComponent"],
        _layout_uploads_modal_upload_modal_upload_modal_component__WEBPACK_IMPORTED_MODULE_13__["UploadModalComponent"],
        _layout_uploads_modal_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_14__["DeleteModalComponent"],
        _layout_uploads_modal_preview_modal_preview_modal_component__WEBPACK_IMPORTED_MODULE_15__["PreviewModalComponent"],
        _layout_uploads_modal_import_modal_import_modal_component__WEBPACK_IMPORTED_MODULE_16__["ImportModalComponent"],
        _directive_uppercase_directive__WEBPACK_IMPORTED_MODULE_17__["UppercaseDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["SocketIoModule"], _materials_materials_module__WEBPACK_IMPORTED_MODULE_5__["MaterialsModule"],
        _services_services_module__WEBPACK_IMPORTED_MODULE_6__["ServicesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                    _layout_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                    _layout_contents_contents_component__WEBPACK_IMPORTED_MODULE_10__["ContentsComponent"],
                    _layout_controls_controls_component__WEBPACK_IMPORTED_MODULE_11__["ControlsComponent"],
                    _layout_uploads_uploads_component__WEBPACK_IMPORTED_MODULE_12__["UploadsComponent"],
                    _layout_uploads_modal_upload_modal_upload_modal_component__WEBPACK_IMPORTED_MODULE_13__["UploadModalComponent"],
                    _layout_uploads_modal_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_14__["DeleteModalComponent"],
                    _layout_uploads_modal_preview_modal_preview_modal_component__WEBPACK_IMPORTED_MODULE_15__["PreviewModalComponent"],
                    _layout_uploads_modal_import_modal_import_modal_component__WEBPACK_IMPORTED_MODULE_16__["ImportModalComponent"],
                    _directive_uppercase_directive__WEBPACK_IMPORTED_MODULE_17__["UppercaseDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["SocketIoModule"].forRoot(config),
                    _materials_materials_module__WEBPACK_IMPORTED_MODULE_5__["MaterialsModule"],
                    _services_services_module__WEBPACK_IMPORTED_MODULE_6__["ServicesModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/directive/uppercase.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directive/uppercase.directive.ts ***!
  \**************************************************/
/*! exports provided: UppercaseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UppercaseDirective", function() { return UppercaseDirective; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class UppercaseDirective {
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /** Trata as teclas */
    onKeyDown(evt) {
        const keyCode = evt.keyCode;
        const key = evt.key;
        if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["Z"]) {
            const value = this._el.nativeElement.value.toUpperCase();
            this._renderer.setProperty(this._el.nativeElement, 'value', value);
            this._onChange(value);
            evt.preventDefault();
        }
    }
    onBlur() {
        this._touched();
    }
    /** Implementation for ControlValueAccessor interface */
    writeValue(value) {
        this._renderer.setProperty(this._el.nativeElement, 'value', value);
    }
    /** Implementation for ControlValueAccessor interface */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /** Implementation for ControlValueAccessor interface */
    registerOnTouched(fn) {
        this._touched = fn;
    }
    /** Implementation for ControlValueAccessor interface */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._el.nativeElement, 'disabled', isDisabled);
    }
}
UppercaseDirective.ɵfac = function UppercaseDirective_Factory(t) { return new (t || UppercaseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
UppercaseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: UppercaseDirective, selectors: [["", "appUppercase", ""]], hostBindings: function UppercaseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function UppercaseDirective_keyup_HostBindingHandler($event) { return ctx.onKeyDown($event); })("blur", function UppercaseDirective_blur_HostBindingHandler($event) { return ctx.onBlur($event); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => UppercaseDirective),
                multi: true,
            },
        ])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UppercaseDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[appUppercase]',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => UppercaseDirective),
                        multi: true,
                    },
                ],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keyup', ['$event']]
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['blur', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/layout/contents/contents.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/contents/contents.component.ts ***!
  \*******************************************************/
/*! exports provided: ContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsComponent", function() { return ContentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/content.service */ "./src/app/services/content.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");




class ContentsComponent {
    constructor(contentService) {
        this.contentService = contentService;
    }
    ngOnInit() {
        this.contentService.latest().subscribe((result) => {
            console.log('contentService : ', result);
        });
    }
}
ContentsComponent.ɵfac = function ContentsComponent_Factory(t) { return new (t || ContentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"])); };
ContentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentsComponent, selectors: [["app-contents"]], decls: 5, vars: 0, consts: [[1, "layout"], ["color", "primary"], [1, "fill-remaining-space"]], template: function ContentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Karaoke List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"]], styles: [".layout[_ngcontent-%COMP%] {\n    padding: 20px;\n}\n\n.fill-remaining-space[_ngcontent-%COMP%] {\n    \n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbnRlbnRzL2NvbnRlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7K0NBQzJDO0lBQzNDLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29udGVudHMvY29udGVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LlxuIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgZmxleDogMSAxIGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contents',
                templateUrl: './contents.component.html',
                styleUrls: ['./contents.component.css']
            }]
    }], function () { return [{ type: _services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/controls/controls.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/controls/controls.component.ts ***!
  \*******************************************************/
/*! exports provided: ControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsComponent", function() { return ControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ControlsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ControlsComponent.ɵfac = function ControlsComponent_Factory(t) { return new (t || ControlsComponent)(); };
ControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlsComponent, selectors: [["app-controls"]], decls: 2, vars: 0, template: function ControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "controls works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb250cm9scy9jb250cm9scy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-controls',
                templateUrl: './controls.component.html',
                styleUrls: ['./controls.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _contents_contents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contents/contents.component */ "./src/app/layout/contents/contents.component.ts");
/* harmony import */ var _uploads_uploads_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uploads/uploads.component */ "./src/app/layout/uploads/uploads.component.ts");











const _c0 = ["snav"];
function LayoutComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const nav_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.routeTo(nav_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nav_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nav_r4.name, " ");
} }
function LayoutComponent_app_contents_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-contents");
} }
function LayoutComponent_app_uploads_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-uploads");
} }
class LayoutComponent {
    constructor() {
        this.subMenuList = [{
                id: 1,
                icon: '',
                route: 'KList',
                name: 'Karaoke List'
            },
            {
                id: 2,
                icon: '',
                route: 'upload',
                name: 'Upload'
            }];
        this.currentSubMenu = this.subMenuList[0];
    }
    ngOnInit() {
    }
    routeTo(router) {
        this.snav.toggle();
        switch (router.route) {
            case 'KList':
                this.currentSubMenu = router;
                break;
            case 'upload':
                this.currentSubMenu = router;
                break;
            default:
                break;
        }
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], viewQuery: function LayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.snav = _t.first);
    } }, decls: 15, vars: 4, consts: [[1, "example-container"], ["color", "primary", 1, "example-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "example-app-name"], [1, "example-sidenav-container"], [1, "sideNav"], ["snav", ""], ["mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-list-item", "", 3, "click"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LayoutComponent_a_11_Template, 3, 1, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LayoutComponent_app_contents_13_Template, 1, 0, "app-contents", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LayoutComponent_app_uploads_14_Template, 1, 0, "app-uploads", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Karaoke Manager \u00A0>\u00A0", ctx.currentSubMenu.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subMenuList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSubMenu.route === "KList");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSubMenu.route === "upload");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _contents_contents_component__WEBPACK_IMPORTED_MODULE_8__["ContentsComponent"], _uploads_uploads_component__WEBPACK_IMPORTED_MODULE_9__["UploadsComponent"]], styles: [".example-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n.example-container[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n    \n    z-index: 2;\n}\n\nh1.example-app-name[_ngcontent-%COMP%] {\n    margin-left: 8px;\n}\n\n.example-sidenav-container[_ngcontent-%COMP%] {\n    flex: 1;\n}\n\n.example-sidenav-container[_ngcontent-%COMP%]   .sideNav[_ngcontent-%COMP%] {\n    width: 20%;\n}\n\n.footer[_ngcontent-%COMP%] {\n    height: 30px;\n    background: #7b1fa2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtBQUNaOztBQUVBO0lBQ0ksOEVBQThFO0lBQzlFLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgLmV4YW1wbGUtdG9vbGJhciB7XG4gICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xuICAgIHotaW5kZXg6IDI7XG59XG5cbmgxLmV4YW1wbGUtYXBwLW5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciAuc2lkZU5hdiB7XG4gICAgd2lkdGg6IDIwJTtcbn1cblxuLmZvb3RlciB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICM3YjFmYTI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.css']
            }]
    }], function () { return []; }, { snav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['snav', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/layout/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/uploads/modal/delete-modal/delete-modal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/uploads/modal/delete-modal/delete-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DeleteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteModalComponent", function() { return DeleteModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");








function DeleteModalComponent_div_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Deleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DeleteModalComponent_div_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteModalComponent_div_3_ng_template_4_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const file_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.remove(file_r19.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeleteModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeleteModalComponent_div_3_ng_container_3_Template, 6, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DeleteModalComponent_div_3_ng_template_4_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r20 + 1, ". ", file_r19.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.isSuccess[i_r20])("ngIfElse", _r22);
} }
class DeleteModalComponent {
    constructor(uploadService, dialogRef, data) {
        this.uploadService = uploadService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isSuccess = [];
        this.deleteList = [];
        if (Array.isArray(this.data)) {
            this.deleteList = this.data;
        }
        else {
            this.deleteList.push(this.data);
        }
        console.log(this.deleteList);
    }
    ngOnInit() {
    }
    remove(name) {
        this.deleteList = this.deleteList.filter(item => item.name !== name);
    }
    confirm() {
        this.deleteList.forEach((item, index) => {
            this.uploadService.delete_file(item).subscribe(data => {
                console.log(data);
                console.log(index);
                if (data.data.result === 'success') {
                    console.log('success');
                    this.isSuccess[index] = true;
                }
            });
        });
    }
    cancel() {
        this.dialogRef.close({ event: 'Cancel', data: '' });
    }
}
DeleteModalComponent.ɵfac = function DeleteModalComponent_Factory(t) { return new (t || DeleteModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8)); };
DeleteModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteModalComponent, selectors: [["app-delete-modal"]], decls: 11, vars: 1, consts: [["matDialogTitle", ""], ["style", "display: flex;", 4, "ngFor", "ngForOf"], [1, "fill-remaining-space"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [2, "display", "flex"], [4, "ngIf", "ngIfElse"], ["notSuccess", ""], ["aria-label", "success"], ["aria-label", "notSuccess", 3, "click"]], template: function DeleteModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeleteModalComponent_div_3_Template, 6, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteModalComponent_Template_button_click_6_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteModalComponent_Template_button_click_8_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.deleteList);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".fill-remaining-space[_ngcontent-%COMP%] {\n    \n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VwbG9hZHMvbW9kYWwvZGVsZXRlLW1vZGFsL2RlbGV0ZS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7K0NBQzJDO0lBQzNDLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdXBsb2Fkcy9tb2RhbC9kZWxldGUtbW9kYWwvZGVsZXRlLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cbiBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-modal',
                templateUrl: './delete-modal.component.html',
                styleUrls: ['./delete-modal.component.css']
            }]
    }], function () { return [{ type: _services_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/uploads/modal/import-modal/import-modal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/uploads/modal/import-modal/import-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ImportModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportModalComponent", function() { return ImportModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/__ivy_ngcc__/fesm2015/mat-video.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _directive_uppercase_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../directive/uppercase.directive */ "./src/app/directive/uppercase.directive.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
















//import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
class ImportModalComponent {
    constructor(uploadService, dialogRef, data) {
        this.uploadService = uploadService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.song = {};
        this.url = 'http://' + window.location.hostname + ':3004/';
        this.importData = {};
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            artist: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            genre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            album: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('NONE', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('NONE', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            filename: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            extension: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            sound: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('karaoke'),
        });
        this.importData = this.data;
        console.log('this.importData : ', this.importData);
    }
    ngOnInit() {
        // init form
        this.form.controls.title.setValue(this.importData.name.toUpperCase());
        this.form.controls.filename.setValue(this.importData.name);
        this.form.controls.path.setValue(this.importData.path);
        this.form.controls.extension.setValue(this.importData.extension);
        this.uploadService.duration(this.importData).subscribe((data) => {
            console.log(data);
            // init form
            this.form.controls.duration.setValue(data.data);
            this.form.controls.duration.disable();
        });
    }
    valuechange(newValue) {
        this.form.controls.title.setValue(newValue);
    }
    submit() {
        if (this.form.valid) {
            const toSend = {
                title: this.form.controls.title.value,
                artist: this.form.controls.artist.value,
                genre: this.form.controls.genre.value,
                album: this.form.controls.album.value,
                language: this.form.controls.language.value,
                country: this.form.controls.country.value,
                duration: this.form.controls.duration.value,
                extension: this.form.controls.extension.value,
                filename: this.form.controls.filename.value,
                path: this.form.controls.path.value,
                sound: this.form.controls.sound.value,
            };
            console.log(toSend);
            this.uploadService.import(toSend).subscribe((data) => {
                console.log(data);
            });
        }
    }
    cancel() {
        this.dialogRef.close({ event: 'Cancel', data: '' });
    }
}
ImportModalComponent.ɵfac = function ImportModalComponent_Factory(t) { return new (t || ImportModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8)); };
ImportModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImportModalComponent, selectors: [["app-import-modal"]], decls: 43, vars: 2, consts: [[1, "fixActionRow"], ["matDialogTitle", "", 2, "display", "flex"], [1, "fill-remaining-space"], ["mat-icon-button", "", "matTooltip", "Close", 3, "click"], [1, "media"], [1, "left"], [3, "src"], [1, "right"], [2, "height", "100%"], [2, "text-align", "center"], [3, "formGroup", "ngSubmit"], [2, "width", "100%"], ["type", "text", "matInput", "", "placeholder", "Title", "formControlName", "title", "appUppercase", "", 3, "input", "keypress"], ["myInput", ""], ["type", "text", "matInput", "", "placeholder", "Artist", "formControlName", "artist", "appUppercase", ""], ["type", "text", "matInput", "", "placeholder", "Genre", "formControlName", "genre", "appUppercase", ""], ["type", "text", "matInput", "", "placeholder", "Album", "formControlName", "album", "appUppercase", ""], ["type", "text", "matInput", "", "placeholder", "Language", "formControlName", "language", "appUppercase", ""], ["type", "text", "matInput", "", "placeholder", "Country", "formControlName", "country", "appUppercase", ""], [2, "padding-top", "10px", "text-align", "center"], ["type", "text", "matInput", "", "placeholder", "Duration (HH:MM:SS)", "formControlName", "duration"], ["formControlName", "sound"], ["checked", "", "value", "karaoke"], ["value", "mono"], ["type", "submit", "mat-raised-button", "", "color", "primary", 2, "width", "100%"], [1, "spacer"]], template: function ImportModalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportModalComponent_Template_button_click_4_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-video", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Content Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ImportModalComponent_Template_form_ngSubmit_15_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ImportModalComponent_Template_input_input_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx.valuechange(_r27.value); })("keypress", function ImportModalComponent_Template_input_keypress_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx.valuechange(_r27.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-subtitle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Video & Audio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-radio-group", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-radio-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Karaoke (L/R)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-radio-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "MONO (No Vocal)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url + ctx.importData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], mat_video__WEBPACK_IMPORTED_MODULE_7__["ɵb"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _directive_uppercase_directive__WEBPACK_IMPORTED_MODULE_11__["UppercaseDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioButton"]], styles: [".fixActionRow[_ngcontent-%COMP%] {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.spacer[_ngcontent-%COMP%] {\n    flex-grow: 1;\n}\n\n.fill-remaining-space[_ngcontent-%COMP%] {\n    \n    flex: 1 1 auto;\n}\n\n.media[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100%;\n}\n\n.media[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    flex: 1;\n}\n\n.media[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    flex: 1;\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VwbG9hZHMvbW9kYWwvaW1wb3J0LW1vZGFsL2ltcG9ydC1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7K0NBQzJDO0lBQzNDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdXBsb2Fkcy9tb2RhbC9pbXBvcnQtbW9kYWwvaW1wb3J0LW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4QWN0aW9uUm93IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3BhY2VyIHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LlxuIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5tZWRpYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZWRpYSAubGVmdCB7XG4gICAgZmxleDogMTtcbn1cblxuLm1lZGlhIC5yaWdodCB7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-import-modal',
                templateUrl: './import-modal.component.html',
                styleUrls: ['./import-modal.component.css'],
            }]
    }], function () { return [{ type: _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/uploads/modal/preview-modal/preview-modal.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/uploads/modal/preview-modal/preview-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PreviewModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewModalComponent", function() { return PreviewModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/__ivy_ngcc__/fesm2015/mat-video.js");









function PreviewModalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.url + ctx_r8.previewData.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PreviewModalComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-video", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.url + ctx_r9.previewData.name);
} }
function PreviewModalComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "audio", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.url + ctx_r10.previewData.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PreviewModalComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Not Supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PreviewModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.url = 'http://' + window.location.hostname + ':3004/';
        this.previewType = 'other';
        this.previewData = {};
        this.previewData = this.data;
    }
    ngOnInit() {
        console.log('Preview : ', this.previewData);
        this.previewType = this.checkExtension(this.previewData.extension);
        console.log(this.previewType);
    }
    checkExtension(file) {
        const extn = file.split('.').pop();
        const imageExtensions = new Set(['jpeg', 'jpg', 'png', 'gif']);
        const videoExtenstion = new Set(['mp4', 'mov']);
        const audioExtenstion = new Set(['mp3']);
        if (imageExtensions.has(extn.toLowerCase())) {
            return 'image';
        }
        else if (videoExtenstion.has(extn.toLowerCase())) {
            return 'video';
        }
        else if (audioExtenstion.has(extn.toLowerCase())) {
            return 'audio';
        }
        else {
            return 'other';
        }
    }
    cancel() {
        this.dialogRef.close({ event: 'Cancel', data: '' });
    }
}
PreviewModalComponent.ɵfac = function PreviewModalComponent_Factory(t) { return new (t || PreviewModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8)); };
PreviewModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewModalComponent, selectors: [["app-preview-modal"]], decls: 12, vars: 5, consts: [[1, "fixActionRow"], ["matDialogTitle", "", 2, "display", "flex"], [1, "fill-remaining-space"], ["mat-icon-button", "", "matTooltip", "Close", 3, "click"], [2, "display", "flex"], [4, "ngIf"], [3, "src"]], template: function PreviewModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewModalComponent_Template_button_click_4_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PreviewModalComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PreviewModalComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PreviewModalComponent_div_10_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PreviewModalComponent_div_11_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Preview \u00A0:\u00A0", ctx.previewData.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previewType === "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previewType === "video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previewType === "audio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previewType === "other");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], mat_video__WEBPACK_IMPORTED_MODULE_6__["ɵb"]], styles: [".fixActionRow[_ngcontent-%COMP%] {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.fill-remaining-space[_ngcontent-%COMP%] {\n    \n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VwbG9hZHMvbW9kYWwvcHJldmlldy1tb2RhbC9wcmV2aWV3LW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJOzhDQUMwQztJQUMxQyxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3VwbG9hZHMvbW9kYWwvcHJldmlldy1tb2RhbC9wcmV2aWV3LW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4QWN0aW9uUm93IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cbkV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgZmxleDogMSAxIGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-preview-modal',
                templateUrl: './preview-modal.component.html',
                styleUrls: ['./preview-modal.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/uploads/modal/upload-modal/upload-modal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/uploads/modal/upload-modal/upload-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UploadModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModalComponent", function() { return UploadModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");











function UploadModalComponent_div_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function UploadModalComponent_div_14_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadModalComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UploadModalComponent_div_14_ng_container_2_Template, 3, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UploadModalComponent_div_14_ng_template_3_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-progress-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.isSuccess[i_r14])("ngIfElse", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", i_r14 + 1, ". ", file_r13.name, " - ", file_r13.type, " - ", file_r13.size, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r12.valueUploaded[i_r14]);
} }
class UploadModalComponent {
    constructor(uploadService, dialogRef, data) {
        this.uploadService = uploadService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fileData = [];
        this.uploadId = 0;
        this.valueUploaded = [];
        this.isSuccess = [];
        this.uplodedSuccessFile = [];
    }
    ngOnInit() {
    }
    send() {
        const formData = new FormData();
        formData.append('file', this.fileData[this.uploadId]);
        this.uploadService.upload_file(formData).subscribe(events => {
            if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                console.log("uploadId: ", this.uploadId);
                console.log("Upload progress: ", Math.round((events.loaded / events.total) * 100) + "%");
                this.valueUploaded[this.uploadId] = Math.round((events.loaded / events.total) * 100);
            }
            else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                // console.log(events);
                if (events.status === 200) {
                    // Upload success
                    this.isSuccess[this.uploadId] = true;
                    console.log('Upload Success : ', this.fileData[this.uploadId]);
                    const check = events.body;
                    console.log(check);
                    this.nextUpload();
                }
                else {
                    // Error upload
                    this.isSuccess[this.uploadId] = false;
                    console.log('Fail to upload : ', +this.fileData[this.uploadId]);
                    this.nextUpload();
                }
            }
            else {
                console.log('Large File');
            }
        });
    }
    nextUpload() {
        this.uploadId++;
        if (this.uploadId < this.fileData.length) {
            this.send();
        }
        else {
            // Finish upload all files // Do something
            console.log('Finish upload all files');
        }
    }
    fileProgress(fileInput) {
        for (let i = 0; i < fileInput.target.files.length; i++) {
            this.fileData.push(fileInput.target.files[i]);
            console.log(this.fileData[i]);
        }
    }
    cancel() {
        this.dialogRef.close({ event: 'Cancel', data: this.uplodedSuccessFile });
    }
}
UploadModalComponent.ɵfac = function UploadModalComponent_Factory(t) { return new (t || UploadModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8)); };
UploadModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadModalComponent, selectors: [["app-upload-modal"]], decls: 20, vars: 1, consts: [["matDialogTitle", ""], [3, "ngSubmit"], [1, "form-group", "fixed"], ["for", "file", 1, "custom-file-upload"], ["type", "file", "id", "file", "multiple", "", 3, "change"], [1, "fill-remaining-space"], ["mat-raised-button", "", "color", "primary", 1, "right"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "right"], [4, "ngIf", "ngIfElse"], ["notSuccess", ""], ["mode", "determinate", "color", "primary", 3, "value"], ["aria-label", "success"], ["aria-label", "notSuccess"]], template: function UploadModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UploadModalComponent_Template_form_ngSubmit_3_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "file_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Select Files ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadModalComponent_Template_input_change_9_listener($event) { return ctx.fileProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UploadModalComponent_div_14_Template, 9, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadModalComponent_Template_button_click_17_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fileData);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"]], styles: ["input[type=\"file\"][_ngcontent-%COMP%] {\n    display: none;\n}\n\n.custom-file-upload[_ngcontent-%COMP%] {\n    background-color: #7b1fa2;\n    display: inline-block;\n    padding: 6px 12px;\n    cursor: pointer;\n}\n\n.right[_ngcontent-%COMP%] {\n    float: right;\n}\n\n.fixed[_ngcontent-%COMP%] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 999;\n}\n\n.fill-remaining-space[_ngcontent-%COMP%] {\n    \n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VwbG9hZHMvbW9kYWwvdXBsb2FkLW1vZGFsL3VwbG9hZC1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sWUFBWTtBQUNoQjs7QUFFQTtJQUNJO2lEQUM2QztJQUM3QyxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3VwbG9hZHMvbW9kYWwvdXBsb2FkLW1vZGFsL3VwbG9hZC1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jdXN0b20tZmlsZS11cGxvYWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YjFmYTI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5maXhlZCB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cbiAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgZmxleDogMSAxIGF1dG87XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-modal',
                templateUrl: './upload-modal.component.html',
                styleUrls: ['./upload-modal.component.css']
            }]
    }], function () { return [{ type: _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/uploads/uploads.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/uploads/uploads.component.ts ***!
  \*****************************************************/
/*! exports provided: UploadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsComponent", function() { return UploadsComponent; });
/* harmony import */ var _modal_preview_modal_preview_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/preview-modal/preview-modal.component */ "./src/app/layout/uploads/modal/preview-modal/preview-modal.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _modal_upload_modal_upload_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/upload-modal/upload-modal.component */ "./src/app/layout/uploads/modal/upload-modal/upload-modal.component.ts");
/* harmony import */ var _modal_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/delete-modal/delete-modal.component */ "./src/app/layout/uploads/modal/delete-modal/delete-modal.component.ts");
/* harmony import */ var _modal_import_modal_import_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/import-modal/import-modal.component */ "./src/app/layout/uploads/modal/import-modal/import-modal.component.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

















function UploadsComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadsComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.openDialog("delete", ctx_r44.currentSelectedContent); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u00A0 Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "font-size": "18px", "width": "10%" }; };
const _c1 = function (a0, a1) { return { "checkboxselect": a0, "checkboxdiselect": a1 }; };
function UploadsComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UploadsComponent_th_16_Template_mat_checkbox_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.masterSelected = $event; })("change", function UploadsComponent_th_16_Template_mat_checkbox_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.selectMasterEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r30.masterSelected, !ctx_r30.masterSelected))("ngModel", ctx_r30.masterSelected);
} }
const _c2 = function () { return { "text-align": "center" }; };
function UploadsComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UploadsComponent_td_17_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const row_r49 = ctx.$implicit; return row_r49.is_selected = $event; })("change", function UploadsComponent_td_17_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const row_r49 = ctx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.selectListContentEvent(row_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, row_r49.is_selected, !row_r49.is_selected))("ngModel", row_r49.is_selected);
} }
const _c3 = function () { return { "font-size": "18px", "width": "25%" }; };
function UploadsComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c3));
} }
function UploadsComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r53.name, "");
} }
const _c4 = function () { return { "font-size": "18px", "text-align": "center", "width": "10%" }; };
function UploadsComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c4));
} }
function UploadsComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r54.type, "");
} }
const _c5 = function () { return { "font-size": "18px", "text-align": "center", "width": "15%" }; };
function UploadsComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c5));
} }
function UploadsComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r55.size, "");
} }
function UploadsComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Extension ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c4));
} }
function UploadsComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r56.extension, "");
} }
const _c6 = function () { return { "font-size": "18px", "text-align": "center", "width": "20%" }; };
function UploadsComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c6));
} }
function UploadsComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadsComponent_td_32_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const row_r57 = ctx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r58.openDialog("preview", row_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u00A0 Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadsComponent_td_32_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const row_r57 = ctx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r60.openDialog("rename", row_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u00A0 Rename ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadsComponent_td_32_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const row_r57 = ctx.$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r61.openDialog("import", row_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " \u00A0 Import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadsComponent_td_32_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const row_r57 = ctx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r62.openDialog("delete", row_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " \u00A0 Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
} }
function UploadsComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 29);
} }
function UploadsComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 30);
} }
class UploadsComponent {
    constructor(uploadService, dialog) {
        this.uploadService = uploadService;
        this.dialog = dialog;
        this.tableHeader = [
            'select',
            'name',
            'type',
            'size',
            'extension',
            'action',
        ];
        this.currentSelectedContent = [];
    }
    ngOnInit() {
        this.uploadService.list().subscribe((result) => {
            console.log(result);
            this.uploadList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](result.data.children);
        });
        this.currentSelectedContent = [];
    }
    selectMasterEvent() {
        console.log('Select All : ' + this.masterSelected);
        if (this.masterSelected) {
            for (const item of this.uploadList.data) {
                item.is_selected = this.masterSelected;
                this.selectListContentEvent(item);
            }
        }
        else {
            for (const item of this.uploadList.data) {
                item.is_selected = this.masterSelected;
                this.selectListContentEvent(item);
            }
        }
    }
    selectListContentEvent(content) {
        if (content.is_selected) {
            if (this.currentSelectedContent.length === 0) {
                this.currentSelectedContent.push(content);
            }
            else {
                const check = this.currentSelectedContent.find(item => item.name === content.name);
                if (check === undefined) {
                    this.currentSelectedContent.push(content);
                }
            }
        }
        else {
            this.currentSelectedContent = this.currentSelectedContent.filter(item => item.name !== content.name);
        }
    }
    openDialog(type, sendData) {
        let dialogRef;
        switch (type) {
            case 'upload':
                dialogRef = this.dialog.open(_modal_upload_modal_upload_modal_component__WEBPACK_IMPORTED_MODULE_3__["UploadModalComponent"], {
                    width: '70%',
                    height: '70%',
                    data: sendData,
                });
                break;
            case 'delete':
                dialogRef = this.dialog.open(_modal_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteModalComponent"], {
                    width: 'auto',
                    height: 'auto',
                    data: sendData,
                });
                break;
            case 'preview':
                dialogRef = this.dialog.open(_modal_preview_modal_preview_modal_component__WEBPACK_IMPORTED_MODULE_0__["PreviewModalComponent"], {
                    width: 'auto',
                    height: 'auto',
                    data: sendData,
                });
                break;
            case 'import':
                dialogRef = this.dialog.open(_modal_import_modal_import_modal_component__WEBPACK_IMPORTED_MODULE_5__["ImportModalComponent"], {
                    width: '80%',
                    height: '80%',
                    data: sendData,
                });
                break;
            default:
                break;
        }
        dialogRef.afterClosed().subscribe((result) => {
            const incoming = result;
            switch (type) {
                case 'upload':
                    console.log('UploadFile Incomming : ', incoming);
                    this.ngOnInit();
                    break;
                case 'delete':
                    console.log('Delete Incomming : ', incoming);
                    this.ngOnInit();
                    break;
                case 'preview':
                    console.log('Delete Incomming : ', incoming);
                    break;
                case 'import':
                    console.log('Import Incomming : ', incoming);
                    this.ngOnInit();
                    break;
                default:
                    break;
            }
        });
    }
}
UploadsComponent.ɵfac = function UploadsComponent_Factory(t) { return new (t || UploadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
UploadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadsComponent, selectors: [["app-uploads"]], viewQuery: function UploadsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 35, vars: 5, consts: [[1, "layout"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Refresh", 3, "click"], [1, "fill-remaining-space"], ["mat-icon-button", "", "matTooltip", "Delete", "style", "width: 100px;", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Upload file", 2, "width", "100px", 3, "click"], [1, "tableContainer"], ["mat-table", "", 1, "tableStyle", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngStyle", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "type"], ["matColumnDef", "size"], ["matColumnDef", "extension"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-icon-button", "", "matTooltip", "Delete", 2, "width", "100px", 3, "click"], ["mat-header-cell", "", 3, "ngStyle"], ["name", "list_name", "value", "m1", 3, "ngClass", "ngModel", "ngModelChange", "change"], ["mat-cell", "", 3, "ngStyle"], ["name", "list_name", "value", "row.id", 3, "ngClass", "ngModel", "ngModelChange", "change"], ["mat-cell", ""], ["mat-raised-button", "", "matTooltip", "Play", "color", "primary", 1, "menu-button", 3, "click"], ["mat-raised-button", "", "matTooltip", "Rename", "color", "primary", 1, "menu-button", 3, "click"], ["mat-raised-button", "", "matTooltip", "Import to Karaoke", "color", "primary", 1, "menu-button", 3, "click"], ["mat-raised-button", "", "matTooltip", "Delete", "color", "primary", 1, "menu-button", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function UploadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadsComponent_Template_button_click_4_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UploadsComponent_button_8_Template, 4, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadsComponent_Template_button_click_9_listener() { return ctx.openDialog("upload", ""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "file_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " \u00A0 Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UploadsComponent_th_16_Template, 3, 7, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UploadsComponent_td_17_Template, 2, 7, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UploadsComponent_th_19_Template, 2, 2, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UploadsComponent_td_20_Template, 3, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, UploadsComponent_th_22_Template, 2, 2, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UploadsComponent_td_23_Template, 3, 3, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](24, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, UploadsComponent_th_25_Template, 2, 2, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UploadsComponent_td_26_Template, 3, 3, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](27, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, UploadsComponent_th_28_Template, 2, 2, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, UploadsComponent_td_29_Template, 3, 3, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](30, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, UploadsComponent_th_31_Template, 2, 2, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, UploadsComponent_td_32_Template, 17, 2, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, UploadsComponent_tr_33_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, UploadsComponent_tr_34_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentSelectedContent.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.uploadList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.tableHeader)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.tableHeader);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".layout[_ngcontent-%COMP%] {\n    padding: 20px;\n}\n\n.fill-remaining-space[_ngcontent-%COMP%] {\n    \n    flex: 1 1 auto;\n}\n\n.tableContainer[_ngcontent-%COMP%] {\n    background: #cbcecc;\n    color: rgba(0, 0, 0, .87);\n    width: 100%;\n    height: calc(100vh - 224px) !important;\n    overflow: auto;\n}\n\n.tableStyle[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.menu-button[_ngcontent-%COMP%]:hover {\n    background-color: #fff;\n    ;\n    color: purple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VwbG9hZHMvdXBsb2Fkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO2lEQUM2QztJQUM3QyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7O0lBRXRCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdXBsb2Fkcy91cGxvYWRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cbiAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi50YWJsZUNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2NiY2VjYztcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuODcpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIyNHB4KSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGFibGVTdHlsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZW51LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICA7XG4gICAgY29sb3I6IHB1cnBsZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UploadsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-uploads',
                templateUrl: './uploads.component.html',
                styleUrls: ['./uploads.component.css'],
            }]
    }], function () { return [{ type: _services_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/materials/materials.module.ts":
/*!***********************************************!*\
  !*** ./src/app/materials/materials.module.ts ***!
  \***********************************************/
/*! exports provided: MaterialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsModule", function() { return MaterialsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/__ivy_ngcc__/fesm2015/mat-video.js");
/* harmony import */ var ngx_audio_player__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-audio-player */ "./node_modules/ngx-audio-player/__ivy_ngcc__/fesm2015/ngx-audio-player.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");























































class MaterialsModule {
}
MaterialsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialsModule });
MaterialsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialsModule_Factory(t) { return new (t || MaterialsModule)(); }, imports: [[
            // additional
            mat_video__WEBPACK_IMPORTED_MODULE_50__["MatVideoModule"],
            ngx_audio_player__WEBPACK_IMPORTED_MODULE_51__["NgxAudioPlayerModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_52__["ClickOutsideModule"],
            // CDK
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["A11yModule"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["BidiModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__["DragDropModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__["ObserversModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["PlatformModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__["BrowserAnimationsModule"],
            // angular
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"]
        ],
        // additional
        mat_video__WEBPACK_IMPORTED_MODULE_50__["MatVideoModule"],
        ngx_audio_player__WEBPACK_IMPORTED_MODULE_51__["NgxAudioPlayerModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_52__["ClickOutsideModule"],
        // CDK
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["BidiModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__["DragDropModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__["BrowserAnimationsModule"],
        // angular
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialsModule, { imports: [
        // additional
        mat_video__WEBPACK_IMPORTED_MODULE_50__["MatVideoModule"],
        ngx_audio_player__WEBPACK_IMPORTED_MODULE_51__["NgxAudioPlayerModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_52__["ClickOutsideModule"],
        // CDK
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["BidiModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__["DragDropModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__["BrowserAnimationsModule"],
        // angular
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"]], exports: [
        // additional
        mat_video__WEBPACK_IMPORTED_MODULE_50__["MatVideoModule"],
        ngx_audio_player__WEBPACK_IMPORTED_MODULE_51__["NgxAudioPlayerModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_52__["ClickOutsideModule"],
        // CDK
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["BidiModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__["DragDropModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__["BrowserAnimationsModule"],
        // angular
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    // additional
                    mat_video__WEBPACK_IMPORTED_MODULE_50__["MatVideoModule"],
                    ngx_audio_player__WEBPACK_IMPORTED_MODULE_51__["NgxAudioPlayerModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_52__["ClickOutsideModule"],
                    // CDK
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["A11yModule"],
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["BidiModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__["DragDropModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__["ObserversModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["PlatformModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__["BrowserAnimationsModule"],
                    // angular
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"]
                ],
                exports: [
                    // additional
                    mat_video__WEBPACK_IMPORTED_MODULE_50__["MatVideoModule"],
                    ngx_audio_player__WEBPACK_IMPORTED_MODULE_51__["NgxAudioPlayerModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_52__["ClickOutsideModule"],
                    // CDK
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["A11yModule"],
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["BidiModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__["DragDropModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__["ObserversModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__["OverlayModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["PlatformModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__["BrowserAnimationsModule"],
                    // angular
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/content.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/content.service.ts ***!
  \*********************************************/
/*! exports provided: ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ContentService {
    constructor(http) {
        this.http = http;
        this.url = 'http://' + window.location.hostname + ':3002';
        // Http Headers
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    latest() {
        return this.http.get(this.url + '/content/list');
    }
}
ContentService.ɵfac = function ContentService_Factory(t) { return new (t || ContentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContentService, factory: ContentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.service */ "./src/app/services/content.service.ts");





class ServicesModule {
}
ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesModule });
ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesModule_Factory(t) { return new (t || ServicesModule)(); }, providers: [
        _upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"],
        _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
        _content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    _upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"],
                    _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
                    _content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SocketService {
    constructor() { }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class UploadService {
    constructor(http) {
        this.http = http;
        this.url = 'http://' + window.location.hostname + ':3004';
        // Http Headers
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    list() {
        return this.http.get(this.url + '/upload/list');
    }
    delete_file(data) {
        return this.http.post(this.url + '/upload/delete', JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    upload_file(formData) {
        return this.http
            .post(this.url + '/upload/fileUpload', formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
    duration(inputPath) {
        return this.http.post(this.url + '/upload/duration', JSON.stringify(inputPath), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    import(data) {
        return this.http.post(this.url + '/upload/import', JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    // Error handling
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
}
UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UploadService, factory: UploadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/zandar/zan_karok/master/k-master/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map