import { CommonModule } from "@angular/common";
import { AuthGuard } from "@core/guards/auth.guard";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./page/home.component";
import { KnobModule } from "primeng/knob";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
		canActivateChild: [AuthGuard],
		children: [
			{
				path: "people",
				loadChildren: () =>
					import("../people/people.module").then(
						(m) => m.PeopleModule
					)
			}
		]
	}
];

@NgModule({
	imports: [
		CommonModule,
		KnobModule,
		ButtonModule,
		FormsModule,
		RouterModule.forChild(routes)
	],
	declarations: [HomeComponent],
	providers: [AuthGuard]
})
export class HomeModule {}
