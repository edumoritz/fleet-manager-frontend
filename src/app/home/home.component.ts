import { Component, OnInit } from "@angular/core";
import { AuthService } from "@core/services/auth.service";
import { LoadingService } from "@core/services/loading.service";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
	constructor(
		private authService: AuthService,
		private loadingService: LoadingService
	) {}

	ngOnInit() {}

	logout() {
		this.authService.logout();
	}
}
