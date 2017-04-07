webpackHotUpdate(3,{

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar core_1 = __webpack_require__(3);\r\nvar http_1 = __webpack_require__(21);\r\n// `Injectable` is usually used with `Dart` metadata\r\n// generation; it has no special meaning within `TypeScript`\r\n// This makes sure `TypeScript` emits the needed metadata\r\n// Reference : http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html\r\nvar ChatService = (function () {\r\n    // The `public` keyword denotes that the constructor parameter will\r\n    // be retained as a field.\r\n    // Reference: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#336-members\r\n    // Add `Http` type annotation to the `http` function argument\r\n    // Type annotations in TypeScript are used to record the\r\n    // intended contract of the function or variable.\r\n    // Reference: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#3-types\r\n    // Here we intend the constructor function to be called with the\r\n    // `Http` parameter\r\n    function ChatService(http) {\r\n        this.http = http;\r\n    }\r\n    ChatService.prototype.getAll = function () {\r\n        return this.http.get('/api/todo')\r\n            .map(function (res) { return res.json(); });\r\n    };\r\n    ChatService.prototype.createTodo = function (data) {\r\n        var headers = new http_1.Headers();\r\n        headers.append('Content-Type', 'application/json');\r\n        return this.http.post('/api/todo', JSON.stringify(data), { headers: headers })\r\n            .map(function (res) { return res.json(); });\r\n    };\r\n    ChatService.prototype.deleteTodo = function (id) {\r\n        return this.http.delete(\"/api/todo/\" + id)\r\n            .map(function (res) { return res.json(); });\r\n    };\r\n    ChatService = __decorate([\r\n        core_1.Injectable(), \r\n        __metadata('design:paramtypes', [http_1.Http])\r\n    ], ChatService);\r\n    return ChatService;\r\n}());\r\nexports.ChatService = ChatService;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAvY2hhdC9jaGF0LnNlcnZpY2UudHM/NzAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuLy8gYEluamVjdGFibGVgIGlzIHVzdWFsbHkgdXNlZCB3aXRoIGBEYXJ0YCBtZXRhZGF0YVxyXG4vLyBnZW5lcmF0aW9uOyBpdCBoYXMgbm8gc3BlY2lhbCBtZWFuaW5nIHdpdGhpbiBgVHlwZVNjcmlwdGBcclxuLy8gVGhpcyBtYWtlcyBzdXJlIGBUeXBlU2NyaXB0YCBlbWl0cyB0aGUgbmVlZGVkIG1ldGFkYXRhXHJcbi8vIFJlZmVyZW5jZSA6IGh0dHA6Ly9ibG9nLnRob3VnaHRyYW0uaW8vYW5ndWxhci8yMDE1LzA5LzE3L3Jlc29sdmUtc2VydmljZS1kZXBlbmRlbmNpZXMtaW4tYW5ndWxhci0yLmh0bWxcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2hhdFNlcnZpY2Uge1xyXG4gIC8vIFRoZSBgcHVibGljYCBrZXl3b3JkIGRlbm90ZXMgdGhhdCB0aGUgY29uc3RydWN0b3IgcGFyYW1ldGVyIHdpbGxcclxuICAvLyBiZSByZXRhaW5lZCBhcyBhIGZpZWxkLlxyXG4gIC8vIFJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2Jsb2IvbWFzdGVyL2RvYy9zcGVjLm1kIzMzNi1tZW1iZXJzXHJcbiAgLy8gQWRkIGBIdHRwYCB0eXBlIGFubm90YXRpb24gdG8gdGhlIGBodHRwYCBmdW5jdGlvbiBhcmd1bWVudFxyXG4gIC8vIFR5cGUgYW5ub3RhdGlvbnMgaW4gVHlwZVNjcmlwdCBhcmUgdXNlZCB0byByZWNvcmQgdGhlXHJcbiAgLy8gaW50ZW5kZWQgY29udHJhY3Qgb2YgdGhlIGZ1bmN0aW9uIG9yIHZhcmlhYmxlLlxyXG4gIC8vIFJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2Jsb2IvbWFzdGVyL2RvYy9zcGVjLm1kIzMtdHlwZXNcclxuICAvLyBIZXJlIHdlIGludGVuZCB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdpdGggdGhlXHJcbiAgLy8gYEh0dHBgIHBhcmFtZXRlclxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHApIHtcclxuXHJcbiAgfVxyXG5cclxuICBnZXRBbGwoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL3RvZG8nKVxyXG4gICAgICAgICAgLy8gbWFwIHRoZSBgSFRUUGAgcmVzcG9uc2UgZnJvbSBgcmF3YCB0byBgSlNPTmAgZm9ybWF0XHJcbiAgICAgICAgICAvLyB1c2luZyBgUnhKc2BcclxuICAgICAgICAgIC8vIFJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0aXZlLUV4dGVuc2lvbnMvUnhKU1xyXG4gICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUb2RvKGRhdGEpIHtcclxuXHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblxyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3RvZG8nLCBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG8oaWQpIHtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAvYXBpL3RvZG8vJHtpZH1gKVxyXG4gICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwL2NoYXQvY2hhdC5zZXJ2aWNlLnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBdENBO0FBQUE7O0FBQUE7QUF3Q0E7QUFBQTtBQXZDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})