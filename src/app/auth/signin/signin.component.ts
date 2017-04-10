// GLOBAL IMPORT
import {Component, Output, EventEmitter} from 'angular2/core';
import {Router} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
// SERVICES IMPORT
import{AuthService} from './../auth.service';

@Component({
	selector: 'my-signin',
	providers: [...HTTP_PROVIDERS, AuthService],
	template: require('./signin.component.html')
})

export class SignInComponent {

	signinData = {
		username: '',
		password: ''
	};
	error: string;

	constructor(private router: Router, private authService: AuthService){}

	onSubmit(){
		this.authService.signin(this.signinData.username, this.signinData.password)
			.subscribe((res) => {
			        console.log(res);
					if(res){
						this.authService.saveToken(JSON.stringify(res));
						console.log("1111111");
						this.router.navigate(['Index']);
						location.reload();
					}else{
						this.error = res.msg;
					}
				}
			)
	}
}
