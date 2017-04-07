webpackHotUpdate(3,{

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar core_1 = __webpack_require__(2);\r\nvar angular2_auto_scroll_directive_1 = __webpack_require__(266);\r\nvar chat_service_1 = __webpack_require__(216);\r\n// We `import` `http` into our `ChatService` but we can only\r\n// specify providers within our component\r\nvar http_1 = __webpack_require__(14);\r\n__webpack_require__(351);\r\n// Create metadata with the `@Component` decorator\r\nvar Chat = (function () {\r\n    function Chat(ChatService) {\r\n        var _this = this;\r\n        this.ChatService = ChatService;\r\n        this.url = 'http://localhost:8080';\r\n        // Initialize our `chatData.text` to an empty `string`\r\n        this.chatData = {\r\n            text: '',\r\n            name: '',\r\n            date: ''\r\n        };\r\n        this.chats = [];\r\n        this.check_chat = 0;\r\n        this.submit_name = 0;\r\n        console.log('Chat constructor go!');\r\n        //this.chats = [];\r\n        ChatService.getAll()\r\n            .subscribe(function (res) {\r\n            // Populate our `todo` array with the `response` data\r\n            _this.chats = res;\r\n            // Reset `todo` input\r\n            _this.chatData.text = '';\r\n        });\r\n        setInterval(function () {\r\n            ChatService.getAll()\r\n                .subscribe(function (res) {\r\n                // Populate our `todo` array with the `response` data\r\n                _this.chats = res;\r\n                // Reset `todo` input\r\n            });\r\n        }, 1000);\r\n    }\r\n    Chat.prototype.ngOnInit = function () {\r\n        this.scrollToBottom();\r\n    };\r\n    Chat.prototype.ngAfterViewChecked = function () {\r\n        if (this.chats.length > this.check_chat) {\r\n            this.scrollToBottom();\r\n            this.check_chat = this.chats.length;\r\n        }\r\n    };\r\n    Chat.prototype.scrollToBottom = function () {\r\n        try {\r\n            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;\r\n        }\r\n        catch (err) { }\r\n    };\r\n    Chat.prototype.createChat = function () {\r\n        var _this = this;\r\n        this.socket.emit('add-message', this.chatData.text);\r\n        this.chatData.date = (new Date()).toString().split('G')[0];\r\n        console.log(this.chatData);\r\n        this.ChatService.createChat(this.chatData)\r\n            .subscribe(function (res) {\r\n            // Populate our `todo` array with the `response` data\r\n            _this.chats = res;\r\n            // Reset `todo` input\r\n            _this.chatData.text = '';\r\n        });\r\n    };\r\n    Chat.prototype.deleteChat = function (id) {\r\n        var _this = this;\r\n        this.ChatService.deleteChat(id)\r\n            .subscribe(function (res) {\r\n            // Populate our `todo` array with the `response` data\r\n            _this.chats = res;\r\n        });\r\n    };\r\n    Chat.prototype.refresh = function () {\r\n        var _this = this;\r\n        console.log(\"11111\");\r\n        this.ChatService.getAll()\r\n            .subscribe(function (res) {\r\n            // Populate our `todo` array with the `response` data\r\n            _this.chats = res;\r\n            // Reset `todo` input\r\n            _this.chatData.text = '';\r\n        });\r\n    };\r\n    __decorate([\r\n        core_1.ViewChild('scrollMe'), \r\n        __metadata('design:type', core_1.ElementRef)\r\n    ], Chat.prototype, \"myScrollContainer\", void 0);\r\n    Chat = __decorate([\r\n        core_1.Component({\r\n            // HTML tag for specifying this component\r\n            selector: 'chat',\r\n            // Let Angular 2 know about `Http` and `ChatService`\r\n            providers: http_1.HTTP_PROVIDERS.concat([chat_service_1.ChatService]),\r\n            template: __webpack_require__(234),\r\n            directives: [angular2_auto_scroll_directive_1.Angular2AutoScroll]\r\n        }), \r\n        __metadata('design:paramtypes', [chat_service_1.ChatService])\r\n    ], Chat);\r\n    return Chat;\r\n}());\r\nexports.Chat = Chat;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC50cz81Yzk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBBZnRlclZpZXdDaGVja2VkLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7QW5ndWxhcjJBdXRvU2Nyb2xsfSBmcm9tIFwiYW5ndWxhcjItYXV0by1zY3JvbGwvbGliL2FuZ3VsYXIyLWF1dG8tc2Nyb2xsLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge0NoYXRTZXJ2aWNlfSBmcm9tICcuL2NoYXQuc2VydmljZSc7XHJcblxyXG4vLyBXZSBgaW1wb3J0YCBgaHR0cGAgaW50byBvdXIgYENoYXRTZXJ2aWNlYCBidXQgd2UgY2FuIG9ubHlcclxuLy8gc3BlY2lmeSBwcm92aWRlcnMgd2l0aGluIG91ciBjb21wb25lbnRcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcblxyXG4vLyBJbXBvcnQgTmdGb3IgZGlyZWN0aXZlXHJcbmltcG9ydCB7TmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgJ3NvY2tldC5pby9saWIvY2xpZW50LmpzJztcclxuXHJcbi8vIENyZWF0ZSBtZXRhZGF0YSB3aXRoIHRoZSBgQENvbXBvbmVudGAgZGVjb3JhdG9yXHJcbkBDb21wb25lbnQoe1xyXG4gICAgLy8gSFRNTCB0YWcgZm9yIHNwZWNpZnlpbmcgdGhpcyBjb21wb25lbnRcclxuICAgIHNlbGVjdG9yOiAnY2hhdCcsXHJcbiAgICAvLyBMZXQgQW5ndWxhciAyIGtub3cgYWJvdXQgYEh0dHBgIGFuZCBgQ2hhdFNlcnZpY2VgXHJcbiAgICBwcm92aWRlcnM6IFsuLi5IVFRQX1BST1ZJREVSUywgQ2hhdFNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2hhdC5odG1sJyksXHJcbiAgICBkaXJlY3RpdmVzOiBbQW5ndWxhcjJBdXRvU2Nyb2xsXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGF0IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2Vke1xyXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsTWUnKSBwcml2YXRlIG15U2Nyb2xsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIHByaXZhdGUgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCc7XHJcbiAgICBwcml2YXRlIHNvY2tldDtcclxuICAvLyBJbml0aWFsaXplIG91ciBgY2hhdERhdGEudGV4dGAgdG8gYW4gZW1wdHkgYHN0cmluZ2BcclxuICBjaGF0RGF0YSA9IHtcclxuICAgIHRleHQ6ICcnLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICBkYXRlOiAnJ1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgY2hhdHM6IEFycmF5PENoYXQ+ID0gW107XHJcbiAgcHJpdmF0ZSBjaGVja19jaGF0OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgc3VibWl0X25hbWU6IG51bWJlcj0gMDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgQ2hhdFNlcnZpY2U6IENoYXRTZXJ2aWNlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDaGF0IGNvbnN0cnVjdG9yIGdvIScpO1xyXG5cclxuICAgICAgLy90aGlzLmNoYXRzID0gW107XHJcbiAgICAgIENoYXRTZXJ2aWNlLmdldEFsbCgpXHJcbiAgICAgIC8vIGBSeGpzYDsgd2Ugc3Vic2NyaWJlIHRvIHRoZSByZXNwb25zZVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgIC8vIFBvcHVsYXRlIG91ciBgdG9kb2AgYXJyYXkgd2l0aCB0aGUgYHJlc3BvbnNlYCBkYXRhXHJcbiAgICAgICAgICAgICAgdGhpcy5jaGF0cyA9IHJlcztcclxuICAgICAgICAgICAgICAvLyBSZXNldCBgdG9kb2AgaW5wdXRcclxuICAgICAgICAgICAgICB0aGlzLmNoYXREYXRhLnRleHQgPSAnJztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBDaGF0U2VydmljZS5nZXRBbGwoKVxyXG4gICAgICAgICAgLy8gYFJ4anNgOyB3ZSBzdWJzY3JpYmUgdG8gdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyBQb3B1bGF0ZSBvdXIgYHRvZG9gIGFycmF5IHdpdGggdGhlIGByZXNwb25zZWAgZGF0YVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNoYXRzID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAvLyBSZXNldCBgdG9kb2AgaW5wdXRcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgIH1cclxuXHJcbiAgICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgICAgIGlmKHRoaXMuY2hhdHMubGVuZ3RoID4gdGhpcy5jaGVja19jaGF0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja19jaGF0ID0gdGhpcy5jaGF0cy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLm15U2Nyb2xsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gdGhpcy5teVNjcm9sbENvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICB9IGNhdGNoKGVycikgeyB9XHJcbiAgICB9XHJcblxyXG4gIGNyZWF0ZUNoYXQoKSB7XHJcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2FkZC1tZXNzYWdlJywgdGhpcy5jaGF0RGF0YS50ZXh0KTtcclxuICAgICAgdGhpcy5jaGF0RGF0YS5kYXRlID0gKG5ldyBEYXRlKCkpLnRvU3RyaW5nKCkuc3BsaXQoJ0cnKVswXTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jaGF0RGF0YSk7XHJcbiAgICAgIHRoaXMuQ2hhdFNlcnZpY2UuY3JlYXRlQ2hhdCh0aGlzLmNoYXREYXRhKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gUG9wdWxhdGUgb3VyIGB0b2RvYCBhcnJheSB3aXRoIHRoZSBgcmVzcG9uc2VgIGRhdGFcclxuICAgICAgICAgICAgdGhpcy5jaGF0cyA9IHJlcztcclxuICAgICAgICAgICAgLy8gUmVzZXQgYHRvZG9gIGlucHV0XHJcbiAgICAgICAgICAgIHRoaXMuY2hhdERhdGEudGV4dCA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ2hhdChpZCkge1xyXG5cclxuICAgIHRoaXMuQ2hhdFNlcnZpY2UuZGVsZXRlQ2hhdChpZClcclxuICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcblxyXG4gICAgICAgICAgLy8gUG9wdWxhdGUgb3VyIGB0b2RvYCBhcnJheSB3aXRoIHRoZSBgcmVzcG9uc2VgIGRhdGFcclxuICAgICAgICAgIHRoaXMuY2hhdHMgPSByZXM7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaCgpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIjExMTExXCIpO1xyXG4gICAgICB0aGlzLkNoYXRTZXJ2aWNlLmdldEFsbCgpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgLy8gUG9wdWxhdGUgb3VyIGB0b2RvYCBhcnJheSB3aXRoIHRoZSBgcmVzcG9uc2VgIGRhdGFcclxuICAgICAgICAgICAgICB0aGlzLmNoYXRzID0gcmVzO1xyXG4gICAgICAgICAgICAgIC8vIFJlc2V0IGB0b2RvYCBpbnB1dFxyXG4gICAgICAgICAgICAgIHRoaXMuY2hhdERhdGEudGV4dCA9ICcnO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFXQTtBQWVBO0FBZkE7QUFlQTtBQVpBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFGQTtBQUFBOztBQUFBO0FBWEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBK0ZBO0FBQUE7QUE1RkE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})