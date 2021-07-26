import { HomeModule } from "./features/home/home.module";
import { AuthModule } from "./features/auth/auth.module";
import { httpInterceptorProviders } from "./http-interceptors/index";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "./core/core.module";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		AuthModule,
		HomeModule,
		CoreModule
	],
	providers: [httpInterceptorProviders],
	bootstrap: [AppComponent]
})
export class AppModule {}
