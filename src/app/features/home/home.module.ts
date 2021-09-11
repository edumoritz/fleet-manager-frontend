import { AuthGuard } from "@core/guards/auth.guard";
import { RouterModule } from "@angular/router";
import { MenuHeaderModule } from "@shared/components/menu-header/menu-header.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";

@NgModule({
	imports: [
		CommonModule,
		MenuHeaderModule,
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
