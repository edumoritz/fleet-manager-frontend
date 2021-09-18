import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@core/guards/auth.guard";

const routes: Routes = [
	{
		path: "",
		loadChildren: () =>
			import("./home/home.module").then((m) => m.HomeModule),
		canActivate: [AuthGuard]
	},
	{
		path: "people",
		loadChildren: () =>
			import("./people/people.module").then((m) => m.PeopleModule),
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FeaturesRoutingModule {}
