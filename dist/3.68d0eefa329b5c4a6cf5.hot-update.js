webpackHotUpdate(3,{

/***/ 237:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"container\\\">\\r\\n\\r\\n  <!-- HEADER AND TODO COUNT -->\\r\\n  <div class=\\\"jumbotron text-center\\\">\\r\\n      <h1>Todo <span class=\\\"label label-info\\\">{{todos.length}}</span></h1>\\r\\n  </div>\\r\\n\\r\\n  <!-- TODO LIST -->\\r\\n  <div id=\\\"todo-list\\\" class=\\\"row\\\">\\r\\n      <div class=\\\"col-sm-4 col-sm-offset-4\\\">\\r\\n\\r\\n          <!-- LOOP OVER THE TODOS IN $scope.todos -->\\r\\n          <div class=\\\"checkbox\\\" *ngFor=\\\"#todo of todos\\\">\\r\\n              <label>\\r\\n                  <input type=\\\"checkbox\\\" (click)=\\\"deleteTodo(todo._id)\\\" bind-checked=\\\"false\\\">\\r\\n                  {{ todo.text }}\\r\\n              </label>\\r\\n          </div>\\r\\n\\r\\n      </div>\\r\\n  </div>\\r\\n\\r\\n  <!-- FORM TO CREATE TODOS -->\\r\\n  <div id=\\\"todo-form\\\" class=\\\"row\\\">\\r\\n      <div class=\\\"col-sm-8 col-sm-offset-2 text-center\\\">\\r\\n          <form>\\r\\n              <div class=\\\"form-group\\\">\\r\\n\\r\\n                  <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\\r\\n                  <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"I want to buy a puppy that will love me forever\\\" [(ngModel)]=\\\"todoData.text\\\" required>\\r\\n              </div>\\r\\n\\r\\n              <!-- createToDo() WILL CREATE NEW TODOS -->\\r\\n              <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-lg\\\"\\r\\n                (click)=\\\"createTodo()\\\">Add</button>\\r\\n              \\r\\n          </form>\\r\\n      </div>\\r\\n  </div>\\r\\n\\r\\n</div>\\r\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90b2RvL3RvZG8uaHRtbD81MTU0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcclxcbiAgPCEtLSBIRUFERVIgQU5EIFRPRE8gQ09VTlQgLS0+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb24gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgIDxoMT5Ub2RvIDxzcGFuIGNsYXNzPVxcXCJsYWJlbCBsYWJlbC1pbmZvXFxcIj57e3RvZG9zLmxlbmd0aH19PC9zcGFuPjwvaDE+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDwhLS0gVE9ETyBMSVNUIC0tPlxcclxcbiAgPGRpdiBpZD1cXFwidG9kby1saXN0XFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNCBjb2wtc20tb2Zmc2V0LTRcXFwiPlxcclxcblxcclxcbiAgICAgICAgICA8IS0tIExPT1AgT1ZFUiBUSEUgVE9ET1MgSU4gJHNjb3BlLnRvZG9zIC0tPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCIgKm5nRm9yPVxcXCIjdG9kbyBvZiB0b2Rvc1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiAoY2xpY2spPVxcXCJkZWxldGVUb2RvKHRvZG8uX2lkKVxcXCIgYmluZC1jaGVja2VkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAge3sgdG9kby50ZXh0IH19XFxyXFxuICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPCEtLSBGT1JNIFRPIENSRUFURSBUT0RPUyAtLT5cXHJcXG4gIDxkaXYgaWQ9XFxcInRvZG8tZm9ybVxcXCIgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLXNtLW9mZnNldC0yIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgPGZvcm0+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICA8IS0tIEJJTkQgVEhJUyBWQUxVRSBUTyB0b2RvRGF0YS50ZXh0IElOIEFOR1VMQVIgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgdGV4dC1jZW50ZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJJIHdhbnQgdG8gYnV5IGEgcHVwcHkgdGhhdCB3aWxsIGxvdmUgbWUgZm9yZXZlclxcXCIgWyhuZ01vZGVsKV09XFxcInRvZG9EYXRhLnRleHRcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICA8IS0tIGNyZWF0ZVRvRG8oKSBXSUxMIENSRUFURSBORVcgVE9ET1MgLS0+XFxyXFxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiXFxyXFxuICAgICAgICAgICAgICAgIChjbGljayk9XFxcImNyZWF0ZVRvZG8oKVxcXCI+QWRkPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvdG9kby90b2RvLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})