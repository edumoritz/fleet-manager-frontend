import { MenuHeaderModule } from "@shared/components/menu-header/menu-header.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";

@NgModule({
	imports: [CommonModule, MenuHeaderModule],
	declarations: [HomeComponent]
})
export class HomeModule {}
