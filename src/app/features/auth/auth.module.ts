import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";

const routes: Routes = [
	{ path: "login", component: AuthComponent },
	{ path: "**", redirectTo: "" }
];

@NgModule({
	imports: [SharedModule, RouterModule.forRoot(routes)],
	declarations: [AuthComponent],
	exports: [AuthComponent]
})
export class AuthModule {}
