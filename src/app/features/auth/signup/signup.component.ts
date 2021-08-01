import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "@core/services/auth.service";
import { Component, OnInit } from "@angular/core";

interface TypeUser {
	value: string;
	key: string;
}

@Component({
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
	formSignup: FormGroup;

	typesUser: TypeUser[];

	selectedTypeUser: TypeUser;

	constructor(
		private authService: AuthService,
		private router: Router,
		private fb: FormBuilder
	) {}

	ngOnInit() {
		this.createForm();
	}

	createForm() {
		this.typesUser = [
			{ value: "Condutor", key: "CONDUCTOR" },
			{ value: "Cliente", key: "CLIENT" },
			{ value: "Administrador", key: "ADMIN" }
		];

		this.formSignup = this.fb.group({
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
			],
			type_user: ["", Validators.compose([Validators.required])]
		});
	}

	async onSubmit() {
		try {
			await this.authService.signup(this.formSignup.value);
		} catch (error) {
			console.error(error);
		}
	}

	changeTypeUser() {
		this.formSignup.get("type_user")?.setValue(this.selectedTypeUser?.key);
	}

	onSignIn() {
		this.router.navigate(["signin"]);
	}

	get username() {
		return this.formSignup.get("username");
	}

	get password() {
		return this.formSignup.get("password");
	}

	get getTypeUser() {
		return this.formSignup.get("type_user");
	}
}
