import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "@shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { NgModule } from "@angular/core";

@NgModule({
	imports: [
		SharedModule,
		ReactiveFormsModule,
		HttpClientModule,
		AuthRoutingModule
	],
	declarations: [SigninComponent, SignupComponent]
})
export class AuthModule {}
