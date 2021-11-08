import { AuthService } from "@core/services/auth.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	templateUrl: "./signin.component.html",
	styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
	formSignin: FormGroup;

	constructor(
		private authService: AuthService,
		private router: Router,
		private fb: FormBuilder
	) {}

	ngOnInit() {
		this.createForm();
	}

	createForm() {
		this.formSignin = this.fb.group({
			username: [
				"",
				Validators.compose([
					Validators.required,
					Validators.minLength(3)
				])
			],
			password: [
				"",
				Validators.compose([
					Validators.required,
					Validators.pattern(
						/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
					)
				])
			]
		});
	}

	onSubmit() {
		this.authService.login(this.formSignin.value);
	}

	onSignUp() {
		this.router.navigate(["login/signup"]);
	}

	get username() {
		return this.formSignin.get("username");
	}

	get password() {
		return this.formSignin.get("password");
	}
}
