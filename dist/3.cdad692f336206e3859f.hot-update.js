webpackHotUpdate(3,{

/***/ 333:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"container\\\">\\r\\n\\r\\n  <!-- HEADER AND TODO COUNT -->\\r\\n  <div class=\\\"jumbotron text-center\\\">\\r\\n      <h1>Chat <span class=\\\"label label-info\\\">{{chats.length}}</span></h1>\\r\\n  </div>\\r\\n\\r\\n\\r\\n\\r\\n                <div class=\\\"form-group\\\">\\r\\n\\r\\n                    <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\\r\\n                    <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"enter your name\\\" [(ngModel)]=\\\"chatData.name\\\" required>\\r\\n                </div>\\r\\n\\r\\n\\r\\n                {{chatData.name}}\\r\\n\\r\\n\\r\\n  <!-- TODO LIST -->\\r\\n  <div id=\\\"todo-list\\\" class=\\\"row\\\">\\r\\n      <div class=\\\"col-sm-4 col-sm-offset-4\\\">\\r\\n\\r\\n          <!-- LOOP OVER THE chats IN $scope.chats -->\\r\\n          <div class=\\\"checkbox\\\" *ngFor=\\\"#chat of chats\\\">\\r\\n              <label>\\r\\n                  <input type=\\\"checkbox\\\" (click)=\\\"deleteChat(chat._id)\\\" bind-checked=\\\"false\\\">\\r\\n                  {{ chat.name}}: \\r\\n                  {{ chat.text }}\\r\\n              </label>\\r\\n          </div>\\r\\n\\r\\n      </div>\\r\\n  </div>\\r\\n\\r\\n  <!-- FORM TO CREATE chats -->\\r\\n  <div id=\\\"todo-form\\\" class=\\\"row\\\">\\r\\n      <div class=\\\"col-sm-8 col-sm-offset-2 text-center\\\">\\r\\n          <form>\\r\\n              <div class=\\\"form-group\\\">\\r\\n\\r\\n                  <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\\r\\n                  <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"I want to buy a puppy that will love me forever\\\" [(ngModel)]=\\\"chatData.text\\\" required>\\r\\n              </div>\\r\\n\\r\\n              <!-- createToDo() WILL CREATE NEW chats -->\\r\\n              <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-lg\\\"\\r\\n                (click)=\\\"createChat()\\\">Add</button>\\r\\n              \\r\\n          </form>\\r\\n      </div>\\r\\n  </div>\\r\\n\\r\\n</div>\\r\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jaGF0L2NoYXQuaHRtbD8wM2QwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcclxcbiAgPCEtLSBIRUFERVIgQU5EIFRPRE8gQ09VTlQgLS0+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgIDxoMT5DaGF0IDxzcGFuIGNsYXNzPVxcXCJsYWJlbCBsYWJlbC1pbmZvXFxcIj57e2NoYXRzLmxlbmd0aH19PC9zcGFuPjwvaDE+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJJTkQgVEhJUyBWQUxVRSBUTyB0b2RvRGF0YS50ZXh0IElOIEFOR1VMQVIgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBpbnB1dC1sZyB0ZXh0LWNlbnRlclxcXCIgcGxhY2Vob2xkZXI9XFxcImVudGVyIHlvdXIgbmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcImNoYXREYXRhLm5hbWVcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAge3tjaGF0RGF0YS5uYW1lfX1cXHJcXG5cXHJcXG5cXHJcXG4gIDwhLS0gVE9ETyBMSVNUIC0tPlxcclxcbiAgPGRpdiBpZD1cXFwidG9kby1saXN0XFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNCBjb2wtc20tb2Zmc2V0LTRcXFwiPlxcclxcblxcclxcbiAgICAgICAgICA8IS0tIExPT1AgT1ZFUiBUSEUgY2hhdHMgSU4gJHNjb3BlLmNoYXRzIC0tPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCIgKm5nRm9yPVxcXCIjY2hhdCBvZiBjaGF0c1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiAoY2xpY2spPVxcXCJkZWxldGVDaGF0KGNoYXQuX2lkKVxcXCIgYmluZC1jaGVja2VkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAge3sgY2hhdC5uYW1lfX06IFxcclxcbiAgICAgICAgICAgICAgICAgIHt7IGNoYXQudGV4dCB9fVxcclxcbiAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDwhLS0gRk9STSBUTyBDUkVBVEUgY2hhdHMgLS0+XFxyXFxuICA8ZGl2IGlkPVxcXCJ0b2RvLWZvcm1cXFwiIGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04IGNvbC1zbS1vZmZzZXQtMiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgIDxmb3JtPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgPCEtLSBCSU5EIFRISVMgVkFMVUUgVE8gdG9kb0RhdGEudGV4dCBJTiBBTkdVTEFSIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGlucHV0LWxnIHRleHQtY2VudGVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiSSB3YW50IHRvIGJ1eSBhIHB1cHB5IHRoYXQgd2lsbCBsb3ZlIG1lIGZvcmV2ZXJcXFwiIFsobmdNb2RlbCldPVxcXCJjaGF0RGF0YS50ZXh0XFxcIiByZXF1aXJlZD5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgPCEtLSBjcmVhdGVUb0RvKCkgV0lMTCBDUkVBVEUgTkVXIGNoYXRzIC0tPlxcclxcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAoY2xpY2spPVxcXCJjcmVhdGVDaGF0KClcXFwiPkFkZDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NoYXQvY2hhdC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})