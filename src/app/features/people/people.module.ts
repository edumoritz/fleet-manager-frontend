import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "@shared/shared.module";
import { PeopleComponent } from "./people.component";
import { ListPeopleComponent } from "./list-people/list-people.component";
import { RegisterPeopleComponent } from "./register-people/register-people.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DataPersonComponent } from "./components/data-person/data-person.component";
import { PageHeaderModule } from "@shared/components/page-header/page-header.module";

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
	imports: [
		SharedModule,
		ReactiveFormsModule,
		PageHeaderModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		PeopleComponent,
		ListPeopleComponent,
		RegisterPeopleComponent,
		DataPersonComponent
	],
	exports: [PeopleComponent]
})
export class PeopleModule {}
