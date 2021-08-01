import { AuthGuard } from "./core/guards/auth.guard";
import { HomeComponent } from "./features/home/home.component";

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
		canActivate: [AuthGuard]
	}
	// { path: "**", redirectTo: "signin", pathMatch: "full" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
