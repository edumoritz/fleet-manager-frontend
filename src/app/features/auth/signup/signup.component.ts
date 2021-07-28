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
	typesUser: TypeUser[];

	selectedTypeUser: TypeUser;

	login = {
		username: "",
		password: ""
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

	onSignIn() {}
}
