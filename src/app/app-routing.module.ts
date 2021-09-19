import { AuthGuard } from "@core/guards/auth.guard";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "login",
		loadChildren: () =>
			import("./features/auth/auth.module").then((m) => m.AuthModule)
	},
	{
		path: "",
		canActivate: [AuthGuard],
		loadChildren: () =>
			import("./features/home/home.module").then((m) => m.HomeModule)
	},
	{
		path: "**",
		redirectTo: "",
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [AuthGuard]
})
export class AppRoutingModule {}
