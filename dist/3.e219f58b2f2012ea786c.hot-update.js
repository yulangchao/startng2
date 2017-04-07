webpackHotUpdate(3,{

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar core_1 = __webpack_require__(2);\r\nvar angular2_auto_scroll_directive_1 = __webpack_require__(266);\r\nvar chat_service_1 = __webpack_require__(216);\r\n// We `import` `http` into our `ChatService` but we can only\r\n// specify providers within our component\r\nvar http_1 = __webpack_require__(14);\r\n// Create metadata with the `@Component` decorator\r\nvar Chat = (function () {\r\n    function Chat(ChatService) {\r\n        var _this = this;\r\n        this.ChatService = ChatService;\r\n        // Initialize our `chatData.text` to an empty `string`\r\n        this.chatData = {\r\n            text: '',\r\n            name: '',\r\n            date: ''\r\n        };\r\n        this.chats = [];\r\n        console.log('Chat constructor go!');\r\n        //this.chats = [];\r\n        ChatService.getAll()\r\n            .subscribe(function (res) {\r\n            // Populate our `todo` array with the `response` data\r\n            _this.chats = res;\r\n            // Reset `todo` input\r\n            _this.chatData.text = '';\r\n        });\r\n        setInterval(function () {\r\n            ChatService.getAll()\r\n                .subscribe(function (res) {\r\n                // Populate our `todo` array with the `response` data\r\n                _this.chats = res;\r\n                // Reset `todo` input\r\n            });\r\n        }, 1000);\r\n    }\r\n    Chat.prototype.ngOnInit = function () {\r\n        this.scrollToBottom();\r\n    };\r\n    Chat.prototype.ngAfterViewChecked = function () {\r\n        console.log(this.chats.length);\r\n        this.scrollToBottom();\r\n    };\r\n    Chat.prototype.scrollToBottom = function () {\r\n        try {\r\n            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;\r\n        }\r\n        catch (err) { }\r\n    };\r\n    Chat.prototype.createChat = function () {\r\n        var _this = this;\r\n        this.chatData.date = (new Date()).toString().split('G')[0];\r\n        console.log(this.chatData);\r\n        this.ChatService.createChat(this.chatData)\r\n            .subscribe(function (res) {\r\n            // Populate our `todo` array with the `response` data\r\n            _this.chats = res;\r\n            // Reset `todo` input\r\n            _this.chatData.text = '';\r\n        });\r\n    };\r\n    Chat.prototype.deleteChat = function (id) {\r\n        var _this = this;\r\n        this.ChatService.deleteChat(id)\r\n            .subscribe(function (res) {\r\n            // Populate our `todo` array with the `response` data\r\n            _this.chats = res;\r\n        });\r\n    };\r\n    Chat.prototype.refresh = function () {\r\n        var _this = this;\r\n        console.log(\"11111\");\r\n        this.ChatService.getAll()\r\n            .subscribe(function (res) {\r\n            // Populate our `todo` array with the `response` data\r\n            _this.chats = res;\r\n            // Reset `todo` input\r\n            _this.chatData.text = '';\r\n        });\r\n    };\r\n    __decorate([\r\n        core_1.ViewChild('scrollMe'), \r\n        __metadata('design:type', core_1.ElementRef)\r\n    ], Chat.prototype, \"myScrollContainer\", void 0);\r\n    Chat = __decorate([\r\n        core_1.Component({\r\n            // HTML tag for specifying this component\r\n            selector: 'chat',\r\n            // Let Angular 2 know about `Http` and `ChatService`\r\n            providers: http_1.HTTP_PROVIDERS.concat([chat_service_1.ChatService]),\r\n            template: __webpack_require__(234),\r\n            directives: [angular2_auto_scroll_directive_1.Angular2AutoScroll]\r\n        }), \r\n        __metadata('design:paramtypes', [chat_service_1.ChatService])\r\n    ], Chat);\r\n    return Chat;\r\n}());\r\nexports.Chat = Chat;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC50cz81Yzk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBBZnRlclZpZXdDaGVja2VkLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7QW5ndWxhcjJBdXRvU2Nyb2xsfSBmcm9tIFwiYW5ndWxhcjItYXV0by1zY3JvbGwvbGliL2FuZ3VsYXIyLWF1dG8tc2Nyb2xsLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge0NoYXRTZXJ2aWNlfSBmcm9tICcuL2NoYXQuc2VydmljZSc7XHJcblxyXG4vLyBXZSBgaW1wb3J0YCBgaHR0cGAgaW50byBvdXIgYENoYXRTZXJ2aWNlYCBidXQgd2UgY2FuIG9ubHlcclxuLy8gc3BlY2lmeSBwcm92aWRlcnMgd2l0aGluIG91ciBjb21wb25lbnRcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcblxyXG4vLyBJbXBvcnQgTmdGb3IgZGlyZWN0aXZlXHJcbmltcG9ydCB7TmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcblxyXG4vLyBDcmVhdGUgbWV0YWRhdGEgd2l0aCB0aGUgYEBDb21wb25lbnRgIGRlY29yYXRvclxyXG5AQ29tcG9uZW50KHtcclxuICAgIC8vIEhUTUwgdGFnIGZvciBzcGVjaWZ5aW5nIHRoaXMgY29tcG9uZW50XHJcbiAgICBzZWxlY3RvcjogJ2NoYXQnLFxyXG4gICAgLy8gTGV0IEFuZ3VsYXIgMiBrbm93IGFib3V0IGBIdHRwYCBhbmQgYENoYXRTZXJ2aWNlYFxyXG4gICAgcHJvdmlkZXJzOiBbLi4uSFRUUF9QUk9WSURFUlMsIENoYXRTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NoYXQuaHRtbCcpLFxyXG4gICAgZGlyZWN0aXZlczogW0FuZ3VsYXIyQXV0b1Njcm9sbF1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhdCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZHtcclxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbE1lJykgcHJpdmF0ZSBteVNjcm9sbENvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICAvLyBJbml0aWFsaXplIG91ciBgY2hhdERhdGEudGV4dGAgdG8gYW4gZW1wdHkgYHN0cmluZ2BcclxuICBjaGF0RGF0YSA9IHtcclxuICAgIHRleHQ6ICcnLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICBkYXRlOiAnJ1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgY2hhdHM6IEFycmF5PENoYXQ+ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBDaGF0U2VydmljZTogQ2hhdFNlcnZpY2UpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0NoYXQgY29uc3RydWN0b3IgZ28hJyk7XHJcblxyXG4gICAgICAvL3RoaXMuY2hhdHMgPSBbXTtcclxuICAgICAgQ2hhdFNlcnZpY2UuZ2V0QWxsKClcclxuICAgICAgLy8gYFJ4anNgOyB3ZSBzdWJzY3JpYmUgdG8gdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgLy8gUG9wdWxhdGUgb3VyIGB0b2RvYCBhcnJheSB3aXRoIHRoZSBgcmVzcG9uc2VgIGRhdGFcclxuICAgICAgICAgICAgICB0aGlzLmNoYXRzID0gcmVzO1xyXG4gICAgICAgICAgICAgIC8vIFJlc2V0IGB0b2RvYCBpbnB1dFxyXG4gICAgICAgICAgICAgIHRoaXMuY2hhdERhdGEudGV4dCA9ICcnO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgIENoYXRTZXJ2aWNlLmdldEFsbCgpXHJcbiAgICAgICAgICAvLyBgUnhqc2A7IHdlIHN1YnNjcmliZSB0byB0aGUgcmVzcG9uc2VcclxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIFBvcHVsYXRlIG91ciBgdG9kb2AgYXJyYXkgd2l0aCB0aGUgYHJlc3BvbnNlYCBkYXRhXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2hhdHMgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IGB0b2RvYCBpbnB1dFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hhdHMubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgfVxyXG5cclxuICAgIHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlTY3JvbGxDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLm15U2Nyb2xsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7IH1cclxuICAgIH1cclxuXHJcbiAgY3JlYXRlQ2hhdCgpIHtcclxuICAgICAgdGhpcy5jaGF0RGF0YS5kYXRlID0gKG5ldyBEYXRlKCkpLnRvU3RyaW5nKCkuc3BsaXQoJ0cnKVswXTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jaGF0RGF0YSk7XHJcbiAgICAgIHRoaXMuQ2hhdFNlcnZpY2UuY3JlYXRlQ2hhdCh0aGlzLmNoYXREYXRhKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gUG9wdWxhdGUgb3VyIGB0b2RvYCBhcnJheSB3aXRoIHRoZSBgcmVzcG9uc2VgIGRhdGFcclxuICAgICAgICAgICAgdGhpcy5jaGF0cyA9IHJlcztcclxuICAgICAgICAgICAgLy8gUmVzZXQgYHRvZG9gIGlucHV0XHJcbiAgICAgICAgICAgIHRoaXMuY2hhdERhdGEudGV4dCA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ2hhdChpZCkge1xyXG5cclxuICAgIHRoaXMuQ2hhdFNlcnZpY2UuZGVsZXRlQ2hhdChpZClcclxuICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcblxyXG4gICAgICAgICAgLy8gUG9wdWxhdGUgb3VyIGB0b2RvYCBhcnJheSB3aXRoIHRoZSBgcmVzcG9uc2VgIGRhdGFcclxuICAgICAgICAgIHRoaXMuY2hhdHMgPSByZXM7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaCgpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIjExMTExXCIpO1xyXG4gICAgICB0aGlzLkNoYXRTZXJ2aWNlLmdldEFsbCgpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgLy8gUG9wdWxhdGUgb3VyIGB0b2RvYCBhcnJheSB3aXRoIHRoZSBgcmVzcG9uc2VgIGRhdGFcclxuICAgICAgICAgICAgICB0aGlzLmNoYXRzID0gcmVzO1xyXG4gICAgICAgICAgICAgIC8vIFJlc2V0IGB0b2RvYCBpbnB1dFxyXG4gICAgICAgICAgICAgIHRoaXMuY2hhdERhdGEudGV4dCA9ICcnO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBV0E7QUFXQTtBQVhBO0FBV0E7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuRkE7QUFBQTs7QUFBQTtBQVhBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQXdGQTtBQUFBO0FBckZBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})