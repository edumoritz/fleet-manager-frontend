import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "signin"
	},
	{
		path: "signin",
		component: SigninComponent
	},
	{ path: "signup", component: SignupComponent }
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {}
