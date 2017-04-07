webpackHotUpdate(3,{

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	eval("// ```\r\n// app.ts\r\n// (c) 2016 David Newman\r\n// blackshuriken@hotmail.com\r\n// app.ts may be freely distributed under the MIT license\r\n// ```\r\n\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n// *src/app/app.ts*\r\n// This file contains the main class as well as the necessary\r\n// decorators for creating the primary `app` `component`\r\n/*\r\n * Angular 2 decorators and services\r\n */\r\nvar core_1 = __webpack_require__(3);\r\nvar router_1 = __webpack_require__(31);\r\nvar home_1 = __webpack_require__(215);\r\nvar index_1 = __webpack_require__(222);\r\n// Import NgFor directive\r\nvar common_1 = __webpack_require__(30);\r\n// Import Todo component\r\nvar todo_component_1 = __webpack_require__(226);\r\n// Import Recipes component\r\nvar recipes_component_1 = __webpack_require__(219);\r\n/*\r\n * App Component\r\n * Top Level Component\r\n */\r\nvar App = (function () {\r\n    function App() {\r\n        this.angularLogo = 'assets/img/angular-logo.png';\r\n        this.name = 'LoL Players';\r\n        this.url = 'https://github.com/yulangchao';\r\n        this.check_button = false;\r\n    }\r\n    App.prototype.press = function () {\r\n        this.check_button = !this.check_button;\r\n    };\r\n    App = __decorate([\r\n        core_1.Component({\r\n            selector: 'app',\r\n            providers: [],\r\n            directives: [todo_component_1.Todo,\r\n                common_1.NgFor],\r\n            pipes: [],\r\n            // Load our main `Sass` file into our `app` `component`\r\n            styleUrls: [__webpack_require__(328)],\r\n            template: __webpack_require__(231)\r\n        }),\r\n        router_1.RouteConfig([\r\n            { path: '/', name: 'Index', component: home_1.Home, useAsDefault: true },\r\n            { path: '/home', name: 'Home', component: home_1.Home },\r\n            { path: '/todo', component: todo_component_1.Todo, name: 'Todo' },\r\n            { path: '/redux', component: recipes_component_1.Recipes, name: 'Recipes' },\r\n            { path: '/register', component: index_1.RegisterComponent, name: 'Register' },\r\n            // Async load a component using Webpack's require with\r\n            // es6-promise-loader and webpack `require`\r\n            { path: '/about', name: 'About', loader: function () { return __webpack_require__(228)('About'); } },\r\n        ]), \r\n        __metadata('design:paramtypes', [])\r\n    ], App);\r\n    return App;\r\n}());\r\nexports.App = App;\r\n/*\r\n * Please review the https://github.com/datatype_void/angular2-examples/ repo as it is updated for\r\n * more angular app examples that you may copy/paste\r\n * (The examples may not be updated as quickly. Please open an issue on github for us to update it)\r\n * For help or questions please contact us at @datatype_void on twitter\r\n * or our chat on Slack at https://VulgarDisplayOfPower.com/slack-join\r\n * or via chat on Gitter at https://gitter.im/datatype_void/angular2-webpack-starter\r\n */\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAvYXBwLnRzP2FjNWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYGBgXG4vLyBhcHAudHNcbi8vIChjKSAyMDE2IERhdmlkIE5ld21hblxuLy8gYmxhY2tzaHVyaWtlbkBob3RtYWlsLmNvbVxuLy8gYXBwLnRzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4vLyBgYGBcblxuLy8gKnNyYy9hcHAvYXBwLnRzKlxuXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgdGhlIG1haW4gY2xhc3MgYXMgd2VsbCBhcyB0aGUgbmVjZXNzYXJ5XG4vLyBkZWNvcmF0b3JzIGZvciBjcmVhdGluZyB0aGUgcHJpbWFyeSBgYXBwYCBgY29tcG9uZW50YFxuXG4vKlxuICogQW5ndWxhciAyIGRlY29yYXRvcnMgYW5kIHNlcnZpY2VzXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtIb21lfSBmcm9tICcuL2hvbWUvaG9tZSc7XG5cbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3Rlci9pbmRleCc7XG4vLyBJbXBvcnQgTmdGb3IgZGlyZWN0aXZlXG5pbXBvcnQge05nRm9yfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG4vLyBJbXBvcnQgVG9kbyBjb21wb25lbnRcbmltcG9ydCB7VG9kb30gZnJvbSAnLi90b2RvL3RvZG8uY29tcG9uZW50JztcblxuLy8gSW1wb3J0IFJlY2lwZXMgY29tcG9uZW50XG5pbXBvcnQge1JlY2lwZXN9IGZyb20gJy4vcmVjaXBlcy9yZWNpcGVzLmNvbXBvbmVudCc7XG5cbi8qXG4gKiBBcHAgQ29tcG9uZW50XG4gKiBUb3AgTGV2ZWwgQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCcsXG4gIHByb3ZpZGVyczogWyAgXSxcbiAgZGlyZWN0aXZlczogWyBUb2RvLFxuICAgICAgICAgICAgICAgIE5nRm9yXSxcbiAgcGlwZXM6IFtdLFxuICAvLyBMb2FkIG91ciBtYWluIGBTYXNzYCBmaWxlIGludG8gb3VyIGBhcHBgIGBjb21wb25lbnRgXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJyFzdHlsZSFjc3Mhc2FzcyEuLi9zYXNzL21haW4uc2NzcycpXSxcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbGF5b3V0Lmh0bWwnKVxuXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgeyBwYXRoOiAnLycsIG5hbWU6ICdJbmRleCcsIGNvbXBvbmVudDogSG9tZSwgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXG4gIHsgcGF0aDogJy9ob21lJywgIG5hbWU6ICdIb21lJywgIGNvbXBvbmVudDogSG9tZSB9LFxuICB7IHBhdGg6ICcvdG9kbycsIGNvbXBvbmVudDogVG9kbywgbmFtZTogJ1RvZG8nIH0sXG4gIHsgcGF0aDogJy9yZWR1eCcsIGNvbXBvbmVudDogUmVjaXBlcywgbmFtZTogJ1JlY2lwZXMnIH0sXG4gIHsgcGF0aDogJy9yZWdpc3RlcicsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQsIG5hbWU6ICdSZWdpc3RlcicgfSxcbiAgLy8gQXN5bmMgbG9hZCBhIGNvbXBvbmVudCB1c2luZyBXZWJwYWNrJ3MgcmVxdWlyZSB3aXRoXG4gIC8vIGVzNi1wcm9taXNlLWxvYWRlciBhbmQgd2VicGFjayBgcmVxdWlyZWBcbiAgeyBwYXRoOiAnL2Fib3V0JywgbmFtZTogJ0Fib3V0JywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuL2Fib3V0L2Fib3V0JykoJ0Fib3V0JykgfSxcbl0pXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgYW5ndWxhckxvZ28gPSAnYXNzZXRzL2ltZy9hbmd1bGFyLWxvZ28ucG5nJztcbiAgbmFtZSA9ICdMb0wgUGxheWVycyc7XG4gIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20veXVsYW5nY2hhbyc7XG4gIHB1YmxpYyBjaGVja19idXR0b246IGFueSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBwcmVzcygpe1xuICAgIHRoaXMuY2hlY2tfYnV0dG9uID0gIXRoaXMuY2hlY2tfYnV0dG9uO1xuICB9XG59XG5cbi8qXG4gKiBQbGVhc2UgcmV2aWV3IHRoZSBodHRwczovL2dpdGh1Yi5jb20vZGF0YXR5cGVfdm9pZC9hbmd1bGFyMi1leGFtcGxlcy8gcmVwbyBhcyBpdCBpcyB1cGRhdGVkIGZvclxuICogbW9yZSBhbmd1bGFyIGFwcCBleGFtcGxlcyB0aGF0IHlvdSBtYXkgY29weS9wYXN0ZVxuICogKFRoZSBleGFtcGxlcyBtYXkgbm90IGJlIHVwZGF0ZWQgYXMgcXVpY2tseS4gUGxlYXNlIG9wZW4gYW4gaXNzdWUgb24gZ2l0aHViIGZvciB1cyB0byB1cGRhdGUgaXQpXG4gKiBGb3IgaGVscCBvciBxdWVzdGlvbnMgcGxlYXNlIGNvbnRhY3QgdXMgYXQgQGRhdGF0eXBlX3ZvaWQgb24gdHdpdHRlclxuICogb3Igb3VyIGNoYXQgb24gU2xhY2sgYXQgaHR0cHM6Ly9WdWxnYXJEaXNwbGF5T2ZQb3dlci5jb20vc2xhY2stam9pblxuICogb3IgdmlhIGNoYXQgb24gR2l0dGVyIGF0IGh0dHBzOi8vZ2l0dGVyLmltL2RhdGF0eXBlX3ZvaWQvYW5ndWxhcjItd2VicGFjay1zdGFydGVyXG4gKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwL2FwcC50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFzQkE7QUFNQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFqQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBY0E7QUFBQTtBQWJBO0FBZUE7Ozs7Ozs7QUFPQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})