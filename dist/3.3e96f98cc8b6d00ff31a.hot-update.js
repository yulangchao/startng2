webpackHotUpdate(3,{

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	eval("// ```\r\n// app.ts\r\n// (c) 2016 David Newman\r\n// blackshuriken@hotmail.com\r\n// app.ts may be freely distributed under the MIT license\r\n// ```\r\n\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n// *src/app/app.ts*\r\n// This file contains the main class as well as the necessary\r\n// decorators for creating the primary `app` `component`\r\n/*\r\n * Angular 2 decorators and services\r\n */\r\nvar core_1 = __webpack_require__(3);\r\nvar router_1 = __webpack_require__(31);\r\nvar home_1 = __webpack_require__(215);\r\n// Import NgFor directive\r\nvar common_1 = __webpack_require__(30);\r\n// Import Todo component\r\nvar todo_component_1 = __webpack_require__(224);\r\n// Import Recipes component\r\nvar recipes_component_1 = __webpack_require__(219);\r\n/*\r\n * App Component\r\n * Top Level Component\r\n */\r\nvar App = (function () {\r\n    function App() {\r\n        this.angularLogo = 'assets/img/angular-logo.png';\r\n        this.name = 'Angular 2 MEAN Webpack Starter';\r\n        this.url = 'https://twitter.com/datatype_void';\r\n    }\r\n    App = __decorate([\r\n        core_1.Component({\r\n            selector: 'app',\r\n            providers: [],\r\n            directives: [todo_component_1.Todo,\r\n                common_1.NgFor],\r\n            pipes: [],\r\n            // Load our main `Sass` file into our `app` `component`\r\n            styleUrls: [__webpack_require__(325)],\r\n            template: \"\\n    <header>\\n      <nav class=\\\"navbar navbar-inverse navbar-fixed-top\\\">\\n          <div class=\\\"container-fluid\\\">\\n            <div class=\\\"navbar-header\\\">\\n              <button type=\\\"button\\\" class=\\\"navbar-toggle\\\" data-toggle=\\\"collapse\\\" data-target=\\\"#myNavbar\\\">\\n                <span class=\\\"icon-bar\\\"></span>\\n                <span class=\\\"icon-bar\\\"></span>\\n                <span class=\\\"icon-bar\\\"></span>                        \\n              </button>\\n              <a class=\\\"navbar-brand\\\" href=\\\"#\\\">Hello {{ name }}</a>\\n            </div>\\n            <div class=\\\"collapse navbar-collapse\\\" id=\\\"myNavbar\\\">\\n                <ul class=\\\"nav navbar-nav\\\">\\n                  <li router-activ>\\n                    <a [routerLink]=\\\" ['Index'] \\\">Home</a>\\n                  </li>\\n                  <li router-active>\\n                    <a [routerLink]=\\\" ['Todo'] \\\">Todo</a>\\n                  </li>\\n                  <li router-active>\\n                    <a [routerLink]=\\\" ['Recipes'] \\\">NG2 Redux</a>\\n                  </li>\\n                  <li router-active>\\n                    <a [routerLink]=\\\" ['About'] \\\">About</a>\\n                  </li>\\n                </ul>\\n                <ul class=\\\"nav navbar-nav navbar-right\\\">\\n                  <li><a href=\\\"#\\\"><span class=\\\"glyphicon glyphicon-user\\\"></span> Sign Up</a></li>\\n                  <li><a href=\\\"#\\\"><span class=\\\"glyphicon glyphicon-log-in\\\"></span> Login</a></li>\\n                </ul>\\n            </div>\\n          </div> \\n      </nav>\\n    </header>\\n\\n    <main>\\n      <router-outlet></router-outlet>\\n    </main>\\n\\n    <footer>\\n      Angular 2 MEAN Webpack Starter by <a [href]=\\\"url\\\">@datatype_void</a>\\n      <div>\\n        <img [src]=\\\"angularLogo\\\" width=\\\"10%\\\">\\n      </div>\\n    </footer>\\n  \"\r\n        }),\r\n        router_1.RouteConfig([\r\n            { path: '/', name: 'Index', component: home_1.Home, useAsDefault: true },\r\n            { path: '/home', name: 'Home', component: home_1.Home },\r\n            { path: '/todo', component: todo_component_1.Todo, name: 'Todo' },\r\n            { path: '/redux', component: recipes_component_1.Recipes, name: 'Recipes' },\r\n            // Async load a component using Webpack's require with\r\n            // es6-promise-loader and webpack `require`\r\n            { path: '/about', name: 'About', loader: function () { return __webpack_require__(226)('About'); } },\r\n        ]), \r\n        __metadata('design:paramtypes', [])\r\n    ], App);\r\n    return App;\r\n}());\r\nexports.App = App;\r\n/*\r\n * Please review the https://github.com/datatype_void/angular2-examples/ repo as it is updated for\r\n * more angular app examples that you may copy/paste\r\n * (The examples may not be updated as quickly. Please open an issue on github for us to update it)\r\n * For help or questions please contact us at @datatype_void on twitter\r\n * or our chat on Slack at https://VulgarDisplayOfPower.com/slack-join\r\n * or via chat on Gitter at https://gitter.im/datatype_void/angular2-webpack-starter\r\n */\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAvYXBwLnRzP2FjNWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYGBgXG4vLyBhcHAudHNcbi8vIChjKSAyMDE2IERhdmlkIE5ld21hblxuLy8gYmxhY2tzaHVyaWtlbkBob3RtYWlsLmNvbVxuLy8gYXBwLnRzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4vLyBgYGBcblxuLy8gKnNyYy9hcHAvYXBwLnRzKlxuXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgdGhlIG1haW4gY2xhc3MgYXMgd2VsbCBhcyB0aGUgbmVjZXNzYXJ5XG4vLyBkZWNvcmF0b3JzIGZvciBjcmVhdGluZyB0aGUgcHJpbWFyeSBgYXBwYCBgY29tcG9uZW50YFxuXG4vKlxuICogQW5ndWxhciAyIGRlY29yYXRvcnMgYW5kIHNlcnZpY2VzXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtIb21lfSBmcm9tICcuL2hvbWUvaG9tZSc7XG5cbi8vIEltcG9ydCBOZ0ZvciBkaXJlY3RpdmVcbmltcG9ydCB7TmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbi8vIEltcG9ydCBUb2RvIGNvbXBvbmVudFxuaW1wb3J0IHtUb2RvfSBmcm9tICcuL3RvZG8vdG9kby5jb21wb25lbnQnO1xuXG4vLyBJbXBvcnQgUmVjaXBlcyBjb21wb25lbnRcbmltcG9ydCB7UmVjaXBlc30gZnJvbSAnLi9yZWNpcGVzL3JlY2lwZXMuY29tcG9uZW50JztcblxuLypcbiAqIEFwcCBDb21wb25lbnRcbiAqIFRvcCBMZXZlbCBDb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwJyxcbiAgcHJvdmlkZXJzOiBbICBdLFxuICBkaXJlY3RpdmVzOiBbIFRvZG8sXG4gICAgICAgICAgICAgICAgTmdGb3JdLFxuICBwaXBlczogW10sXG4gIC8vIExvYWQgb3VyIG1haW4gYFNhc3NgIGZpbGUgaW50byBvdXIgYGFwcGAgYGNvbXBvbmVudGBcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnIXN0eWxlIWNzcyFzYXNzIS4uL3Nhc3MvbWFpbi5zY3NzJyldLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoZWFkZXI+XG4gICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbXlOYXZiYXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5IZWxsbyB7eyBuYW1lIH19PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJteU5hdmJhclwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICA8bGkgcm91dGVyLWFjdGl2PlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCIgWydJbmRleCddIFwiPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIHJvdXRlci1hY3RpdmU+XG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIiBbJ1RvZG8nXSBcIj5Ub2RvPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSByb3V0ZXItYWN0aXZlPlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCIgWydSZWNpcGVzJ10gXCI+TkcyIFJlZHV4PC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSByb3V0ZXItYWN0aXZlPlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCIgWydBYm91dCddIFwiPkFib3V0PC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcIj48L3NwYW4+IFNpZ24gVXA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1sb2ctaW5cIj48L3NwYW4+IExvZ2luPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuXG4gICAgPG1haW4+XG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgPC9tYWluPlxuXG4gICAgPGZvb3Rlcj5cbiAgICAgIEFuZ3VsYXIgMiBNRUFOIFdlYnBhY2sgU3RhcnRlciBieSA8YSBbaHJlZl09XCJ1cmxcIj5AZGF0YXR5cGVfdm9pZDwvYT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgW3NyY109XCJhbmd1bGFyTG9nb1wiIHdpZHRoPVwiMTAlXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgYFxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy8nLCBuYW1lOiAnSW5kZXgnLCBjb21wb25lbnQ6IEhvbWUsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuICB7IHBhdGg6ICcvaG9tZScsICBuYW1lOiAnSG9tZScsICBjb21wb25lbnQ6IEhvbWUgfSxcbiAgeyBwYXRoOiAnL3RvZG8nLCBjb21wb25lbnQ6IFRvZG8sIG5hbWU6ICdUb2RvJyB9LFxuICB7IHBhdGg6ICcvcmVkdXgnLCBjb21wb25lbnQ6IFJlY2lwZXMsIG5hbWU6ICdSZWNpcGVzJyB9LFxuICAvLyBBc3luYyBsb2FkIGEgY29tcG9uZW50IHVzaW5nIFdlYnBhY2sncyByZXF1aXJlIHdpdGhcbiAgLy8gZXM2LXByb21pc2UtbG9hZGVyIGFuZCB3ZWJwYWNrIGByZXF1aXJlYFxuICB7IHBhdGg6ICcvYWJvdXQnLCBuYW1lOiAnQWJvdXQnLCBsb2FkZXI6ICgpID0+IHJlcXVpcmUoJ2VzNi1wcm9taXNlIS4vYWJvdXQvYWJvdXQnKSgnQWJvdXQnKSB9LFxuXSlcbmV4cG9ydCBjbGFzcyBBcHAge1xuICBhbmd1bGFyTG9nbyA9ICdhc3NldHMvaW1nL2FuZ3VsYXItbG9nby5wbmcnO1xuICBuYW1lID0gJ0FuZ3VsYXIgMiBNRUFOIFdlYnBhY2sgU3RhcnRlcic7XG4gIHVybCA9ICdodHRwczovL3R3aXR0ZXIuY29tL2RhdGF0eXBlX3ZvaWQnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cbn1cblxuLypcbiAqIFBsZWFzZSByZXZpZXcgdGhlIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRhdHlwZV92b2lkL2FuZ3VsYXIyLWV4YW1wbGVzLyByZXBvIGFzIGl0IGlzIHVwZGF0ZWQgZm9yXG4gKiBtb3JlIGFuZ3VsYXIgYXBwIGV4YW1wbGVzIHRoYXQgeW91IG1heSBjb3B5L3Bhc3RlXG4gKiAoVGhlIGV4YW1wbGVzIG1heSBub3QgYmUgdXBkYXRlZCBhcyBxdWlja2x5LiBQbGVhc2Ugb3BlbiBhbiBpc3N1ZSBvbiBnaXRodWIgZm9yIHVzIHRvIHVwZGF0ZSBpdClcbiAqIEZvciBoZWxwIG9yIHF1ZXN0aW9ucyBwbGVhc2UgY29udGFjdCB1cyBhdCBAZGF0YXR5cGVfdm9pZCBvbiB0d2l0dGVyXG4gKiBvciBvdXIgY2hhdCBvbiBTbGFjayBhdCBodHRwczovL1Z1bGdhckRpc3BsYXlPZlBvd2VyLmNvbS9zbGFjay1qb2luXG4gKiBvciB2aWEgY2hhdCBvbiBHaXR0ZXIgYXQgaHR0cHM6Ly9naXR0ZXIuaW0vZGF0YXR5cGVfdm9pZC9hbmd1bGFyMi13ZWJwYWNrLXN0YXJ0ZXJcbiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hcHAvYXBwLnRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFrRUE7QUFLQTtBQUpBO0FBQ0E7QUFDQTtBQUlBO0FBeEVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBU0E7QUFBQTtBQVJBO0FBVUE7Ozs7Ozs7QUFPQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})