import { ToastHelper } from "@shared/helpers/toast.helper";
import { IMensageToast } from "@model/message-toast.model";
import { ToastTypeEnum } from "@shared/enum/toast.enum";
import { AuthService } from "@core/services/auth.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-signin",
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

	async onSubmit() {
		try {
			await this.authService.login(this.formSignin.value);

			const messageToast: IMensageToast = {
				title: ToastTypeEnum.SUCCESS,
				type: ToastTypeEnum.SUCCESS,
				description: "Cadastro realizado com sucesso!"
			};

			ToastHelper.showMiniToast(messageToast);
		} catch (error) {
			console.error(error);

			ToastHelper.showMiniToast(error);
		}
	}

	onSignUp() {
		this.router.navigate(["signup"]);
	}

	get username() {
		return this.formSignin.get("username");
	}

	get password() {
		return this.formSignin.get("password");
	}
}
