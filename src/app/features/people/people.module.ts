import { PeopleComponent } from "./people.component";
import { ListPeopleComponent } from "./list-people/list-people.component";
import { RegisterPeopleComponent } from "./register-people/register-people.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
	{
		path: "",
		component: PeopleComponent,
		children: [
			{
				path: "register",
				pathMatch: "full",
				component: RegisterPeopleComponent
			},
			{
				path: "list",
				pathMatch: "full",
				component: ListPeopleComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	declarations: [
		PeopleComponent,
		ListPeopleComponent,
		RegisterPeopleComponent
	],
	exports: [PeopleComponent]
})
export class PeopleModule {}
