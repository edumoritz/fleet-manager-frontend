import { Injectable } from "@angular/core";

const AUTH_TOKEN_KEY = "authToken";

@Injectable({
	providedIn: "root"
})
export class TokenStorageService {
	private localStorage = window.localStorage;

	constructor() {}

	public saveAuthToken(authToken: string) {
		localStorage.setItem(AUTH_TOKEN_KEY, authToken);
	}

	public getAuthToken(): string | null {
		return localStorage.getItem(AUTH_TOKEN_KEY);
	}

	public removeTokens(): void {
		this.localStorage.removeItem(AUTH_TOKEN_KEY);
	}
}
