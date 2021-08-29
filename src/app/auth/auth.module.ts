import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { SharedModule } from "@shared/shared.module";

const routes: Routes = [
	{ path: "signin", component: SigninComponent },
	{ path: "signup", component: SignupComponent },
	{ path: "**", redirectTo: "signin", pathMatch: "full" }
];

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule,
		SharedModule,
		RouterModule.forRoot(routes)
	],
	declarations: [AuthComponent, SigninComponent, SignupComponent],
	exports: [AuthComponent]
})
export class AuthModule {}
