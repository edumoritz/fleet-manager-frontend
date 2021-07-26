import { Router } from "@angular/router";
import { AuthService } from "./../../core/services/auth.service";
import { Component, OnInit } from "@angular/core";

interface TypeUser {
	value: string;
	key: string;
}

@Component({
	selector: "app-auth",
	templateUrl: "./auth.component.html",
	styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
	isSignUp = false;

	typesUser: TypeUser[];

	selectedTypeUser: TypeUser;

	login = {
		username: "",
		password: "",
		type_user: ""
	};

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit() {
		this.typesUser = [
			{ value: "Condutor", key: "CONDUCTOR" },
			{ value: "Cliente", key: "CLIENT" },
			{ value: "Administrador", key: "ADMIN" }
		];
	}

	async onSubmit() {
		try {
			const result = await this.authService.login(this.login);
			console.log("Login efetuado: ", result);

			this.router.navigate([""]);
		} catch (error) {
			console.error(error);
		}
	}

	onSignUp() {
		this.isSignUp = true;
	}

	onSignIn() {
		this.isSignUp = false;
	}
}
