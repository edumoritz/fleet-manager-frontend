import { HomeModule } from "./home/home.module";
import { ButtonModule } from "primeng/button";
import { themeStorage } from "./shared/theme/theme-storage";
import { darkTheme } from "./shared/theme/dark-theme";
import { lightTheme } from "./shared/theme/light-theme";
import { ThemeModule } from "./shared/theme/theme.module";
import { httpInterceptorProviders } from "./http-interceptors/index";
import { CoreModule } from "./core/core.module";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		HomeModule,
		CoreModule,
		AuthModule,
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
