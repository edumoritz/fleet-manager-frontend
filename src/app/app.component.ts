import { ThemeService } from "./shared/theme/theme.service";
import { Component, ViewEncapsulation } from "@angular/core";
import { ThemeStorageService } from "@stores/theme-storage.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	constructor(
		private themeService: ThemeService,
		private themeStorageService: ThemeStorageService
	) {}

	toggle() {
		const active = this.themeService.getActiveTheme();
		if (active.name === "light") {
			this.themeService.setTheme("dark");
			this.themeStorageService.saveTheme("dark");
		} else {
			this.themeService.setTheme("light");
			this.themeStorageService.saveTheme("light");
		}
	}
}
