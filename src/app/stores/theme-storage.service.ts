import { Injectable } from "@angular/core";

const THEME = "theme";

@Injectable({
	providedIn: "root"
})
export class ThemeStorageService {
	private localStorage = window.localStorage;

	constructor() {}

	public saveTheme(theme: string) {
		localStorage.setItem(THEME, theme);
	}

	public getTheme(): string | null {
		return localStorage.getItem(THEME);
	}

	public removeTheme(): void {
		this.localStorage.removeItem(THEME);
	}
}
