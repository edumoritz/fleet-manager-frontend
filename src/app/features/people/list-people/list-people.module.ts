import { AuthGuard } from "@core/guards/auth.guard";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ListPeopleComponent } from "./list-people.component";

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: "",
				component: ListPeopleComponent,
				canActivate: [AuthGuard]
			}
		])
	],
	declarations: [ListPeopleComponent]
})
export class ListPeopleModule {}
