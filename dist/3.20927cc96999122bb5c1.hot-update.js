webpackHotUpdate(3,{

/***/ 246:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"container\\\">\\n\\n  <!-- HEADER AND TODO COUNT -->\\n  <div class=\\\"col-md-6 col-md-offset-3\\\">\\n    <h2>Register</h2>\\n    <form name=\\\"form\\\" (ngSubmit)=\\\"f.form.valid && register()\\\" #f=\\\"ngForm\\\" novalidate>\\n      <div class=\\\"form-group\\\" [ngClass]=\\\"{ 'has-error': f.submitted && !username.valid }\\\">\\n        <label for=\\\"username\\\">Username</label>\\n        <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"username\\\"/>\\n        <div *ngIf=\\\"f.submitted && !username.valid\\\" class=\\\"help-block\\\">Username is required</div>\\n      </div>\\n      <div class=\\\"form-group\\\" [ngClass]=\\\"{ 'has-error': f.submitted && !password.valid }\\\">\\n        <label for=\\\"password\\\">Password</label>\\n        <input type=\\\"password\\\" class=\\\"form-control\\\" name=\\\"password\\\"/>\\n        <div *ngIf=\\\"f.submitted && !password.valid\\\" class=\\\"help-block\\\">Password is required</div>\\n      </div>\\n      <div class=\\\"form-group\\\">\\n        <button [disabled]=\\\"loading\\\" class=\\\"btn btn-primary\\\">Register</button>\\n        <img *ngIf=\\\"loading\\\" src=\\\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\\\" />\\n        <a class=\\\"btn btn-link\\\">Cancel</a>\\n      </div>\\n    </form>\\n  </div>\\n\\n\\n\\n\\n\\n  <div class=\\\"jumbotron text-center\\\">\\n      <h1>Signup</h1>\\n  </div>\\n\\n\\n  <!-- FORM TO CREATE TODOS -->\\n  <div id=\\\"todo-form\\\" class=\\\"row\\\">a\\n      <div class=\\\"col-sm-8 col-sm-offset-2 text-center\\\">\\n          <form>\\n              <div class=\\\"form-group\\\">\\n\\n                  <!-- BIND THIS VALUE TO signupData.text IN ANGULAR -->\\n                <input type=\\\"text\\\" class=\\\"form-control\\\"  [(ngModel)]=\\\"signupData.username\\\" required>\\n                <input type=\\\"text\\\" class=\\\"form-control\\\"  [(ngModel)]=\\\"signupData.password\\\" required>\\n\\n              </div>\\n\\n              <!-- createToDo() WILL CREATE NEW TODOS -->\\n              <button type=\\\"submit\\\" class=\\\"btn btn-primary btn-lg\\\"\\n                (click)=\\\"createSignup()\\\">Register</button>\\n\\n          </form>\\n      </div>\\n  </div>\\n\\n</div>\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQ2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaWdudXAvc2lnbnVwLmh0bWw/YzA0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG5cXG4gIDwhLS0gSEVBREVSIEFORCBUT0RPIENPVU5UIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXFxcIj5cXG4gICAgPGgyPlJlZ2lzdGVyPC9oMj5cXG4gICAgPGZvcm0gbmFtZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwiZi5mb3JtLnZhbGlkICYmIHJlZ2lzdGVyKClcXFwiICNmPVxcXCJuZ0Zvcm1cXFwiIG5vdmFsaWRhdGU+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7ICdoYXMtZXJyb3InOiBmLnN1Ym1pdHRlZCAmJiAhdXNlcm5hbWUudmFsaWQgfVxcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ1c2VybmFtZVxcXCI+VXNlcm5hbWU8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInVzZXJuYW1lXFxcIi8+XFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJmLnN1Ym1pdHRlZCAmJiAhdXNlcm5hbWUudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5Vc2VybmFtZSBpcyByZXF1aXJlZDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieyAnaGFzLWVycm9yJzogZi5zdWJtaXR0ZWQgJiYgIXBhc3N3b3JkLnZhbGlkIH1cXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiLz5cXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFwYXNzd29yZC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPlBhc3N3b3JkIGlzIHJlcXVpcmVkPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XFxcImxvYWRpbmdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlJlZ2lzdGVyPC9idXR0b24+XFxuICAgICAgICA8aW1nICpuZ0lmPVxcXCJsb2FkaW5nXFxcIiBzcmM9XFxcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEVBQVFBUElBQVAvLy93QUFBTUxDd2tKQ1FnQUFBR0ppWW9LQ2dwS1NraUgvQzA1RlZGTkRRVkJGTWk0d0F3RUFBQUFoL2hwRGNtVmhkR1ZrSUhkcGRHZ2dZV3BoZUd4dllXUXVhVzVtYndBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE13aTYzUDR3eWtsckUyTUlPZ2dabkFkT21HWUpSYkV4d3JvVW1jRzJMbURFd25IUUxWc1lPZDJtQnprWURBZEthK2RJQUFBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE5BaTYzUDVPakNFZ0c0UU11N0RtaWtSeFFsRlVZREVaSUdCTVJWc2FxSHdjdFhYZjdXRVlCNEFnMXhqaWhrTVpzaVVrS2hJQUlma0VDUW9BQUFBc0FBQUFBQkFBRUFBQUF6WUl1aklqSzhwQnlKRE1sRll2Qm9WakhBNzBHVTd4U1VKaG1LdHdIUEFLekxPOUhNYW9Ld0paN1JmOEFZUEREektwWkJxZnZ3UUFJZmtFQ1FvQUFBQXNBQUFBQUJBQUVBQUFBek1JdW1JbEs4b3locEhzbkZaZmhZdW1DWVVoREFReFJJZGhIQkdxUm9LdzBSOERZbEpkOHowZk1EZ3NHby9JcEhJNVRBQUFJZmtFQ1FvQUFBQXNBQUFBQUJBQUVBQUFBeklJdW5Jbkswcm5aQlR3R1BOTWdRd21kc05nWEdKVWxJV0V1UjVvV1VJcHo4cEFFQU1lNlR3Znd5WXNHby9JcEZLU0FBQWgrUVFKQ2dBQUFDd0FBQUFBRUFBUUFBQURNd2k2SU1LUU9SZmpkT2U4MnA0d0djY2M0Q0V1UXJhZHlsZXNvakVNQmdzVWMyRzdzRFgzbFFHQk1MQUppYnVmYlNsS0FBQWgrUVFKQ2dBQUFDd0FBQUFBRUFBUUFBQURNZ2k2M1A3d0NSSFpuRlZkbWdIdTJuRndsV0NJM1dHYzNUU1doVUZHeFRBVWtHQ2J0Z0VOQk1KQUVKc3hnTUxXenBFQUFDSDVCQWtLQUFBQUxBQUFBQUFRQUJBQUFBTXlDTHJjL2pES1NhdGxRdFNjS2RjZUNBakRJSTdIY1E0RU1UQ3B5ckN1VUJqQ1lSZ0hWdHFsQWlCMVloaUNubHNSa0FBQU93QUFBQUFBQUFBQUFBPT1cXFwiIC8+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rXFxcIj5DYW5jZWw8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZm9ybT5cXG4gIDwvZGl2PlxcblxcblxcblxcblxcblxcbiAgPGRpdiBjbGFzcz1cXFwianVtYm90cm9uIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICA8aDE+U2lnbnVwPC9oMT5cXG4gIDwvZGl2PlxcblxcblxcbiAgPCEtLSBGT1JNIFRPIENSRUFURSBUT0RPUyAtLT5cXG4gIDxkaXYgaWQ9XFxcInRvZG8tZm9ybVxcXCIgY2xhc3M9XFxcInJvd1xcXCI+YVxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04IGNvbC1zbS1vZmZzZXQtMiB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgIDxmb3JtPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgPCEtLSBCSU5EIFRISVMgVkFMVUUgVE8gc2lnbnVwRGF0YS50ZXh0IElOIEFOR1VMQVIgLS0+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAgWyhuZ01vZGVsKV09XFxcInNpZ251cERhdGEudXNlcm5hbWVcXFwiIHJlcXVpcmVkPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgIFsobmdNb2RlbCldPVxcXCJzaWdudXBEYXRhLnBhc3N3b3JkXFxcIiByZXF1aXJlZD5cXG5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgPCEtLSBjcmVhdGVUb0RvKCkgV0lMTCBDUkVBVEUgTkVXIFRPRE9TIC0tPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIlxcbiAgICAgICAgICAgICAgICAoY2xpY2spPVxcXCJjcmVhdGVTaWdudXAoKVxcXCI+UmVnaXN0ZXI8L2J1dHRvbj5cXG5cXG4gICAgICAgICAgPC9mb3JtPlxcbiAgICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuXFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc2lnbnVwL3NpZ251cC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})