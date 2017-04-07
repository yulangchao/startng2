webpackHotUpdate(3,{

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n/**\r\n * Created by Tareq Boulakjar. from angulartypescript.com\r\n */\r\nvar core_1 = __webpack_require__(2);\r\nvar common_1 = __webpack_require__(18);\r\nvar slide_component_1 = __webpack_require__(218);\r\nvar carousel_component_1 = __webpack_require__(123);\r\n/*Angular 2 Carousel - Gallery*/\r\nvar Angular2Carousel = (function () {\r\n    function Angular2Carousel() {\r\n        //The time to show the next photo\r\n        this.NextPhotoInterval = 5000;\r\n        //Looping or not\r\n        this.noLoopSlides = true;\r\n        //Photos\r\n        this.slides = [];\r\n        this.addNewSlide();\r\n    }\r\n    Angular2Carousel.prototype.addNewSlide = function () {\r\n        this.slides.push({ image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' });\r\n    };\r\n    Angular2Carousel.prototype.removeLastSlide = function () {\r\n        this.slides.pop();\r\n    };\r\n    Angular2Carousel = __decorate([\r\n        core_1.Component({\r\n            selector: 'app',\r\n            template: \"\\n                    <div class=\\\"row slide\\\">\\n                      <div class=\\\"col-md-12\\\">\\n                        <carousel [interval]=\\\"NextPhotoInterval\\\" [noWrap]=\\\"noLoopSlides\\\">\\n                          <slide *ngFor=\\\"#slidez of slides; #index=index\\\"\\n                                 [active]=\\\"slidez.active\\\">\\n                            <img class=\\\"img-responsive\\\" [src]=\\\"slidez.image\\\" style=\\\"margin:auto;\\\">\\n\\n                            <div class=\\\"carousel-caption\\\">\\n                              <h3 style=\\\"background-color: transparent;color: white;\\\">Slide {{index + 1}}</h3>\\n                              <p  style=\\\"background-color: transparent;color: white;\\\">{{slidez.text}}</p>\\n                            </div>\\n                          </slide>\\n                        </carousel>\\n                      </div>\\n                    </div>\\n\\n             \",\r\n            directives: [slide_component_1.Slide, carousel_component_1.Carousel, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],\r\n        }), \r\n        __metadata('design:paramtypes', [])\r\n    ], Angular2Carousel);\r\n    return Angular2Carousel;\r\n}());\r\nexports.Angular2Carousel = Angular2Carousel;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAvZmlyc3RwYWdlL2Nhcm91c2VsLnRzPzc5MDciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgVGFyZXEgQm91bGFramFyLiBmcm9tIGFuZ3VsYXJ0eXBlc2NyaXB0LmNvbVxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQge1NsaWRlfSBmcm9tICcuL3NsaWRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q2Fyb3VzZWx9IGZyb20gJy4vY2Fyb3VzZWwuY29tcG9uZW50JztcclxuXHJcblxyXG4vKkFuZ3VsYXIgMiBDYXJvdXNlbCAtIEdhbGxlcnkqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjYXJvdXNlbCBbaW50ZXJ2YWxdPVwiTmV4dFBob3RvSW50ZXJ2YWxcIiBbbm9XcmFwXT1cIm5vTG9vcFNsaWRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzbGlkZSAqbmdGb3I9XCIjc2xpZGV6IG9mIHNsaWRlczsgI2luZGV4PWluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGl2ZV09XCJzbGlkZXouYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBbc3JjXT1cInNsaWRlei5pbWFnZVwiIHN0eWxlPVwibWFyZ2luOmF1dG87XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7Y29sb3I6IHdoaXRlO1wiPlNsaWRlIHt7aW5kZXggKyAxfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtjb2xvcjogd2hpdGU7XCI+e3tzbGlkZXoudGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbU2xpZGUsQ2Fyb3VzZWwsIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXIyQ2Fyb3VzZWwgIHtcclxuICAgIC8vVGhlIHRpbWUgdG8gc2hvdyB0aGUgbmV4dCBwaG90b1xyXG4gICAgcHJpdmF0ZSBOZXh0UGhvdG9JbnRlcnZhbDpudW1iZXIgPSA1MDAwO1xyXG4gICAgLy9Mb29waW5nIG9yIG5vdFxyXG4gICAgcHJpdmF0ZSBub0xvb3BTbGlkZXM6Ym9vbGVhbiA9IHRydWU7XHJcbiAgICAvL1Bob3Rvc1xyXG4gICAgcHJpdmF0ZSBzbGlkZXM6QXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYWRkTmV3U2xpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZE5ld1NsaWRlKCkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVzLnB1c2goXHJcbiAgICAgICAgICAgIHtpbWFnZTonaHR0cDovL3d3dy5hbmd1bGFydHlwZXNjcmlwdC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDMvY2FyMS5qcGcnLHRleHQ6J0JNVyAxJ30sXHJcbiAgICAgICAgICAgIHtpbWFnZTonaHR0cDovL3d3dy5hbmd1bGFydHlwZXNjcmlwdC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDMvY2FyMi5qcGcnLHRleHQ6J0JNVyAyJ30sXHJcbiAgICAgICAgICAgIHtpbWFnZTonaHR0cDovL3d3dy5hbmd1bGFydHlwZXNjcmlwdC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDMvY2FyMy5qcGcnLHRleHQ6J0JNVyAzJ30sXHJcbiAgICAgICAgICAgIHtpbWFnZTonaHR0cDovL3d3dy5hbmd1bGFydHlwZXNjcmlwdC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDMvY2FyNC5qcGcnLHRleHQ6J0JNVyA0J30sXHJcbiAgICAgICAgICAgIHtpbWFnZTonaHR0cDovL3d3dy5hbmd1bGFydHlwZXNjcmlwdC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDMvY2FyNS5qcGcnLHRleHQ6J0JNVyA1J30sXHJcbiAgICAgICAgICAgIHtpbWFnZTonaHR0cDovL3d3dy5hbmd1bGFydHlwZXNjcmlwdC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDMvY2FyNi5qcGcnLHRleHQ6J0JNVyA2J31cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlTGFzdFNsaWRlKCkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVzLnBvcCgpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hcHAvZmlyc3RwYWdlL2Nhcm91c2VsLnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBdUJBO0FBUUE7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBL0NBO0FBQUE7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7O0FBQUE7QUEyQkE7QUFBQTtBQTFCQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})