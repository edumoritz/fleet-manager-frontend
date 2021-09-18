import { ExceptionServer } from "./../../model/exception-server.model";
import { User } from "./../models/user.model";
import { ToastTypeEnum } from "@shared/enum/toast.enum";
import { ToastHelper } from "@shared/helpers/toast.helper";
import { LoadingService } from "./loading.service";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import jwt_decode from "jwt-decode";
import { TokenStorageService } from "@stores/token-storage.service";
import { AuthenticationFacade } from "@core/facades/authentication.facade";
import { take } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	constructor(
		private router: Router,
		private tokenStorageService: TokenStorageService,
		private authenticationFacade: AuthenticationFacade,
		private loadingService: LoadingService
	) {}

	login(user: User) {
		this.loadingService.show();

		this.authenticationFacade
			.login(user)
			.pipe(take(1))
			.subscribe(
				(result) => {
					if (result && result.accessToken) {
						this.loadingService.close();

						ToastHelper.showMiniToast({
							type: ToastTypeEnum.SUCCESS,
							description: "Login realizado com sucesso!"
						});

						this.tokenStorageService.saveAuthToken(
							result.accessToken
						);

						this.router.navigate([""]);
					}
				},
				(error: ExceptionServer) => {
					console.log("error: ", error);

					if (error.statusCode === 401) {
						ToastHelper.showMessage({
							type: ToastTypeEnum.WARNING,
							description: error.message
						});
					} else {
						ToastHelper.showMessage({
							type: ToastTypeEnum.ERROR,
							description: error.message
						});
					}

					this.loadingService.close();
				}
			);
	}

	signup(user: User) {
		this.loadingService.show();

		this.authenticationFacade
			.signup(user)
			.pipe(take(1))
			.subscribe(
				() => {
					this.loadingService.close();

					ToastHelper.showMessage({
						type: ToastTypeEnum.SUCCESS,
						description: "Agora é só aguardar para ser aprovado!"
					});

					this.router.navigate(["signin"]);
				},
				(error: ExceptionServer) => {
					console.error(error);

					this.loadingService.close();

					ToastHelper.showMiniToast({
						type: ToastTypeEnum.ERROR,
						description: "Ocorreu um erro no cadastro!"
					});
				}
			);
	}

	getAuthorizationToken() {
		const token = this.tokenStorageService.getAuthToken();
		return token;
	}

	getTokenExpirationDate(token: string): Date | null {
		const decoded: { exp: number } = jwt_decode(token);

		if (decoded.exp === undefined) {
			return null;
		}

		const date = new Date(0);
		date.setUTCSeconds(decoded.exp);
		return date;
	}

	isTokenExpired(token?: string): boolean {
		if (!token) {
			return true;
		}

		const date = this.getTokenExpirationDate(token);
		if (!date) {
			return false;
		}

		if (!(date.valueOf() > new Date().valueOf())) {
			this.tokenStorageService.removeTokens();
		}

		return false;
	}

	isUserLoggedIn() {
		const token = this.getAuthorizationToken();
		if (!token) {
			return false;
		} else if (this.isTokenExpired(token)) {
			return false;
		}

		return true;
	}

	logout() {
		this.tokenStorageService.removeTokens();

		this.router.navigate(["/login"]);
	}
}
