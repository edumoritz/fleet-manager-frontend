import { Router } from "@angular/router";
import { environment } from "./../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import jwt_decode from "jwt-decode";
import { TokenStorageService } from "@stores/token-storage.service";

interface TokenDTO {
	accessToken: string;
}

@Injectable({
	providedIn: "root"
})
export class AuthService {
	constructor(
		private http: HttpClient,
		private router: Router,
		private tokenStorageService: TokenStorageService
	) {}

	async login(user: any) {
		const result = await this.http
			.post<TokenDTO>(`${environment.api_url}/auth/signin`, user)
			.toPromise();

		if (result && result.accessToken) {
			this.tokenStorageService.saveAuthToken(result.accessToken);
			return true;
		}

		return false;
	}

	async createAccount(account: any) {
		const result = await this.http
			.post<TokenDTO>(`${environment.api_url}/users`, account)
			.toPromise();
		return result;
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
