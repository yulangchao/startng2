webpackHotUpdate(3,{

/***/ 234:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"container\\\">\\r\\n\\r\\n  <!-- HEADER AND TODO COUNT -->\\r\\n  <div class=\\\"jumbotron text-center\\\">\\r\\n      <h1> <span class=\\\"label label-info\\\">{{chats.length}}</span></h1>\\r\\n  </div>\\r\\n\\r\\n\\r\\n\\r\\n  <div class=\\\"col-sm-8 col-sm-offset-2 form-group\\\">\\r\\n      <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\\r\\n      <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"You have to enter your name before chatting\\\" [(ngModel)]=\\\"chatData.name\\\" required>\\r\\n      <span class=\\\"input-group-btn\\\">\\r\\n                  <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-lg\\\" [disabled]=\\\"chatData.name==''\\\">Submit</button>\\r\\n              </span>\\r\\n  </div>\\r\\n\\r\\n <div class=\\\"panel panel-primary col-sm-8 col-sm-offset-2\\\">\\r\\n  <div id=\\\"chat-header\\\" class=\\\"row panel-heading\\\">\\r\\n      666\\r\\n  </div>\\r\\n  <!-- TODO LIST -->\\r\\n  <div id=\\\"todo-list\\\" class=\\\"row panel-body\\\">\\r\\n      <div  #scrollMe id=\\\"chatlist\\\">\\r\\n\\r\\n          <!-- LOOP OVER THE chats IN $scope.chats -->\\r\\n          <div class=\\\"chatbox col-sm-12\\\" *ngFor=\\\"#chat of (chats.slice(chats.length - 100,chats.length) )\\\">\\r\\n                  <p class=\\\"time col-sm-3 col-xs-12\\\">{{chat.date.slice(4,chat.date.length)}}</p>\\r\\n              <div class=\\\"col-sm-9 col-xs-12\\\"><p class=\\\"content\\\"><strong>{{ chat.name}}: </strong> {{ chat.text }}</p></div>\\r\\n\\r\\n          </div>\\r\\n\\r\\n      </div>\\r\\n  </div>\\r\\n\\r\\n  <!-- FORM TO CREATE chats -->\\r\\n\\r\\n   <div id=\\\"todo-form\\\" class=\\\"row panel-footer\\\">\\r\\n      <div class=\\\" text-center\\\">\\r\\n          <form>\\r\\n              <div class=\\\"form-group\\\">\\r\\n                  <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\\r\\n                  <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"I am a developer\\\" [(ngModel)]=\\\"chatData.text\\\" [disabled]=\\\"chatData.name==''\\\" required>\\r\\n\\r\\n              <!-- createToDo() WILL CREATE NEW chats -->\\r\\n              <span class=\\\"input-group-btn\\\">\\r\\n                  <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-lg\\\"\\r\\n                    (click)=\\\"createChat()\\\" [disabled]=\\\"chatData.text==''\\\">Send</button>\\r\\n              </span>\\r\\n              </div>\\r\\n          </form>\\r\\n      </div>\\r\\n  </div>\\r\\n </div>\\r\\n</div>\\r\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jaGF0L2NoYXQuaHRtbD8wM2QwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcclxcbiAgPCEtLSBIRUFERVIgQU5EIFRPRE8gQ09VTlQgLS0+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgIDxoMT4gPHNwYW4gY2xhc3M9XFxcImxhYmVsIGxhYmVsLWluZm9cXFwiPnt7Y2hhdHMubGVuZ3RofX08L3NwYW4+PC9oMT5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLXNtLW9mZnNldC0yIGZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgIDwhLS0gQklORCBUSElTIFZBTFVFIFRPIHRvZG9EYXRhLnRleHQgSU4gQU5HVUxBUiAtLT5cXHJcXG4gICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBpbnB1dC1sZyB0ZXh0LWNlbnRlclxcXCIgcGxhY2Vob2xkZXI9XFxcIllvdSBoYXZlIHRvIGVudGVyIHlvdXIgbmFtZSBiZWZvcmUgY2hhdHRpbmdcXFwiIFsobmdNb2RlbCldPVxcXCJjaGF0RGF0YS5uYW1lXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIFtkaXNhYmxlZF09XFxcImNoYXREYXRhLm5hbWU9PScnXFxcIj5TdWJtaXQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1wcmltYXJ5IGNvbC1zbS04IGNvbC1zbS1vZmZzZXQtMlxcXCI+XFxyXFxuICA8ZGl2IGlkPVxcXCJjaGF0LWhlYWRlclxcXCIgY2xhc3M9XFxcInJvdyBwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICA2NjZcXHJcXG4gIDwvZGl2PlxcclxcbiAgPCEtLSBUT0RPIExJU1QgLS0+XFxyXFxuICA8ZGl2IGlkPVxcXCJ0b2RvLWxpc3RcXFwiIGNsYXNzPVxcXCJyb3cgcGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgPGRpdiAgI3Njcm9sbE1lIGlkPVxcXCJjaGF0bGlzdFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgIDwhLS0gTE9PUCBPVkVSIFRIRSBjaGF0cyBJTiAkc2NvcGUuY2hhdHMgLS0+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoYXRib3ggY29sLXNtLTEyXFxcIiAqbmdGb3I9XFxcIiNjaGF0IG9mIChjaGF0cy5zbGljZShjaGF0cy5sZW5ndGggLSAxMDAsY2hhdHMubGVuZ3RoKSApXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidGltZSBjb2wtc20tMyBjb2wteHMtMTJcXFwiPnt7Y2hhdC5kYXRlLnNsaWNlKDQsY2hhdC5kYXRlLmxlbmd0aCl9fTwvcD5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC14cy0xMlxcXCI+PHAgY2xhc3M9XFxcImNvbnRlbnRcXFwiPjxzdHJvbmc+e3sgY2hhdC5uYW1lfX06IDwvc3Ryb25nPiB7eyBjaGF0LnRleHQgfX08L3A+PC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8IS0tIEZPUk0gVE8gQ1JFQVRFIGNoYXRzIC0tPlxcclxcblxcclxcbiAgIDxkaXYgaWQ9XFxcInRvZG8tZm9ybVxcXCIgY2xhc3M9XFxcInJvdyBwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgIDxmb3JtPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPCEtLSBCSU5EIFRISVMgVkFMVUUgVE8gdG9kb0RhdGEudGV4dCBJTiBBTkdVTEFSIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGlucHV0LWxnIHRleHQtY2VudGVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiSSBhbSBhIGRldmVsb3BlclxcXCIgWyhuZ01vZGVsKV09XFxcImNoYXREYXRhLnRleHRcXFwiIFtkaXNhYmxlZF09XFxcImNoYXREYXRhLm5hbWU9PScnXFxcIiByZXF1aXJlZD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgIDwhLS0gY3JlYXRlVG9EbygpIFdJTEwgQ1JFQVRFIE5FVyBjaGF0cyAtLT5cXHJcXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XFxcImNyZWF0ZUNoYXQoKVxcXCIgW2Rpc2FibGVkXT1cXFwiY2hhdERhdGEudGV4dD09JydcXFwiPlNlbmQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG4gPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY2hhdC9jaGF0Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})