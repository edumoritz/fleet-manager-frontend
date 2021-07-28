import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { PasswordModule } from "primeng/password";
import { DropdownModule } from "primeng/dropdown";

const routes: Routes = [
	{
		path: "login",
		component: AuthComponent
	}

	// { path: "signin", component: SigninComponent },
	// { path: "signup", component: SignupComponent },
	// { path: "**", redirectTo: "" }
];

@NgModule({
	imports: [
		SharedModule,
		RouterModule.forRoot(routes),
		InputTextModule,
		ButtonModule,
		PasswordModule,
		DropdownModule
	],
	declarations: [AuthComponent, SigninComponent, SignupComponent],
	exports: [AuthComponent]
})
export class AuthModule {}
