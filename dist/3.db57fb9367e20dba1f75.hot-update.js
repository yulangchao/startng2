webpackHotUpdate(3,{

/***/ 231:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"container\\\">\\r\\n\\r\\n  <!-- HEADER AND TODO COUNT -->\\r\\n  <div class=\\\"jumbotron text-center\\\">\\r\\n      <h1>Chat <span class=\\\"label label-info\\\">{{chats.length}}</span></h1>\\r\\n  </div>\\r\\n\\r\\n\\r\\n\\r\\n                <div class=\\\"form-group\\\">\\r\\n                    <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\\r\\n                    <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"enter your name\\\" [(ngModel)]=\\\"chatData.name\\\" required>\\r\\n                </div>\\r\\n\\r\\n\\r\\n                {{chatData.name}}\\r\\n\\r\\n  <!-- TODO LIST -->\\r\\n  <div id=\\\"todo-list\\\" class=\\\"row\\\">\\r\\n      <div class=\\\"col-sm-8 col-sm-offset-2\\\" >\\r\\n\\r\\n          <!-- LOOP OVER THE chats IN $scope.chats -->\\r\\n          <div class=\\\"chatbox col-sm-12\\\" *ngFor=\\\"#chat of chats\\\">\\r\\n                  <p>{{ chat.name}}: {{ chat.text }}</p>\\r\\n                  <p class=\\\"time\\\">{{chat.date}}</p>\\r\\n\\r\\n          </div>\\r\\n\\r\\n      </div>\\r\\n  </div>\\r\\n\\r\\n  <!-- FORM TO CREATE chats -->\\r\\n  <div id=\\\"todo-form\\\" class=\\\"row\\\">\\r\\n      <div class=\\\"col-sm-8 col-sm-offset-2 text-center\\\">\\r\\n          <form>\\r\\n              <div class=\\\"form-group\\\">\\r\\n\\r\\n                  <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\\r\\n                  <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"I want to buy a puppy that will love me forever\\\" [(ngModel)]=\\\"chatData.text\\\" required>\\r\\n              </div>\\r\\n\\r\\n              <!-- createToDo() WILL CREATE NEW chats -->\\r\\n              <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-lg\\\"\\r\\n                (click)=\\\"createChat()\\\">Add</button>\\r\\n              \\r\\n          </form>\\r\\n      </div>\\r\\n  </div>\\r\\n\\r\\n</div>\\r\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jaGF0L2NoYXQuaHRtbD8wM2QwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcclxcbiAgPCEtLSBIRUFERVIgQU5EIFRPRE8gQ09VTlQgLS0+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgIDxoMT5DaGF0IDxzcGFuIGNsYXNzPVxcXCJsYWJlbCBsYWJlbC1pbmZvXFxcIj57e2NoYXRzLmxlbmd0aH19PC9zcGFuPjwvaDE+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJJTkQgVEhJUyBWQUxVRSBUTyB0b2RvRGF0YS50ZXh0IElOIEFOR1VMQVIgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBpbnB1dC1sZyB0ZXh0LWNlbnRlclxcXCIgcGxhY2Vob2xkZXI9XFxcImVudGVyIHlvdXIgbmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcImNoYXREYXRhLm5hbWVcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAge3tjaGF0RGF0YS5uYW1lfX1cXHJcXG5cXHJcXG4gIDwhLS0gVE9ETyBMSVNUIC0tPlxcclxcbiAgPGRpdiBpZD1cXFwidG9kby1saXN0XFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTJcXFwiID5cXHJcXG5cXHJcXG4gICAgICAgICAgPCEtLSBMT09QIE9WRVIgVEhFIGNoYXRzIElOICRzY29wZS5jaGF0cyAtLT5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hhdGJveCBjb2wtc20tMTJcXFwiICpuZ0Zvcj1cXFwiI2NoYXQgb2YgY2hhdHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxwPnt7IGNoYXQubmFtZX19OiB7eyBjaGF0LnRleHQgfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRpbWVcXFwiPnt7Y2hhdC5kYXRlfX08L3A+XFxyXFxuXFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8IS0tIEZPUk0gVE8gQ1JFQVRFIGNoYXRzIC0tPlxcclxcbiAgPGRpdiBpZD1cXFwidG9kby1mb3JtXFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICA8Zm9ybT5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgIDwhLS0gQklORCBUSElTIFZBTFVFIFRPIHRvZG9EYXRhLnRleHQgSU4gQU5HVUxBUiAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBpbnB1dC1sZyB0ZXh0LWNlbnRlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkkgd2FudCB0byBidXkgYSBwdXBweSB0aGF0IHdpbGwgbG92ZSBtZSBmb3JldmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiY2hhdERhdGEudGV4dFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgIDwhLS0gY3JlYXRlVG9EbygpIFdJTEwgQ1JFQVRFIE5FVyBjaGF0cyAtLT5cXHJcXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cXFwiY3JlYXRlQ2hhdCgpXFxcIj5BZGQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jaGF0L2NoYXQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})