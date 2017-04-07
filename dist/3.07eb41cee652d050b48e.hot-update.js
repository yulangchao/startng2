webpackHotUpdate(3,{

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	eval("// ```\r\n// app.ts\r\n// (c) 2016 David Newman\r\n// blackshuriken@hotmail.com\r\n// app.ts may be freely distributed under the MIT license\r\n// ```\r\n\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n// *src/app/app.ts*\r\n// This file contains the main class as well as the necessary\r\n// decorators for creating the primary `app` `component`\r\n/*\r\n * Angular 2 decorators and services\r\n */\r\nvar core_1 = __webpack_require__(2);\r\nvar router_1 = __webpack_require__(31);\r\nvar home_1 = __webpack_require__(217);\r\n// Import NgFor directive\r\nvar common_1 = __webpack_require__(30);\r\n// Import Todo component\r\nvar todo_component_1 = __webpack_require__(228);\r\n// Import Recipes component\r\nvar recipes_component_1 = __webpack_require__(221);\r\n/*\r\n * App Component\r\n * Top Level Component\r\n */\r\nvar App = (function () {\r\n    function App() {\r\n        this.angularLogo = 'assets/img/angular-logo.png';\r\n        this.name = 'LoL Players';\r\n        this.url = 'https://github.com/yulangchao';\r\n    }\r\n    App = __decorate([\r\n        core_1.Component({\r\n            selector: 'app',\r\n            providers: [],\r\n            directives: [todo_component_1.Todo,\r\n                common_1.NgFor],\r\n            pipes: [],\r\n            // Load our main `Sass` file into our `app` `component`\r\n            styleUrls: [__webpack_require__(333)],\r\n            template: __webpack_require__(234)\r\n        }),\r\n        router_1.RouteConfig([\r\n            { path: '/', name: 'Index', component: home_1.Home, useAsDefault: true },\r\n            { path: '/home', name: 'Carousel', component: 'Carousel' },\r\n            { path: '/todo', component: todo_component_1.Todo, name: 'Todo' },\r\n            { path: '/redux', component: recipes_component_1.Recipes, name: 'Recipes' },\r\n            // Async load a component using Webpack's require with\r\n            // es6-promise-loader and webpack `require`\r\n            { path: '/about', name: 'About', loader: function () { return __webpack_require__(230)('About'); } },\r\n        ]), \r\n        __metadata('design:paramtypes', [])\r\n    ], App);\r\n    return App;\r\n}());\r\nexports.App = App;\r\n/*\r\n * Please review the https://github.com/datatype_void/angular2-examples/ repo as it is updated for\r\n * more angular app examples that you may copy/paste\r\n * (The examples may not be updated as quickly. Please open an issue on github for us to update it)\r\n * For help or questions please contact us at @datatype_void on twitter\r\n * or our chat on Slack at https://VulgarDisplayOfPower.com/slack-join\r\n * or via chat on Gitter at https://gitter.im/datatype_void/angular2-webpack-starter\r\n */\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAvYXBwLnRzP2FjNWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYGBgXG4vLyBhcHAudHNcbi8vIChjKSAyMDE2IERhdmlkIE5ld21hblxuLy8gYmxhY2tzaHVyaWtlbkBob3RtYWlsLmNvbVxuLy8gYXBwLnRzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4vLyBgYGBcblxuLy8gKnNyYy9hcHAvYXBwLnRzKlxuXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgdGhlIG1haW4gY2xhc3MgYXMgd2VsbCBhcyB0aGUgbmVjZXNzYXJ5XG4vLyBkZWNvcmF0b3JzIGZvciBjcmVhdGluZyB0aGUgcHJpbWFyeSBgYXBwYCBgY29tcG9uZW50YFxuXG4vKlxuICogQW5ndWxhciAyIGRlY29yYXRvcnMgYW5kIHNlcnZpY2VzXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtIb21lfSBmcm9tICcuL2hvbWUvaG9tZSc7XG5cbi8vIEltcG9ydCBOZ0ZvciBkaXJlY3RpdmVcbmltcG9ydCB7TmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbi8vIEltcG9ydCBUb2RvIGNvbXBvbmVudFxuaW1wb3J0IHtUb2RvfSBmcm9tICcuL3RvZG8vdG9kby5jb21wb25lbnQnO1xuXG4vLyBJbXBvcnQgUmVjaXBlcyBjb21wb25lbnRcbmltcG9ydCB7UmVjaXBlc30gZnJvbSAnLi9yZWNpcGVzL3JlY2lwZXMuY29tcG9uZW50JztcblxuaW1wb3J0IHtDYXJvdXNlbH0gZnJvbSAnLi9maXJzdHBhZ2UvY2Fyb3VzZWwuY29tcG9uZW50Jztcbi8qXG4gKiBBcHAgQ29tcG9uZW50XG4gKiBUb3AgTGV2ZWwgQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCcsXG4gIHByb3ZpZGVyczogWyAgXSxcbiAgZGlyZWN0aXZlczogWyBUb2RvLFxuICAgICAgICAgICAgICAgIE5nRm9yXSxcbiAgcGlwZXM6IFtdLFxuICAvLyBMb2FkIG91ciBtYWluIGBTYXNzYCBmaWxlIGludG8gb3VyIGBhcHBgIGBjb21wb25lbnRgXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJyFzdHlsZSFjc3Mhc2FzcyEuLi9zYXNzL21haW4uc2NzcycpXSxcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbGF5b3V0Lmh0bWwnKVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy8nLCBuYW1lOiAnSW5kZXgnLCBjb21wb25lbnQ6IEhvbWUsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuICB7IHBhdGg6ICcvaG9tZScsICBuYW1lOiAnQ2Fyb3VzZWwnLCAgY29tcG9uZW50OiAnQ2Fyb3VzZWwnIH0sXG4gIHsgcGF0aDogJy90b2RvJywgY29tcG9uZW50OiBUb2RvLCBuYW1lOiAnVG9kbycgfSxcbiAgeyBwYXRoOiAnL3JlZHV4JywgY29tcG9uZW50OiBSZWNpcGVzLCBuYW1lOiAnUmVjaXBlcycgfSxcbiAgLy8gQXN5bmMgbG9hZCBhIGNvbXBvbmVudCB1c2luZyBXZWJwYWNrJ3MgcmVxdWlyZSB3aXRoXG4gIC8vIGVzNi1wcm9taXNlLWxvYWRlciBhbmQgd2VicGFjayBgcmVxdWlyZWBcbiAgeyBwYXRoOiAnL2Fib3V0JywgbmFtZTogJ0Fib3V0JywgbG9hZGVyOiAoKSA9PiByZXF1aXJlKCdlczYtcHJvbWlzZSEuL2Fib3V0L2Fib3V0JykoJ0Fib3V0JykgfSxcbl0pXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgYW5ndWxhckxvZ28gPSAnYXNzZXRzL2ltZy9hbmd1bGFyLWxvZ28ucG5nJztcbiAgbmFtZSA9ICdMb0wgUGxheWVycyc7XG4gIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20veXVsYW5nY2hhbyc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxufVxuXG4vKlxuICogUGxlYXNlIHJldmlldyB0aGUgaHR0cHM6Ly9naXRodWIuY29tL2RhdGF0eXBlX3ZvaWQvYW5ndWxhcjItZXhhbXBsZXMvIHJlcG8gYXMgaXQgaXMgdXBkYXRlZCBmb3JcbiAqIG1vcmUgYW5ndWxhciBhcHAgZXhhbXBsZXMgdGhhdCB5b3UgbWF5IGNvcHkvcGFzdGVcbiAqIChUaGUgZXhhbXBsZXMgbWF5IG5vdCBiZSB1cGRhdGVkIGFzIHF1aWNrbHkuIFBsZWFzZSBvcGVuIGFuIGlzc3VlIG9uIGdpdGh1YiBmb3IgdXMgdG8gdXBkYXRlIGl0KVxuICogRm9yIGhlbHAgb3IgcXVlc3Rpb25zIHBsZWFzZSBjb250YWN0IHVzIGF0IEBkYXRhdHlwZV92b2lkIG9uIHR3aXR0ZXJcbiAqIG9yIG91ciBjaGF0IG9uIFNsYWNrIGF0IGh0dHBzOi8vVnVsZ2FyRGlzcGxheU9mUG93ZXIuY29tL3NsYWNrLWpvaW5cbiAqIG9yIHZpYSBjaGF0IG9uIEdpdHRlciBhdCBodHRwczovL2dpdHRlci5pbS9kYXRhdHlwZV92b2lkL2FuZ3VsYXIyLXdlYnBhY2stc3RhcnRlclxuICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FwcC9hcHAudHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBOzs7QUFHQTtBQW9CQTtBQUtBO0FBSkE7QUFDQTtBQUNBO0FBSUE7QUExQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQVNBO0FBQUE7QUFSQTtBQVVBOzs7Ozs7O0FBT0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})