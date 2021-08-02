import { themeStorage } from "./shared/theme/theme-storage";
import { darkTheme } from "./shared/theme/dark-theme";
import { lightTheme } from "./shared/theme/light-theme";
import { ThemeModule } from "./shared/theme/theme.module";
import { HomeModule } from "./features/home/home.module";
import { AuthModule } from "./features/auth/auth.module";
import { httpInterceptorProviders } from "./http-interceptors/index";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "./core/core.module";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		AuthModule,
		HomeModule,
		CoreModule,
		ButtonModule,
		ThemeModule.forRoot({
			themes: [lightTheme, darkTheme],
			active: themeStorage()
		})
	],
	providers: [httpInterceptorProviders],
	bootstrap: [AppComponent]
})
export class AppModule {}
