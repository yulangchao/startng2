webpackHotUpdate(3,{

/***/ 234:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"container\\\">\\r\\n\\r\\n  <!-- HEADER AND TODO COUNT -->\\r\\n  <div class=\\\"jumbotron text-center\\\">\\r\\n      <h1>ChatRoom <span class=\\\"label label-info\\\">{{chats.length}}</span></h1>\\r\\n  </div>\\r\\n\\r\\n\\r\\n\\r\\n  <div class=\\\"col-sm-8 col-sm-offset-2 form-group\\\">\\r\\n      <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\\r\\n      <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"You have to enter your name before chatting\\\" [(ngModel)]=\\\"chatData.name\\\" required>\\r\\n  </div>\\r\\n\\r\\n\\r\\n  <!-- TODO LIST -->\\r\\n  <div id=\\\"todo-list\\\" class=\\\"row\\\">\\r\\n      <div  #scrollMe id=\\\"chatlist\\\" class=\\\"col-sm-8 col-sm-offset-2\\\" style=\\\"overflow-y: scroll; height:300px;\\\">\\r\\n\\r\\n          <!-- LOOP OVER THE chats IN $scope.chats -->\\r\\n          <div class=\\\"chatbox col-sm-12\\\" *ngFor=\\\"#chat of (chats.slice(chats.length - 10,chats.length) )\\\">\\r\\n                  <p>{{ chat.name}}: {{ chat.text }}</p>\\r\\n                  <p class=\\\"time\\\">{{chat.date}}</p>\\r\\n\\r\\n          </div>\\r\\n\\r\\n      </div>\\r\\n  </div>\\r\\n\\r\\n  <!-- FORM TO CREATE chats -->\\r\\n  <div id=\\\"todo-form\\\" class=\\\"row\\\">\\r\\n      <div class=\\\"col-sm-8 col-sm-offset-2 text-center\\\">\\r\\n          <form>\\r\\n              <div class=\\\"form-group\\\">\\r\\n                  <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\\r\\n                  <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"I am a developer\\\" [(ngModel)]=\\\"chatData.text\\\" [disabled]=\\\"chatData.name==''\\\" required>\\r\\n              </div>\\r\\n              <!-- createToDo() WILL CREATE NEW chats -->\\r\\n              <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-lg\\\"\\r\\n                (click)=\\\"createChat()\\\" [disabled]=\\\"chatData.text==''\\\">Send</button>\\r\\n              \\r\\n          </form>\\r\\n      </div>\\r\\n  </div>\\r\\n\\r\\n</div>\\r\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jaGF0L2NoYXQuaHRtbD8wM2QwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcclxcbiAgPCEtLSBIRUFERVIgQU5EIFRPRE8gQ09VTlQgLS0+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgIDxoMT5DaGF0Um9vbSA8c3BhbiBjbGFzcz1cXFwibGFiZWwgbGFiZWwtaW5mb1xcXCI+e3tjaGF0cy5sZW5ndGh9fTwvc3Bhbj48L2gxPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTIgZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgPCEtLSBCSU5EIFRISVMgVkFMVUUgVE8gdG9kb0RhdGEudGV4dCBJTiBBTkdVTEFSIC0tPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGlucHV0LWxnIHRleHQtY2VudGVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiWW91IGhhdmUgdG8gZW50ZXIgeW91ciBuYW1lIGJlZm9yZSBjaGF0dGluZ1xcXCIgWyhuZ01vZGVsKV09XFxcImNoYXREYXRhLm5hbWVcXFwiIHJlcXVpcmVkPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuICA8IS0tIFRPRE8gTElTVCAtLT5cXHJcXG4gIDxkaXYgaWQ9XFxcInRvZG8tbGlzdFxcXCIgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgPGRpdiAgI3Njcm9sbE1lIGlkPVxcXCJjaGF0bGlzdFxcXCIgY2xhc3M9XFxcImNvbC1zbS04IGNvbC1zbS1vZmZzZXQtMlxcXCIgc3R5bGU9XFxcIm92ZXJmbG93LXk6IHNjcm9sbDsgaGVpZ2h0OjMwMHB4O1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgIDwhLS0gTE9PUCBPVkVSIFRIRSBjaGF0cyBJTiAkc2NvcGUuY2hhdHMgLS0+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoYXRib3ggY29sLXNtLTEyXFxcIiAqbmdGb3I9XFxcIiNjaGF0IG9mIChjaGF0cy5zbGljZShjaGF0cy5sZW5ndGggLSAxMCxjaGF0cy5sZW5ndGgpIClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxwPnt7IGNoYXQubmFtZX19OiB7eyBjaGF0LnRleHQgfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRpbWVcXFwiPnt7Y2hhdC5kYXRlfX08L3A+XFxyXFxuXFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8IS0tIEZPUk0gVE8gQ1JFQVRFIGNoYXRzIC0tPlxcclxcbiAgPGRpdiBpZD1cXFwidG9kby1mb3JtXFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICA8Zm9ybT5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDwhLS0gQklORCBUSElTIFZBTFVFIFRPIHRvZG9EYXRhLnRleHQgSU4gQU5HVUxBUiAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBpbnB1dC1sZyB0ZXh0LWNlbnRlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkkgYW0gYSBkZXZlbG9wZXJcXFwiIFsobmdNb2RlbCldPVxcXCJjaGF0RGF0YS50ZXh0XFxcIiBbZGlzYWJsZWRdPVxcXCJjaGF0RGF0YS5uYW1lPT0nJ1xcXCIgcmVxdWlyZWQ+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDwhLS0gY3JlYXRlVG9EbygpIFdJTEwgQ1JFQVRFIE5FVyBjaGF0cyAtLT5cXHJcXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cXFwiY3JlYXRlQ2hhdCgpXFxcIiBbZGlzYWJsZWRdPVxcXCJjaGF0RGF0YS50ZXh0PT0nJ1xcXCI+U2VuZDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NoYXQvY2hhdC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})