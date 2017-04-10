// GLOBAL IMPORT
import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
// import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {HTTP_PROVIDERS} from 'angular2/http';
// SERVICES IMPORT
import{AuthService} from './../auth.service';

@Component({
	selector: 'my-signup',
	providers: [...HTTP_PROVIDERS, AuthService],
	template: require('./signup.component.html')
})

export class SignUpComponent { 

	error: string; // the possible error message when signup
    result: any;
	signupData = {
		username: '',
		password: '',
		email: ''
	};
	constructor(private router: Router, private authService: AuthService){}

	// signin the new user if signup successfully
	signin(username: string, password: string){
		this.authService.signin(username, password)
			.subscribe(
				(res) => {
					if(res){
						this.authService.saveToken(JSON.stringify(res));
						console.log("66666666");
						this.router.navigate(['/chat']);
						location.reload();
					}else{
						this.error = res.msg;
					}
				}
			)
	}

	// create the new user
	signup(){
		console.log(this.signupData);
		this.authService.signup(this.signupData)
			.subscribe(
				(res) => {
					if(res){ // if user created successfully
						// signin the new user
						this.signin(this.signupData.username, this.signupData.password);
					}else{
						this.error = res.msg;
					}
				}
			)
	}

}
