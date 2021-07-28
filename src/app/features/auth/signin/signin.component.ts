import { AuthService } from "@core/services/auth.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-signin",
	templateUrl: "./signin.component.html",
	styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
	login = {
		username: "",
		password: "",
		type_user: ""
	};

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit() {}

	async onSubmit() {
		try {
			const result = await this.authService.login(this.login);
			console.log("Login efetuado: ", result);

			this.router.navigate([""]);
		} catch (error) {
			console.error(error);
		}
	}

	onSignUp() {}
}
