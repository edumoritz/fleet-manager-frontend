import { NgModule } from "@angular/core";
import { RegisterPeopleComponent } from "./register-people.component";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "@core/guards/auth.guard";

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: "",
				component: RegisterPeopleComponent,
				canActivate: [AuthGuard]
			}
		])
	],
	declarations: [RegisterPeopleComponent]
})
export class RegisterPeopleModule {}
