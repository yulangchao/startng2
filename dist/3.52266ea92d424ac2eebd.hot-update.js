webpackHotUpdate(3,{

/***/ 234:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"container\\\">\\r\\n\\r\\n  <!-- HEADER AND TODO COUNT -->\\r\\n  <div class=\\\"jumbotron text-center\\\">\\r\\n      <h1>ChatRoom <span class=\\\"label label-info\\\">{{chats.length}}</span></h1>\\r\\n  </div>\\r\\n\\r\\n\\r\\n\\r\\n  <div class=\\\"col-sm-8 col-sm-offset-2 form-group\\\">\\r\\n      <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\\r\\n      <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"You have to enter your name before chatting\\\" [(ngModel)]=\\\"chatData.name\\\" required>\\r\\n      <span class=\\\"input-group-btn\\\">\\r\\n                  <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-lg\\\" (click)=\\\"\\\" [disabled]=\\\"chatData.name==''\\\">Submit</button>\\r\\n              </span>\\r\\n  </div>\\r\\n\\r\\n\\r\\n  <!-- TODO LIST -->\\r\\n  <div id=\\\"todo-list\\\" class=\\\"row\\\">\\r\\n      <div  #scrollMe id=\\\"chatlist\\\" class=\\\"col-sm-8 col-sm-offset-2\\\">\\r\\n\\r\\n          <!-- LOOP OVER THE chats IN $scope.chats -->\\r\\n          <div class=\\\"chatbox col-sm-12\\\" *ngFor=\\\"#chat of (chats.slice(chats.length - 100,chats.length) )\\\">\\r\\n                  <p>{{ chat.name}}: {{ chat.text }}</p>\\r\\n                  <p class=\\\"time\\\">{{new Date(chat.date)}}</p>\\r\\n\\r\\n          </div>\\r\\n\\r\\n      </div>\\r\\n  </div>\\r\\n\\r\\n  <!-- FORM TO CREATE chats -->\\r\\n  <div id=\\\"todo-form\\\" class=\\\"row\\\">\\r\\n      <div class=\\\"col-sm-8 col-sm-offset-2 text-center\\\">\\r\\n          <form>\\r\\n              <div class=\\\"form-group\\\">\\r\\n                  <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\\r\\n                  <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"I am a developer\\\" [(ngModel)]=\\\"chatData.text\\\" [disabled]=\\\"chatData.name==''\\\" required>\\r\\n\\r\\n              <!-- createToDo() WILL CREATE NEW chats -->\\r\\n              <span class=\\\"input-group-btn\\\">\\r\\n                  <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-lg\\\"\\r\\n                    (click)=\\\"createChat()\\\" [disabled]=\\\"chatData.text==''\\\">Send</button>\\r\\n              </span>\\r\\n              </div>\\r\\n          </form>\\r\\n      </div>\\r\\n  </div>\\r\\n\\r\\n</div>\\r\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jaGF0L2NoYXQuaHRtbD8wM2QwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcclxcbiAgPCEtLSBIRUFERVIgQU5EIFRPRE8gQ09VTlQgLS0+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgIDxoMT5DaGF0Um9vbSA8c3BhbiBjbGFzcz1cXFwibGFiZWwgbGFiZWwtaW5mb1xcXCI+e3tjaGF0cy5sZW5ndGh9fTwvc3Bhbj48L2gxPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTIgZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgPCEtLSBCSU5EIFRISVMgVkFMVUUgVE8gdG9kb0RhdGEudGV4dCBJTiBBTkdVTEFSIC0tPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGlucHV0LWxnIHRleHQtY2VudGVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiWW91IGhhdmUgdG8gZW50ZXIgeW91ciBuYW1lIGJlZm9yZSBjaGF0dGluZ1xcXCIgWyhuZ01vZGVsKV09XFxcImNoYXREYXRhLm5hbWVcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgKGNsaWNrKT1cXFwiXFxcIiBbZGlzYWJsZWRdPVxcXCJjaGF0RGF0YS5uYW1lPT0nJ1xcXCI+U3VibWl0PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gIDwhLS0gVE9ETyBMSVNUIC0tPlxcclxcbiAgPGRpdiBpZD1cXFwidG9kby1saXN0XFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICA8ZGl2ICAjc2Nyb2xsTWUgaWQ9XFxcImNoYXRsaXN0XFxcIiBjbGFzcz1cXFwiY29sLXNtLTggY29sLXNtLW9mZnNldC0yXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgPCEtLSBMT09QIE9WRVIgVEhFIGNoYXRzIElOICRzY29wZS5jaGF0cyAtLT5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hhdGJveCBjb2wtc20tMTJcXFwiICpuZ0Zvcj1cXFwiI2NoYXQgb2YgKGNoYXRzLnNsaWNlKGNoYXRzLmxlbmd0aCAtIDEwMCxjaGF0cy5sZW5ndGgpIClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxwPnt7IGNoYXQubmFtZX19OiB7eyBjaGF0LnRleHQgfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRpbWVcXFwiPnt7bmV3IERhdGUoY2hhdC5kYXRlKX19PC9wPlxcclxcblxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPCEtLSBGT1JNIFRPIENSRUFURSBjaGF0cyAtLT5cXHJcXG4gIDxkaXYgaWQ9XFxcInRvZG8tZm9ybVxcXCIgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLXNtLW9mZnNldC0yIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgPGZvcm0+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8IS0tIEJJTkQgVEhJUyBWQUxVRSBUTyB0b2RvRGF0YS50ZXh0IElOIEFOR1VMQVIgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgdGV4dC1jZW50ZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJJIGFtIGEgZGV2ZWxvcGVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiY2hhdERhdGEudGV4dFxcXCIgW2Rpc2FibGVkXT1cXFwiY2hhdERhdGEubmFtZT09JydcXFwiIHJlcXVpcmVkPlxcclxcblxcclxcbiAgICAgICAgICAgICAgPCEtLSBjcmVhdGVUb0RvKCkgV0lMTCBDUkVBVEUgTkVXIGNoYXRzIC0tPlxcclxcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cXFwiY3JlYXRlQ2hhdCgpXFxcIiBbZGlzYWJsZWRdPVxcXCJjaGF0RGF0YS50ZXh0PT0nJ1xcXCI+U2VuZDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NoYXQvY2hhdC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})