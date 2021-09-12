import { AuthGuard } from "@core/guards/auth.guard";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
	{
		path: "list",
		loadChildren: () =>
			import("./list-people/list-people.module").then(
				(m) => m.ListPeopleModule
			),
		canActivate: [AuthGuard]
	},
	{
		path: "register",
		loadChildren: () =>
			import("./register-people/register-people.module").then(
				(m) => m.RegisterPeopleModule
			),
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)]
})
export class PeopleModule {}
