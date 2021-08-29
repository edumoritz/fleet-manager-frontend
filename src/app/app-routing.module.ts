import { AuthGuard } from "./core/guards/auth.guard";

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
		canActivate: [AuthGuard]
	}
	// {
	//     path: '**',
	//     redirectTo: NAO ENCONTRADO
	// }

	// loadChildren: () =>
	// 		import("./features/home/home.module").then((m) => m.HomeModule),
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
