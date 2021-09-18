import { AuthGuard } from "@core/guards/auth.guard";
import { RouterModule } from "@angular/router";
import { MenuHeaderModule } from "@shared/components/menu-header/menu-header.module";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { KnobModule } from "primeng/knob";
import { FormsModule } from "@angular/forms";

@NgModule({
	imports: [
		MenuHeaderModule,
		KnobModule,
		FormsModule,
		RouterModule.forChild([
			{
				path: "",
				component: HomeComponent,
				canActivate: [AuthGuard]
			}
		])
	],
	declarations: [HomeComponent]
})
export class HomeModule {}
