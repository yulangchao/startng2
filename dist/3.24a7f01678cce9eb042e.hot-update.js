webpackHotUpdate(3,{

/***/ 246:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"container\\\">\\n\\n  <!-- HEADER AND TODO COUNT -->\\n  <div class=\\\"jumbotron text-center\\\">\\n      <h1>Signup <span class=\\\"label label-info\\\">{{signups.length}}</span></h1>\\n  </div>\\n\\n  <!-- TODO LIST -->\\n  <div id=\\\"todo-list\\\" class=\\\"row\\\">\\n      <div class=\\\"col-sm-4 col-sm-offset-4\\\">\\n\\n          <!-- LOOP OVER THE TODOS IN $scope.signups -->\\n          <div class=\\\"checkbox\\\" *ngFor=\\\"#signup of signups\\\">\\n              <label>\\n                  <input type=\\\"checkbox\\\" (click)=\\\"deleteSignup(signup._id)\\\" bind-checked=\\\"false\\\">\\n                  {{ signup.username }} {{signup.password}}\\n              </label>\\n          </div>\\n\\n      </div>\\n  </div>\\n\\n  <!-- FORM TO CREATE TODOS -->\\n  <div id=\\\"todo-form\\\" class=\\\"row\\\">\\n      <div class=\\\"col-sm-8 col-sm-offset-2 text-center\\\">\\n          <form>\\n              <div class=\\\"form-group\\\">\\n\\n                  <!-- BIND THIS VALUE TO signupData.text IN ANGULAR -->\\n                  <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"I want to buy a puppy that will love me forever\\\" [(ngModel)]=\\\"signupData.username\\\" required>\\n                <input type=\\\"text\\\" class=\\\"form-control input-lg text-center\\\" placeholder=\\\"I want to buy a puppy that will love me forever\\\" [(ngModel)]=\\\"signupData.password\\\" required>\\n\\n              </div>\\n\\n              <!-- createToDo() WILL CREATE NEW TODOS -->\\n              <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-lg\\\"\\n                (click)=\\\"createSignup()\\\">Add</button>\\n\\n          </form>\\n      </div>\\n  </div>\\n\\n</div>\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQ2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaWdudXAvc2lnbnVwLmh0bWw/YzA0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG5cXG4gIDwhLS0gSEVBREVSIEFORCBUT0RPIENPVU5UIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwianVtYm90cm9uIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICA8aDE+U2lnbnVwIDxzcGFuIGNsYXNzPVxcXCJsYWJlbCBsYWJlbC1pbmZvXFxcIj57e3NpZ251cHMubGVuZ3RofX08L3NwYW4+PC9oMT5cXG4gIDwvZGl2PlxcblxcbiAgPCEtLSBUT0RPIExJU1QgLS0+XFxuICA8ZGl2IGlkPVxcXCJ0b2RvLWxpc3RcXFwiIGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00IGNvbC1zbS1vZmZzZXQtNFxcXCI+XFxuXFxuICAgICAgICAgIDwhLS0gTE9PUCBPVkVSIFRIRSBUT0RPUyBJTiAkc2NvcGUuc2lnbnVwcyAtLT5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiICpuZ0Zvcj1cXFwiI3NpZ251cCBvZiBzaWdudXBzXFxcIj5cXG4gICAgICAgICAgICAgIDxsYWJlbD5cXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIChjbGljayk9XFxcImRlbGV0ZVNpZ251cChzaWdudXAuX2lkKVxcXCIgYmluZC1jaGVja2VkPVxcXCJmYWxzZVxcXCI+XFxuICAgICAgICAgICAgICAgICAge3sgc2lnbnVwLnVzZXJuYW1lIH19IHt7c2lnbnVwLnBhc3N3b3JkfX1cXG4gICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuXFxuICA8IS0tIEZPUk0gVE8gQ1JFQVRFIFRPRE9TIC0tPlxcbiAgPGRpdiBpZD1cXFwidG9kby1mb3JtXFxcIiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTIgdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICA8Zm9ybT5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgIDwhLS0gQklORCBUSElTIFZBTFVFIFRPIHNpZ251cERhdGEudGV4dCBJTiBBTkdVTEFSIC0tPlxcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGlucHV0LWxnIHRleHQtY2VudGVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiSSB3YW50IHRvIGJ1eSBhIHB1cHB5IHRoYXQgd2lsbCBsb3ZlIG1lIGZvcmV2ZXJcXFwiIFsobmdNb2RlbCldPVxcXCJzaWdudXBEYXRhLnVzZXJuYW1lXFxcIiByZXF1aXJlZD5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgdGV4dC1jZW50ZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJJIHdhbnQgdG8gYnV5IGEgcHVwcHkgdGhhdCB3aWxsIGxvdmUgbWUgZm9yZXZlclxcXCIgWyhuZ01vZGVsKV09XFxcInNpZ251cERhdGEucGFzc3dvcmRcXFwiIHJlcXVpcmVkPlxcblxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICA8IS0tIGNyZWF0ZVRvRG8oKSBXSUxMIENSRUFURSBORVcgVE9ET1MgLS0+XFxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiXFxuICAgICAgICAgICAgICAgIChjbGljayk9XFxcImNyZWF0ZVNpZ251cCgpXFxcIj5BZGQ8L2J1dHRvbj5cXG5cXG4gICAgICAgICAgPC9mb3JtPlxcbiAgICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuXFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc2lnbnVwL3NpZ251cC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})