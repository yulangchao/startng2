webpackHotUpdate(3,{

/***/ 234:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"container\\\">\\r\\n\\r\\n  <!-- HEADER AND TODO COUNT -->\\r\\n  <div class=\\\"jumbotron text-center\\\">\\r\\n      <h1>ChatRoom <span class=\\\"label label-info\\\">{{chats.length}}</span></h1>\\r\\n  </div>\\r\\n\\r\\n\\r\\n\\r\\n  <div class=\\\"col-sm-8 col-sm-offset-2 form-group\\\">\\r\\n      <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\\r\\n      <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"You have to enter your name before chatting\\\" [(ngModel)]=\\\"chatData.name\\\" required>\\r\\n      <span class=\\\"input-group-btn\\\">\\r\\n                  <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-lg\\\" [disabled]=\\\"chatData.name==''\\\">Submit</button>\\r\\n              </span>\\r\\n  </div>\\r\\n\\r\\n <div class=\\\"panel panel-primary col-sm-8 col-sm-offset-2\\\">\\r\\n  <div id=\\\"chat-header\\\" class=\\\"row panel-heading\\\">\\r\\n      666\\r\\n  </div>\\r\\n  <!-- TODO LIST -->\\r\\n  <div id=\\\"todo-list\\\" class=\\\"row panel-body\\\">\\r\\n      <div  #scrollMe id=\\\"chatlist\\\">\\r\\n\\r\\n          <!-- LOOP OVER THE chats IN $scope.chats -->\\r\\n          <div class=\\\"chatbox col-sm-12\\\" *ngFor=\\\"#chat of (chats.slice(chats.length - 100,chats.length) )\\\">\\r\\n                  <p class=\\\"time col-sm-2\\\">{{chat.date.slice(4,chat.date.length)}}</p>\\r\\n                  <p class=\\\"col-sm-10\\\">{{ chat.name}}: {{ chat.text }}</p>\\r\\n\\r\\n          </div>\\r\\n\\r\\n      </div>\\r\\n  </div>\\r\\n\\r\\n  <!-- FORM TO CREATE chats -->\\r\\n\\r\\n   <div id=\\\"todo-form\\\" class=\\\"row panel-footer\\\">\\r\\n      <div class=\\\" text-center\\\">\\r\\n          <form>\\r\\n              <div class=\\\"form-group\\\">\\r\\n                  <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\\r\\n                  <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"I am a developer\\\" [(ngModel)]=\\\"chatData.text\\\" [disabled]=\\\"chatData.name==''\\\" required>\\r\\n\\r\\n              <!-- createToDo() WILL CREATE NEW chats -->\\r\\n              <span class=\\\"input-group-btn\\\">\\r\\n                  <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-lg\\\"\\r\\n                    (click)=\\\"createChat()\\\" [disabled]=\\\"chatData.text==''\\\">Send</button>\\r\\n              </span>\\r\\n              </div>\\r\\n          </form>\\r\\n      </div>\\r\\n  </div>\\r\\n </div>\\r\\n</div>\\r\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jaGF0L2NoYXQuaHRtbD8wM2QwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcclxcbiAgPCEtLSBIRUFERVIgQU5EIFRPRE8gQ09VTlQgLS0+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgIDxoMT5DaGF0Um9vbSA8c3BhbiBjbGFzcz1cXFwibGFiZWwgbGFiZWwtaW5mb1xcXCI+e3tjaGF0cy5sZW5ndGh9fTwvc3Bhbj48L2gxPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTIgZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgPCEtLSBCSU5EIFRISVMgVkFMVUUgVE8gdG9kb0RhdGEudGV4dCBJTiBBTkdVTEFSIC0tPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGlucHV0LWxnIHRleHQtY2VudGVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiWW91IGhhdmUgdG8gZW50ZXIgeW91ciBuYW1lIGJlZm9yZSBjaGF0dGluZ1xcXCIgWyhuZ01vZGVsKV09XFxcImNoYXREYXRhLm5hbWVcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgW2Rpc2FibGVkXT1cXFwiY2hhdERhdGEubmFtZT09JydcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLXByaW1hcnkgY29sLXNtLTggY29sLXNtLW9mZnNldC0yXFxcIj5cXHJcXG4gIDxkaXYgaWQ9XFxcImNoYXQtaGVhZGVyXFxcIiBjbGFzcz1cXFwicm93IHBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgIDY2NlxcclxcbiAgPC9kaXY+XFxyXFxuICA8IS0tIFRPRE8gTElTVCAtLT5cXHJcXG4gIDxkaXYgaWQ9XFxcInRvZG8tbGlzdFxcXCIgY2xhc3M9XFxcInJvdyBwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICA8ZGl2ICAjc2Nyb2xsTWUgaWQ9XFxcImNoYXRsaXN0XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgPCEtLSBMT09QIE9WRVIgVEhFIGNoYXRzIElOICRzY29wZS5jaGF0cyAtLT5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hhdGJveCBjb2wtc20tMTJcXFwiICpuZ0Zvcj1cXFwiI2NoYXQgb2YgKGNoYXRzLnNsaWNlKGNoYXRzLmxlbmd0aCAtIDEwMCxjaGF0cy5sZW5ndGgpIClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0aW1lIGNvbC1zbS0yXFxcIj57e2NoYXQuZGF0ZS5zbGljZSg0LGNoYXQuZGF0ZS5sZW5ndGgpfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+e3sgY2hhdC5uYW1lfX06IHt7IGNoYXQudGV4dCB9fTwvcD5cXHJcXG5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDwhLS0gRk9STSBUTyBDUkVBVEUgY2hhdHMgLS0+XFxyXFxuXFxyXFxuICAgPGRpdiBpZD1cXFwidG9kby1mb3JtXFxcIiBjbGFzcz1cXFwicm93IHBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgPGZvcm0+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8IS0tIEJJTkQgVEhJUyBWQUxVRSBUTyB0b2RvRGF0YS50ZXh0IElOIEFOR1VMQVIgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgdGV4dC1jZW50ZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJJIGFtIGEgZGV2ZWxvcGVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiY2hhdERhdGEudGV4dFxcXCIgW2Rpc2FibGVkXT1cXFwiY2hhdERhdGEubmFtZT09JydcXFwiIHJlcXVpcmVkPlxcclxcblxcclxcbiAgICAgICAgICAgICAgPCEtLSBjcmVhdGVUb0RvKCkgV0lMTCBDUkVBVEUgTkVXIGNoYXRzIC0tPlxcclxcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cXFwiY3JlYXRlQ2hhdCgpXFxcIiBbZGlzYWJsZWRdPVxcXCJjaGF0RGF0YS50ZXh0PT0nJ1xcXCI+U2VuZDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jaGF0L2NoYXQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})